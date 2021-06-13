export {};
const router = require('express').Router();
import { Request, Response } from 'express';
const Board = require('./board.model');
const BoardsService = require('./board.service');

router.route('/').get((_req: Request, res: Response) => {
  const Boards = BoardsService.getAllBoards();
  res.status(200).json(Boards.map(Board.toResponse));
});

router.route('/:id').get((req: Request, res: Response) => {
  const board = BoardsService.getBoard(req.params['id']);
  res.status(200).json(Board.toResponse(board));
});

router.route('/').post((req: Request, res: Response) => {
  const board = BoardsService.postBoard(req.body);
  res.status(201).json(Board.toResponse(board));
});

router.route('/:id').put((req: Request, res: Response) => {
  const board = BoardsService.putBoard(req.params['id'], req.body);
  res.status(200).json(Board.toResponse(board));
});

router.route('/:id').delete((req: Request, res: Response) => {
  BoardsService.deleteBoard(req.params['id']);
  res.sendStatus(204);
});

module.exports = router;
