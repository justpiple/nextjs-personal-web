import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';
import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";
import moment from "moment-timezone";
function randomString(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

export default withIronSessionApiRoute(uploadHandler, sessionOpt)

async function uploadHandler(req, res) {
    if (!req.session?.state?.isLoggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    try {
        if (req.method === 'POST') {
            const db = await clientPromise
            const id = req.body._id ? ObjectId(req.body._id) : ObjectId(32)
            const isNew = !req.body._id
            const short = req.body.short || randomString(5)
            delete req.body._id
            const insert = await db.db('personal-blog').collection('blog-post').updateOne({ _id: id }, { $set: !isNew ? req.body : { ...req.body, authorName: req.session.name, clickCount: 0, pubDate: new Date().getTime(), short } }, { upsert: true })
            await db.db('personal-blog').collection('link').updateOne({ _id: id }, { $set: { isBlog: true, url: req.body.link, id: short, ...(isNew ? { clickCount: 0 } : {}) } }, { upsert: true })
            return res.send({ status: 200, mongo: insert, isNew: isNew })
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