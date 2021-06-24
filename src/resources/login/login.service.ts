import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { getRepository } from "typeorm";
import { User } from "../../entity/User";
import { JWT_SECRET_KEY } from '../../common/config';

const signToken = async (login: string, password: string) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({ where: { login: login } });
    if (user) {
        const isEqualPass = await bcrypt.compare(password, user.password);
        if (!isEqualPass) {
            throw new Error('Error comparing passwords hash');
        }
        const payload = { login: user.login, userId: user.id };
        return jwt.sign(payload, JWT_SECRET_KEY!, { expiresIn: '1h' });
    } else {
        throw new Error('User is not found in DB');
    }

};


export { signToken };