import { withIronSessionApiRoute } from 'iron-session/next';
import clientPromise from "../../lib/mongodb";
import sessionOpt from '../../lib/sessionOpt';
import rateLimit from '../../lib/rateLimit';

const limiter = rateLimit({
    interval: 10 * 60 * 1000,
    uniqueTokenPerInterval: 500,
})
export default withIronSessionApiRoute(loginRoute, sessionOpt)
async function loginRoute(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
    const { username, password } = await req.body
    if (!username || !password) return res.status(400).json({ status: 400, message: "Bad request" })
    try {
        const checkLimit = await limiter.check(res, 5, 'RATE_LIMIT')
        if (checkLimit.isRateLimited) return res.status(429).json({ status: 429, message: "Rate limit exceeded, please try again later!" })
        const db = await clientPromise
        var getDB = await db.db('personal-blog').collection('user-data').findOne({ username, password })
        if (getDB) {
            const state = { isLoggedIn: true, ...getDB }
            req.session.state = state
            await req.session.save()
            res.json({ status: 200, state })
        } else {
            res.status(403).json({ status: 403, message: "The username or password is incorrect" })
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: "Internal Server Error" })
    }
}

