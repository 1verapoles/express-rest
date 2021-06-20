export {};
const tasksRepo = require('./task.memory.repository');
import {taskType} from '../../common/all';

const getAllTasks = (boardId: string) => tasksRepo.getAllTasks(boardId);

const getTask = (boardId: string, id: string) => tasksRepo.getTask(boardId, id);

const postTask = (boardId: string, task: taskType) => tasksRepo.postTask(boardId, task);

const putTask = (boardId: string, id: string, task: taskType) => tasksRepo.putTask(boardId, id, task);

const deleteTask = (boardId: string, id: string) => tasksRepo.deleteTask(boardId, id);

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
};
