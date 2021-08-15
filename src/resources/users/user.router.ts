export {};
const router = require('express').Router();
import { Request, Response } from 'express';
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get((_req: Request, res: Response) => {
  const users = usersService.getAllUsers();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:id').get((req: Request, res: Response) => {
  const user = usersService.getUser(req.params['id']);
  res.status(200).json(User.toResponse(user));
});

router.route('/').post((req: Request, res: Response) => {
  const user = usersService.postUser(req.body);
  res.status(201).json(User.toResponse(user));
});

router.route('/:id').put((req: Request, res: Response) => {
  const user = usersService.putUser(req.params['id'], req.body);
  res.status(200).json(User.toResponse(user));
});

router.route('/:id').delete((req: Request, res: Response) => {
  usersService.deleteUser(req.params['id']);
  res.sendStatus(204);
});

module.exports = router;
