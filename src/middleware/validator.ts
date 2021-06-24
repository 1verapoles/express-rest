import jwt from 'jsonwebtoken';
import { getRepository } from "typeorm";
import { User } from "../entity/User";
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET_KEY } from '../common/config';

//@ts-ignore
function checkAuth(req: Request, res: Response, next: NextFunction) {
  if (['/doc', '/login', '/'].includes(req.path)) {
    next();
  } else {
    const sessionToken = req.headers.authorization;
    // console.log('sessionToken', sessionToken);
    if (sessionToken && !sessionToken.includes('Bearer')) return res.status(401).send({ auth: false, message: "Authorization header doesn’t follow Bearer scheme" });
    if (!sessionToken) return res.status(401).send({ auth: false, message: "No token provided." });
    else {
      //@ts-ignore
      jwt.verify(sessionToken.split(' ')[1], JWT_SECRET_KEY, (_err, decoded) => {
        if (decoded) {
          const userRepository = getRepository(User);
          userRepository.findOne({ where: { userId: decoded['userId'], login: decoded['login'] } }).then(_user => {
            //req.user = user;
            console.log(`user: ${_user}`)
            next();
          },
            () => {
              return res.status(403).send({ error: "User is not found in DB" });
            });

        } else {
          return res.status(401).send({ error: "not authorized" })
        }
      });
    }
  }
}


export { checkAuth };