export {};
const boardsRepo = require('./board.memory.repository');
import {boardType, delType} from '../../common/all';

/**
 * Returns the array of all boards
 * @returns {Board[]} all boards
 */
const getAllBoards = (): boardType[] => boardsRepo.getAllBoards();


/**
 * Returns the board by specified id or an error if board is not found
 * @param {string} id  id of board
 * @returns {(Board|Object)} board or error object if an error occurred
 */
const getBoard = (id: string): boardType => boardsRepo.getBoard(id);

/**
 * Creates new board and adds him to db 
 * @param {{title: string, columns: Object[]}} board data for new board
 * @returns {Board} new board 
 */
const postBoard = (board: boardType): boardType => boardsRepo.postBoard(board);

/**
 * Changes board's data in db or returns an error if board is not found
 * @param {string} id  id of board 
 * @param {{title: string, columns: Object[]}} board data for board's update
 * @returns {(Board|Object)} board with changed data or an error if board is not found
 */
const putBoard = (id: string, board: boardType): boardType => boardsRepo.putBoard(id, board);

/**
 * Deletes the board by specified id and all its tasks or returns an error if board is not found
 * @param {string} id  id of board
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteBoard = (id: string): delType => boardsRepo.deleteBoard(id);

module.exports = {
    getAllBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard
};