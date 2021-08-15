"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const Board = require('./board.model');
const BoardsService = require('./board.service');
router.route('/').get((_req, res) => {
    const Boards = BoardsService.getAllBoards();
    res.status(200).json(Boards.map(Board.toResponse));
});
router.route('/:id').get((req, res) => {
    const board = BoardsService.getBoard(req.params['id']);
    res.status(200).json(Board.toResponse(board));
});
router.route('/').post((req, res) => {
    const board = BoardsService.postBoard(req.body);
    res.status(201).json(Board.toResponse(board));
});
router.route('/:id').put((req, res) => {
    const board = BoardsService.putBoard(req.params['id'], req.body);
    res.status(200).json(Board.toResponse(board));
});
router.route('/:id').delete((req, res) => {
    BoardsService.deleteBoard(req.params['id']);
    res.sendStatus(204);
});
module.exports = router;
