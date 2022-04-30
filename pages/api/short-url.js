import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';
import { ObjectId } from 'mongodb';
import clientPromise from "../../lib/mongodb";
import moment from "moment-timezone";


export default withIronSessionApiRoute(uploadHandler, sessionOpt)

async function uploadHandler(req, res) {
    if (!req.session?.state?.isLoggedIn) return res.status(401).json({ status: 401, error: "Unauthorized" })
    try {
        const db = await clientPromise
        if (req.method === 'POST' || req.method === "PUT") {
            if (!req.body.newId || !req.body.url) return res.status(400).json({ status: 400, error: "Bad request" })
            const tambahan = req.body.id ? {} : { clickCount: 0 }
            await db.db('personal-blog').collection('link').updateOne({ id: req.body.id || req.body.newId }, { $set: { url: req.body.url, id: req.body.newId, ...tambahan } }, { upsert: true })
            return res.send({ status: 200, message: "OK." })
        } else if (req.method == "DELETE") {
            if (!req.body.id) return res.status(400).json({ status: 400, error: "Bad request" })
            await db.db('personal-blog').collection('link').deleteOne({ id: req.body.id })
            return res.send({ status: 200, message: "Deleted." })
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