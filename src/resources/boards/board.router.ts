export { };
const router = require('express').Router();
import { Request, Response, NextFunction } from 'express';
//const Board = require('./board.model');
const handlerWrapper = require('../../common/handler-wrapper');
const BoardsService = require('./board.service');

router.route('/').get(handlerWrapper(async (_req: Request, res: Response, _next: NextFunction) => {
  const boards = BoardsService.getAllBoards();
  res.status(200).json({ boards });
}));

router.route('/:id').get(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const board = BoardsService.getBoard(req.params['id']);
  res.status(200).json({ board });
}));

router.route('/').post(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const board = BoardsService.postBoard(req.body);
  res.status(201).json({ board });
}));

router.route('/:id').put(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const board = BoardsService.putBoard(req.params['id'], req.body);
  res.status(200).json({ board });
}));

router.route('/:id').delete(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  BoardsService.deleteBoard(req.params['id']);
  res.sendStatus(204);
}));

module.exports = router;
