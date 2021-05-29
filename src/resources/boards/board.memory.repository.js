const Board = require('../../common/db');

/**
 * Returns the array of all boards
 * @returns {Board[]} all boards
 */
const getAllBoardsRepo = () => Board.getAllBoards();


/**
 * Returns the board by specified id or an error if board is not found
 * @param {string} id  id of board
 * @returns {(Board|Object)} board or error object if an error occurred
 */
const getBoardRepo = (id) => Board.getBoard(id);

/**
 * Creates new board and adds him to db 
 * @param {{title: string, columns: Object[]}} board data for new board
 * @returns {Board} new board 
 */
const postBoardRepo = (board) => Board.postBoard(board);

/**
 * Changes board's data in db or returns an error if board is not found
 * @param {string} id  id of board 
 * @param {{title: string, columns: Object[]}} board data for board's update
 * @returns {(Board|Object)} board with changed data or an error if board is not found
 */
const putBoardRepo = (id, board) => Board.putBoard(id, board);

/**
 * Deletes the board by specified id and all its tasks or returns an error if board is not found
 * @param {string} id  id of board
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteBoardRepo = (id) => Board.deleteBoard(id);

module.exports = {
  getAllBoards: getAllBoardsRepo,
  getBoard: getBoardRepo,
  postBoard: postBoardRepo,
  putBoard: putBoardRepo,
  deleteBoard: deleteBoardRepo
};
