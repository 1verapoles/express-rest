export {};
const Task = require('../../common/db');
import {taskType, delType} from '../../common/all';

const getAllTasksRepo = (boardId: string): taskType[] => Task.getAllTasks(boardId);

const getTaskRepo = (boardId: string, id: string): taskType => Task.getTask(boardId, id);


const postTaskRepo = (boardId: string, task: taskType): taskType => Task.postTask(boardId, task);

const putTaskRepo = (boardId: string, id: string, task: taskType): taskType => Task.putTask(boardId, id, task);

const deleteTaskRepo = (boardId: string, id: string): delType => Task.deleteTask(boardId, id);

module.exports = {
  getAllTasks: getAllTasksRepo,
  getTask: getTaskRepo,
  postTask: postTaskRepo,
  putTask: putTaskRepo,
  deleteTask: deleteTaskRepo
};
