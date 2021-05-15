const tasksRepo = require('./task.memory.repository');

const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);
const getTask = (boardId, id) => tasksRepo.getTask(boardId, id);
const postTask = (boardId, task) => tasksRepo.postTask(boardId, task);
const putTask = (boardId, id, task) => tasksRepo.putTask(boardId, id, task);
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
};
