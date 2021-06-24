import { Router } from 'express';
import { signToken } from './login.service';
import { ApiError } from '../../error/ApiError';

const router = Router();

router.route('/').post(async (req, res, next) => {
    try {
        const { login, password } = req.body;
        if (!login || !password) {
            next(ApiError.badRequest('Body must contain "login", "password" fields'));
            return;
        }
        const token = await signToken(login, password, next);
        res.status(200).json({ token });
    } catch (e) {
        next(e)
    }
});

export { router };