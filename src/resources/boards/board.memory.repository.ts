export {};
const Board = require('../../common/db');
import {boardType, delType} from '../../common/all';

const getAllBoardsRepo = (): boardType[] => Board.getAllBoards();


const getBoardRepo = (id: string): boardType => Board.getBoard(id);

const postBoardRepo = (board: boardType): boardType => Board.postBoard(board);


const putBoardRepo = (id: string, board: boardType): boardType => Board.putBoard(id, board);

const deleteBoardRepo = (id: string): delType => Board.deleteBoard(id);

module.exports = {
  getAllBoards: getAllBoardsRepo,
  getBoard: getBoardRepo,
  postBoard: postBoardRepo,
  putBoard: putBoardRepo,
  deleteBoard: deleteBoardRepo
};
