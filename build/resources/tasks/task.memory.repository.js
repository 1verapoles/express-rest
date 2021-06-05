"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Task = require('../../common/db');
const getAllTasksRepo = (boardId) => Task.getAllTasks(boardId);
const getTaskRepo = (boardId, id) => Task.getTask(boardId, id);
const postTaskRepo = (boardId, task) => Task.postTask(boardId, task);
const putTaskRepo = (boardId, id, task) => Task.putTask(boardId, id, task);
const deleteTaskRepo = (boardId, id) => Task.deleteTask(boardId, id);
module.exports = {
    getAllTasks: getAllTasksRepo,
    getTask: getTaskRepo,
    postTask: postTaskRepo,
    putTask: putTaskRepo,
    deleteTask: deleteTaskRepo
};
