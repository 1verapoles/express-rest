export {};
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
import { userType, boardType, dbType, taskType, delType } from './all';

const db: dbType = { users: [], boards: [], tasks: [] };

const getAllUsers = (): userType[] => db.users;

const getUser = (id: string): userType => {
  const user = db.users.find((el: userType) => el.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

const postUser = (user: userType): userType => {
  const newUser = new User({ ...user });
  db.users.push(newUser);
  return newUser;
};

const putUser = (id: string, user: userType): userType => {
  const userUpdate = db.users.find((el: userType) => el.id === id);
  if (!userUpdate) throw new Error(`User with id ${id} not found`);
  if (user.name) {userUpdate.name = user.name;}
  if (user.login) {userUpdate.login = user.login;}
  if (user.password) {userUpdate.password = user.password;}
  return userUpdate;
};

const deleteUser = (id: string): delType => {
  const userIndex = db.users.findIndex((el: userType) => el.id === id);
  if (userIndex === -1) throw new Error(`User with id ${id} not found`);
  db.tasks.forEach((task: taskType) => { if (task.userId === id) { task.userId = null; } });
  db.users.splice(userIndex, 1);
};

const getAllBoards = (): boardType[] => db.boards;

const getBoard = (id: string): boardType => {
  const board = db.boards.find((el: boardType) => el.id === id);
  if (!board) throw new Error(`Board with id ${id} not found`);
  return board;
};

const postBoard = (board: boardType): boardType => {
  const newBoard = new Board({ ...board });
  db.boards.push(newBoard);
  return newBoard;
};

const putBoard = (id: string, board: boardType): boardType => {
  const boardUpdate = db.boards.find((el: boardType) => el.id === id);
  if (!boardUpdate) throw new Error(`Board with id ${id} not found`);
  if (board.title) {boardUpdate.title = board.title;}
  if (board.columns.length) {boardUpdate.columns = board.columns;}
  return boardUpdate;
};

const deleteBoard = (id: string): delType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === id);
  if (boardIndex === -1) throw new Error(`Board with id ${id} not found`);
  db.tasks.forEach((task: taskType) => { if (task.boardId === id) { db.tasks.splice(db.tasks.indexOf(task), 1); } });
  db.boards.splice(boardIndex, 1);
};

const getAllTasks = (boardId: string): taskType[] => db.tasks.filter((el: taskType) => el.boardId === boardId);

const getTask = (boardId: string, id: string): taskType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const task = db.tasks.find((el: taskType) => el.id === id && el.boardId === boardId);
  if (!task) throw new Error(`Task with id ${id} not found`);
  return task;
};

const postTask = (boardId: string, task: taskType): taskType => {
  const newTask = new Task({ ...task, boardId });
  db.tasks.push(newTask);
  return newTask;
};

const putTask = (boardId: string, id: string, task: taskType): taskType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const taskUpdate = db.tasks.find((el: taskType) => el.id === id && el.boardId === boardId);
  if (!taskUpdate) throw new Error(`Task with id ${id} not found`);
  if (task.title) {taskUpdate.title = task.title;}
  if (task.order) {taskUpdate.order = task.order;}
  if (task.description) {taskUpdate.description = task.description;}
  if (task.userId) {taskUpdate.userId = task.userId;}
  if (boardId) {taskUpdate.boardId = boardId;}
  if (task.columnId) {taskUpdate.columnId = task.columnId;}
  return taskUpdate;
};


const deleteTask = (boardId: string, id: string): delType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const taskIndex = db.tasks.findIndex((el: taskType) => el.id === id && el.boardId === boardId);
  if (taskIndex === -1) throw new Error(`Task with id ${id} not found`);
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