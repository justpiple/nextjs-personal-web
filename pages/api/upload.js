import { v2 as cloudinary } from 'cloudinary';
import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';


export default withIronSessionApiRoute(uploadHandler, sessionOpt)

function uploadHandler(req, res) {
    if (!req.session?.state?.isLoggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    if (req.method === 'POST') {
        var name = `${Date.now() + "-" + Math.floor(Math.random() * 10000)}`
        cloudinary.uploader.upload(req.body.upload, {
            public_id: `blog-content/${name}`
        }, (error, result) => {
            if (error) return res.status(500).json({ status: 500, error: "Internal Server Error" });
            res.status(200).json({ status: 200, url: result.secure_url });
        });
    } else {
        res.status(405).json({ status: 403, error: `Method '${req.method}' Not Allowed` });
    }

}
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb'
        }
    }
}