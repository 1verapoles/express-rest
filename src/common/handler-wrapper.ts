import { Request, Response, NextFunction } from 'express';

const handlerWrapper = (callback: (req: Request, res: Response, next: NextFunction) => void) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    return await callback(req, res, next);
  } catch (err) {
    return next(err);
  }
};

module.exports = handlerWrapper;