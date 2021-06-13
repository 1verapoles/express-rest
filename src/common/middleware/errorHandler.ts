const { writeErrorLog } = require('./winstonConfig');
import { Request, Response, NextFunction } from 'express';

interface IError extends Error {
  statusCode: number;
} 

const errorHandler = (err: IError, _req: Request, res: Response, next: NextFunction) => {
  if (err) {
    const status = err.statusCode ?  err.statusCode : 500;
    const message = err.message ? err.message : 'Internal Server Error';
    writeErrorLog(err);
    res.status(status).send({ message });
  }
  next();
};

module.exports = errorHandler;