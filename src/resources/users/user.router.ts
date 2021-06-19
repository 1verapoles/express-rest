export { };
const router = require('express').Router();
import { Request, Response, NextFunction } from 'express';
const handlerWrapper = require('../../common/handler-wrapper');
const usersService = require('./user.service');

router.route('/').get(handlerWrapper(async (_req: Request, res: Response, _next: NextFunction) => {
  const users = usersService.getAllUsers();
  res.status(200).json({ users });
}));

router.route('/:id').get(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const user = usersService.getUser(req.params['id']);
  res.status(200).json({ user });
}));

router.route('/').post(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const user = usersService.postUser(req.body);
  res.status(201).json({ user });
}));

router.route('/:id').put(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const user = usersService.putUser(req.params['id'], req.body);
  res.status(200).json({ user });
}));

router.route('/:id').delete(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  usersService.deleteUser(req.params['id']);
  res.sendStatus(204);
}));

module.exports = router;
