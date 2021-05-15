const Board = require('../../common/db');

const getAllBoards = () => Board.getAllBoards();
const getBoard = (id) => Board.getBoard(id);
const postBoard = (board) => Board.postBoard(board);
const putBoard = (id, board) => Board.putBoard(id, board);
const deleteBoard = (id) => Board.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoard,
  postBoard,
  putBoard,
  deleteBoard
};
