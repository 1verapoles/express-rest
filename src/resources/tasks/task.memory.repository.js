const Task = require('../../common/db');

const getAllTasks = (boardId) => Task.getAllTasks(boardId);
const getTask = (boardId, id) => Task.getTask(boardId, id);
const postTask = (boardId, task) => Task.postTask(boardId, task);
const putTask = (boardId, id, task) => Task.putTask(boardId, id, task);
const deleteTask = (boardId, id) => Task.deleteTask(boardId, id);

module.exports = {
  getAllTasks,
  getTask,
  postTask,
  putTask,
  deleteTask
};
