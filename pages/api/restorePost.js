import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';
import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";


export default withIronSessionApiRoute(uploadHandler, sessionOpt)

async function uploadHandler(req, res) {
    if (!req.session?.state?.isLoggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    try {
        if (req.method === 'POST') {
            const db = await clientPromise
            const postId = req.body.id
            const getPostData = await db.db('personal-blog').collection('deleted-post').findOne({ _id: ObjectId(postId) })
            if (getPostData) {
                await db.db('personal-blog').collection('deleted-post').deleteMany({ metadata: { id: postId } })
                delete getPostData.timestamp
                await db.db('personal-blog').collection('blog-post').insertOne({ ...getPostData })
                return res.json({ status: 200, message: "Post has been restored." })
            } else {
                return res.status(404).json({ status: 404, message: "Post not found!" })
            }
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