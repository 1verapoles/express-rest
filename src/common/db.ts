export {};
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
import { userType, boardType, dbType, taskType, delType } from './all';
interface IError extends Error {
  statusCode?: number;
} 

const db: dbType = { users: [], boards: [], tasks: [] };

const getAllUsers = (): userType[] => db.users;

const getUser = (id: string): userType => {
  const user = db.users.find((el: userType) => el.id === id);
  if (!user) {const e: IError = new Error(`User with id ${id} not found`); e.statusCode = 404; throw e;}
  return user;
};

const postUser = (user: userType): userType => {
  const newUser = new User({ ...user });
  db.users.push(newUser);
  return newUser;
};

const putUser = (id: string, user: userType): userType => {
  const userUpdate = db.users.find((el: userType) => el.id === id);
  if (!userUpdate)   {const e: IError = new Error(`User with id ${id} not found`); e.statusCode = 404; throw e;} 
  if (user.name) {userUpdate.name = user.name;}
  if (user.login) {userUpdate.login = user.login;}
  if (user.password) {userUpdate.password = user.password;}
  return userUpdate;
};

const deleteUser = (id: string): delType => {
  const userIndex = db.users.findIndex((el: userType) => el.id === id);
  if (userIndex === -1)  {const e: IError = new Error(`User with id ${id} not found`); e.statusCode = 404; throw e;}
  db.tasks.forEach((task: taskType) => { if (task.userId === id) { task.userId = null; } });
  db.users.splice(userIndex, 1);
};

const getAllBoards = (): boardType[] => db.boards;

const getBoard = (id: string): boardType => {
  const board = db.boards.find((el: boardType) => el.id === id);
  if (!board)  {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  return board;
};

const postBoard = (board: boardType): boardType => {
  const newBoard = new Board({ ...board });
  db.boards.push(newBoard);
  return newBoard;
};

const putBoard = (id: string, board: boardType): boardType => {
  const boardUpdate = db.boards.find((el: boardType) => el.id === id);
  if (!boardUpdate) {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  if (board.title) {boardUpdate.title = board.title;}
  if (board.columns.length) {boardUpdate.columns = board.columns;}
  return boardUpdate;
};

const deleteBoard = (id: string): delType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === id);
  if (boardIndex === -1) {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  db.tasks.forEach((task: taskType) => { if (task.boardId === id) { db.tasks.splice(db.tasks.indexOf(task), 1); } });
  db.boards.splice(boardIndex, 1);
};

const getAllTasks = (boardId: string): taskType[] => db.tasks.filter((el: taskType) => el.boardId === boardId);

const getTask = (boardId: string, id: string): taskType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  const task = db.tasks.find((el: taskType) => el.id === id && el.boardId === boardId);
  if (!task) {const e: IError = new Error(`Task with id ${id} not found`); e.statusCode = 404; throw e;}
  return task;
};

const postTask = (boardId: string, task: taskType): taskType => {
  const newTask = new Task({ ...task, boardId });
  db.tasks.push(newTask);
  return newTask;
};

const putTask = (boardId: string, id: string, task: taskType): taskType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  const taskUpdate = db.tasks.find((el: taskType) => el.id === id && el.boardId === boardId);
  if (!taskUpdate) {const e: IError = new Error(`Task with id ${id} not found`); e.statusCode = 404; throw e;}
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
  if (boardIndex === -1) {const e: IError = new Error(`Board with id ${id} not found`); e.statusCode = 404; throw e;}
  const taskIndex = db.tasks.findIndex((el: taskType) => el.id === id && el.boardId === boardId);
  if (taskIndex === -1) {const e: IError = new Error(`Task with id ${id} not found`); e.statusCode = 404; throw e;}
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