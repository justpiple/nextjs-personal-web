import { withIronSessionApiRoute } from 'iron-session/next';
import clientPromise from "../../lib/mongodb";
import sessionOpt from '../../lib/sessionOpt';


export default withIronSessionApiRoute(loginRoute, sessionOpt)
async function loginRoute(req, res) {
    req.session.destroy();
    res.status(302).setHeader('Location', '/admin/login').send({ status: 200 });
}