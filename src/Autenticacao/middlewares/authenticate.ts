import { Request, Response, NextFunction } from 'express';
import createAuthStrategy from '../auth/authFactory';
import { CustomRequest, CustomSession } from '../interfaces/interfaces';

async function authenticate(req: Request, res: Response, next: NextFunction)  {
    try {
        const authStrategy = createAuthStrategy();
        let authId: string | null = null;

        if (process.env.AUTH_STRATEGY === 'session') {
            if (req.session &&(req.session as CustomSession).auth && (req.session as CustomSession).auth.id) {
                authId = (req.session as CustomSession).auth!.id!;
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

        (req as CustomRequest).auth = { id: authId };

        next();
    } catch  {
        res.status(401).json({ message: 'Authentication failed' });
    }
}