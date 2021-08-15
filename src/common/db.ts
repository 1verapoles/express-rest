export {};
const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
import { userType, boardType, dbType, taskType, delType } from './all';

/**
 * @type {{users: User[], boards: Board[], tasks: Task[]}} 
 */
const db: dbType = { users: [], boards: [], tasks: [] };

/**
 * Returns the array of all users
 * @returns {User[]} all users
 */
const getAllUsers = (): userType[] => db.users;

/**
 * Returns the user by specified id or an error if user not found
 * @param {string} id  id of user
 * @returns {(User|Object)} user or error object if an error occurred
 */
const getUser = (id: string): userType => {
  const user = db.users.find((el: userType) => el.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

/**
 * Creates new user and adds him to db 
 * @param {{name: string, login: string, password: string}} user data for new user
 * @returns {User} new user 
 */
const postUser = (user: userType): userType => {
  const newUser = new User({ ...user });
  db.users.push(newUser);
  return newUser;
};

/**
 * Changes user's data in db or returns an error if user not found
 * @param {string} id  id of user 
 * @param {{name: string, login: string, password: string}} user data for user's update
 * @returns {(User|Object)} user with changed data or an error if user not found
 */
const putUser = (id: string, user: userType): userType => {
  const userUpdate = db.users.find((el: userType) => el.id === id);
  if (!userUpdate) throw new Error(`User with id ${id} not found`);
  if (user.name) {userUpdate.name = user.name;}
  if (user.login) {userUpdate.login = user.login;}
  if (user.password) {userUpdate.password = user.password;}
  return userUpdate;
};

/**
 * Deletes the user by specified id or returns an error if user not found
 * @param {string} id  id of user
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteUser = (id: string): delType => {
  const userIndex = db.users.findIndex((el: userType) => el.id === id);
  if (userIndex === -1) throw new Error(`User with id ${id} not found`);
  db.tasks.forEach((task: taskType) => { if (task.userId === id) { task.userId = null; } });
  db.users.splice(userIndex, 1);
};


/**
 * Returns the array of all boards
 * @returns {Board[]} all boards
 */
const getAllBoards = (): boardType[] => db.boards;

/**
 * Returns the board by specified id or an error if board is not found
 * @param {string} id  id of board
 * @returns {(Board|Object)} board or error object if an error occurred
 */
const getBoard = (id: string): boardType => {
  const board = db.boards.find((el: boardType) => el.id === id);
  if (!board) throw new Error(`Board with id ${id} not found`);
  return board;
};

/**
 * Creates new board and adds him to db 
 * @param {{title: string, columns: Object[]}} board data for new board
 * @returns {Board} new board 
 */
const postBoard = (board: boardType): boardType => {
  const newBoard = new Board({ ...board });
  db.boards.push(newBoard);
  return newBoard;
};

/**
 * Changes board's data in db or returns an error if board is not found
 * @param {string} id  id of board 
 * @param {{title: string, columns: Object[]}} board data for board's update
 * @returns {(Board|Object)} board with changed data or an error if board is not found
 */
const putBoard = (id: string, board: boardType): boardType => {
  const boardUpdate = db.boards.find((el: boardType) => el.id === id);
  if (!boardUpdate) throw new Error(`Board with id ${id} not found`);
  if (board.title) {boardUpdate.title = board.title;}
  if (board.columns.length) {boardUpdate.columns = board.columns;}
  return boardUpdate;
};

/**
 * Deletes the board by specified id and all its tasks or returns an error if board is not found
 * @param {string} id  id of board
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteBoard = (id: string): delType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === id);
  if (boardIndex === -1) throw new Error(`Board with id ${id} not found`);
  db.tasks.forEach((task: taskType) => { if (task.boardId === id) { db.tasks.splice(db.tasks.indexOf(task), 1); } });
  db.boards.splice(boardIndex, 1);
};


/**
 * Returns the array of all tasks of certain board
 * @param {string} boardId  id of board
 * @returns {Task[]} all tasks of certain board
 */
const getAllTasks = (boardId: string): taskType[] => db.tasks.filter((el: taskType) => el.boardId === boardId);

/**
 * Returns the task by specified id and boardId or an error if board or task is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task
 * @returns {(Task|Object)} task or error object if an error occurred
 */
const getTask = (boardId: string, id: string): taskType => {
  const boardIndex = db.boards.findIndex((el: boardType) => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const task = db.tasks.find((el: taskType) => el.id === id && el.boardId === boardId);
  if (!task) throw new Error(`Task with id ${id} not found`);
  return task;
};

/**
 * Creates new task and adds him to db 
 * @param {string} boardId  id of board
 * @param {{title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} task data for new task
 * @returns {Task} new task 
 */
const postTask = (boardId: string, task: taskType): taskType => {
  const newTask = new Task({ ...task, boardId });
  db.tasks.push(newTask);
  return newTask;
};

/**
 * Changes task's data in db or returns an error if task or board is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task 
 * @param {{title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} task data for task's update
 * @returns {(Task|Object)} task with changed data or an error if task or board is not found
 */
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

/**
 * Deletes the task by specified id and boardId or returns an error if task or board is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task 
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
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