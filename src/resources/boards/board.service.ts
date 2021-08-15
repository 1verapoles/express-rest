export {};
const boardsRepo = require('./board.memory.repository');
import {boardType, delType} from '../../common/all';

const getAllBoards = (): boardType[] => boardsRepo.getAllBoards();


const getBoard = (id: string): boardType => boardsRepo.getBoard(id);


const postBoard = (board: boardType): boardType => boardsRepo.postBoard(board);

const putBoard = (id: string, board: boardType): boardType => boardsRepo.putBoard(id, board);


const deleteBoard = (id: string): delType => boardsRepo.deleteBoard(id);

module.exports = {
    getAllBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard
};