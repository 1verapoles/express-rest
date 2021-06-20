export { };
const { getRepository } = require("typeorm");
const TaskEntity = require('../../common/entities/task.entity');
//const Task = require('../../common/db');
import { taskType, delType } from '../../common/all';

const getAllTasksRepo = async (boardId: string): Promise<taskType[]> => {
  const taskRepository = getRepository(TaskEntity);
  return await taskRepository.find({ where: { boardId: boardId } });
};

const getTaskRepo = async (boardId: string, id: string): Promise<taskType> => {
  const taskRepository = getRepository(TaskEntity);
  return await taskRepository.find({ where: { boardId: boardId, id: id } });
};


const postTaskRepo = async (boardId: string, task: taskType): Promise<taskType> => {
  const taskRepository = getRepository(TaskEntity);
  const newTask = taskRepository.create({ ...task, boardId });
  return await taskRepository.save(newTask);
}

const putTaskRepo = async (boardId: string, id: string, task: taskType): Promise<taskType> => {
  const taskRepository = getRepository(TaskEntity);
  let taskU = await taskRepository.find({ where: { boardId: boardId, id: id } });
  taskU = { ...taskU, ...task };
  return await taskRepository.save(taskU);
};

const deleteTaskRepo = async (boardId: string, id: string): Promise<delType> => {
  const taskRepository = getRepository(TaskEntity);
  const taskR = await taskRepository.find({ where: { boardId: boardId, id: id } });
  await taskRepository.remove(taskR);
};

module.exports = {
  getAllTasks: getAllTasksRepo,
  getTask: getTaskRepo,
  postTask: postTaskRepo,
  putTask: putTaskRepo,
  deleteTask: deleteTaskRepo
};
