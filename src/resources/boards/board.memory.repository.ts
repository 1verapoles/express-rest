export { };
const Board = require('../../common/entities/board.entity');
const TaskEntity = require('../../common/entities/task.entity');
import { boardType, delType } from '../../common/all';
const { getRepository } = require("typeorm");

const getAllBoardsRepo = async (): Promise<boardType[]> => {
  const boardRepository = getRepository(Board);
  return await boardRepository.find();
}


const getBoardRepo = async (id: string): Promise<boardType> => {
  try {
    const boardRepository = getRepository(Board); return boardRepository.findOneOrFail(id);
  } catch (err) {
    throw err;
  }
}

const postBoardRepo = async (board: boardType): Promise<boardType> => {
  const boardRepository = getRepository(Board);
  const newBoard = boardRepository.create(board);
  return await boardRepository.save(newBoard);
}


const putBoardRepo = async (id: string, board: boardType): Promise<boardType> => {
  const boardRepository = getRepository(Board);
  let boardU = await getBoardRepo(id);
  boardU = { ...boardU, ...board };
  return await boardRepository.save(boardU);
}

const deleteBoardRepo = async (id: string): Promise<delType> => {
  const boardRepository = getRepository(Board);
  const taskRepository = getRepository(TaskEntity);
  const taskR = await taskRepository.find({ where: { boardId: id } });
  await taskRepository.remove(taskR);
  const boardR = await getBoardRepo(id);
  await boardRepository.remove(boardR);
}

module.exports = {
  getAllBoards: getAllBoardsRepo,
  getBoard: getBoardRepo,
  postBoard: postBoardRepo,
  putBoard: putBoardRepo,
  deleteBoard: deleteBoardRepo
};
