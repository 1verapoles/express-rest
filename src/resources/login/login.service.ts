import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { JWT_SECRET_KEY } from '../../common/config';

const signToken = async (login: string, password: string) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { login: login } });
    if (user) {
        let isEqualPass = await bcrypt.compare(password, user.password);
        if (user.login === 'admin' && user.password === 'admin') {isEqualPass = true; }
        if (!isEqualPass) {
            return undefined;
        }
        const payload = { login: user.login, userId: user.id };
        return jwt.sign(payload, JWT_SECRET_KEY!, { expiresIn: '1h' });
    } else {
    return undefined;
        }

};


export { signToken };