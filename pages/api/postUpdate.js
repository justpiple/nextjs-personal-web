import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';
import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";
import moment from "moment-timezone";


export default withIronSessionApiRoute(uploadHandler, sessionOpt)

async function uploadHandler(req, res) {
    if (!req.session?.state?.isLoggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    try {
        if (req.method === 'POST') {
            const db = await clientPromise
            const postId = req.body._id
            delete req.body._id
            if (!req.body.pubDate) req.body.pubDate = moment().tz("Asia/Jakarta").format("MMMM D, yyyy");
            const insert = await db.db('personal-blog').collection('blog-post').updateOne({ _id: postId ? ObjectId(postId) : ObjectId(32) }, { $set: req.body }, { upsert: true })
            return res.send({ status: 200, mongo: insert })
        } else {
            res.status(405).json({ status: 403, error: `Method '${req.method}' Not Allowed` });
        }
    } catch (e) {
        console.log(e)
        res.status(500).json({ status: 500, error: `Internal server error` });
    }

}
export const config = {
    api: {
        bodyParser: {
            sizeLimit: '3mb'
        }
    }
}