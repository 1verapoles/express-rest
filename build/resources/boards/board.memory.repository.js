"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board = require('../../common/db');
const getAllBoardsRepo = () => Board.getAllBoards();
const getBoardRepo = (id) => Board.getBoard(id);
const postBoardRepo = (board) => Board.postBoard(board);
const putBoardRepo = (id, board) => Board.putBoard(id, board);
const deleteBoardRepo = (id) => Board.deleteBoard(id);
module.exports = {
    getAllBoards: getAllBoardsRepo,
    getBoard: getBoardRepo,
    postBoard: postBoardRepo,
    putBoard: putBoardRepo,
    deleteBoard: deleteBoardRepo
};
