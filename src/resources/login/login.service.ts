import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { JWT_SECRET_KEY } from '../../common/config';
import { NextFunction } from 'express';
import { ApiError } from '../../error/ApiError';

const signToken = async (login: string, password: string, next: NextFunction) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { login: login } });
    if (user) {
        const isEqualPass = await bcrypt.compare(password, user.password);
        if (!isEqualPass) {
            return next(ApiError.userNotFound('Error comparing passwords hash'));
        }
        const payload = { login: user.login, userId: user.id };
        return jwt.sign(payload, JWT_SECRET_KEY!, { expiresIn: '1h' });
    } else {
        return next(ApiError.userNotFound('User is not found in DB'));
    }

};


export { signToken };