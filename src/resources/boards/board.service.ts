export { };
const boardsRepo = require('./board.memory.repository');
import { boardType, delType } from '../../common/all';

const getAllBoards = (): Promise<boardType[]> => boardsRepo.getAllBoards();


const getBoard = (id: string): Promise<boardType> => boardsRepo.getBoard(id);


const postBoard = (board: boardType): Promise<boardType> => boardsRepo.postBoard(board);

const putBoard = (id: string, board: boardType): Promise<boardType> => boardsRepo.putBoard(id, board);


const deleteBoard = (id: string): Promise<delType> => boardsRepo.deleteBoard(id);

module.exports = {
    getAllBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard
};