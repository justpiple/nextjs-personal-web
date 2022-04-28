import { withIronSessionApiRoute } from 'iron-session/next';
import sessionOpt from '../../lib/sessionOpt';


export default withIronSessionApiRoute(user, sessionOpt)
function user(req, res) {
    res.send(req.session || {})
}