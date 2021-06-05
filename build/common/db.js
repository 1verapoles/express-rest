"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const db = { users: [], boards: [], tasks: [] };
const getAllUsers = () => db.users;
const getUser = (id) => {
    const user = db.users.find((el) => el.id === id);
    if (!user)
        throw new Error(`User with id ${id} not found`);
    return user;
};
const postUser = (user) => {
    const newUser = new User(Object.assign({}, user));
    db.users.push(newUser);
    return newUser;
};
const putUser = (id, user) => {
    const userUpdate = db.users.find((el) => el.id === id);
    if (!userUpdate)
        throw new Error(`User with id ${id} not found`);
    if (user.name) {
        userUpdate.name = user.name;
    }
    if (user.login) {
        userUpdate.login = user.login;
    }
    if (user.password) {
        userUpdate.password = user.password;
    }
    return userUpdate;
};
const deleteUser = (id) => {
    const userIndex = db.users.findIndex((el) => el.id === id);
    if (userIndex === -1)
        throw new Error(`User with id ${id} not found`);
    db.tasks.forEach((task) => { if (task.userId === id) {
        task.userId = null;
    } });
    db.users.splice(userIndex, 1);
};
const getAllBoards = () => db.boards;
const getBoard = (id) => {
    const board = db.boards.find((el) => el.id === id);
    if (!board)
        throw new Error(`Board with id ${id} not found`);
    return board;
};
const postBoard = (board) => {
    const newBoard = new Board(Object.assign({}, board));
    db.boards.push(newBoard);
    return newBoard;
};
const putBoard = (id, board) => {
    const boardUpdate = db.boards.find((el) => el.id === id);
    if (!boardUpdate)
        throw new Error(`Board with id ${id} not found`);
    if (board.title) {
        boardUpdate.title = board.title;
    }
    if (board.columns.length) {
        boardUpdate.columns = board.columns;
    }
    return boardUpdate;
};
const deleteBoard = (id) => {
    const boardIndex = db.boards.findIndex((el) => el.id === id);
    if (boardIndex === -1)
        throw new Error(`Board with id ${id} not found`);
    db.tasks.forEach((task) => { if (task.boardId === id) {
        db.tasks.splice(db.tasks.indexOf(task), 1);
    } });
    db.boards.splice(boardIndex, 1);
};
const getAllTasks = (boardId) => db.tasks.filter((el) => el.boardId === boardId);
const getTask = (boardId, id) => {
    const boardIndex = db.boards.findIndex((el) => el.id === boardId);
    if (boardIndex === -1)
        throw new Error(`Board with id ${boardId} not found`);
    const task = db.tasks.find((el) => el.id === id && el.boardId === boardId);
    if (!task)
        throw new Error(`Task with id ${id} not found`);
    return task;
};
const postTask = (boardId, task) => {
    const newTask = new Task(Object.assign(Object.assign({}, task), { boardId }));
    db.tasks.push(newTask);
    return newTask;
};
const putTask = (boardId, id, task) => {
    const boardIndex = db.boards.findIndex((el) => el.id === boardId);
    if (boardIndex === -1)
        throw new Error(`Board with id ${boardId} not found`);
    const taskUpdate = db.tasks.find((el) => el.id === id && el.boardId === boardId);
    if (!taskUpdate)
        throw new Error(`Task with id ${id} not found`);
    if (task.title) {
        taskUpdate.title = task.title;
    }
    if (task.order) {
        taskUpdate.order = task.order;
    }
    if (task.description) {
        taskUpdate.description = task.description;
    }
    if (task.userId) {
        taskUpdate.userId = task.userId;
    }
    if (boardId) {
        taskUpdate.boardId = boardId;
    }
    if (task.columnId) {
        taskUpdate.columnId = task.columnId;
    }
    return taskUpdate;
};
const deleteTask = (boardId, id) => {
    const boardIndex = db.boards.findIndex((el) => el.id === boardId);
    if (boardIndex === -1)
        throw new Error(`Board with id ${boardId} not found`);
    const taskIndex = db.tasks.findIndex((el) => el.id === id && el.boardId === boardId);
    if (taskIndex === -1)
        throw new Error(`Task with id ${id} not found`);
    db.tasks.splice(taskIndex, 1);
};
module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser,
    getAllBoards,
    getBoard,
    postBoard,
    putBoard,
    deleteBoard,
    getAllTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
};
