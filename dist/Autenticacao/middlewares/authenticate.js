import createAuthStrategy from '../auth/authFactory';
async function authenticate(req, res, next) {
    try {
        const authStrategy = createAuthStrategy();
        let authId = null;
        if (process.env.AUTH_STRATEGY === 'session') {
            if (req.session && req.session.auth && req.session.auth.id) {
                authId = req.session.auth.id;
            }
        }
        if (process.env.AUTH_STRATEGY === 'jwt') {
            if (req.headers.authorization) {
                const token = req.headers.authorization.split(' ')[1];
                const decoded = await authStrategy.verify(token);
                authId = decoded.id;
            }
        }
        if (!authId) {
            return res.status(401).json({ message: 'User not authenticated' });
        }
        req.auth = { id: authId };
        next();
    }
    catch (_a) {
        res.status(401).json({ message: 'Authentication failed' });
    }
}