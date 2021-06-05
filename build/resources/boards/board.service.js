"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const boardsRepo = require('./board.memory.repository');
const getAllBoards = () => boardsRepo.getAllBoards();
const getBoard = (id) => boardsRepo.getBoard(id);
const postBoard = (board) => boardsRepo.postBoard(board);
const putBoard = (id, board) => boardsRepo.putBoard(id, board);
const deleteBoard = (id) => boardsRepo.deleteBoard(id);
module.exports = {
    getAllBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard
};
