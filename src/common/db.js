const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

/**
 * @type {{users: User[], boards: Board[], tasks: Task[]}} 
 */
const db = { users: [], boards: [], tasks: [] };

/**
 * Returns the array of all users
 * @returns {User[]} all users
 */
const getAllUsers = () => db.users;

/**
 * Returns the user by specified id or an error if user not found
 * @param {string} id  id of user
 * @returns {(User|Object)} user or error object if an error occurred
 */
const getUser = (id) => {
  const user = db.users.find(el => el.id === id);
  if (!user) throw new Error(`User with id ${id} not found`);
  return user;
};

/**
 * Creates new user and adds him to db 
 * @param {{name: string, login: string, password: string}} user data for new user
 * @returns {User} new user 
 */
const postUser = (user) => {
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
const putUser = (id, user) => {
  const userUpdate = db.users.find(el => el.id === id);
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
const deleteUser = (id) => {
  const userIndex = db.users.findIndex(el => el.id === id);
  if (userIndex === -1) throw new Error(`User with id ${id} not found`);
  db.tasks.forEach(task => { if (task.userId === id) { task.userId = null; } });
  db.users.splice(userIndex, 1);
};

const getAllBoards = () => db.boards;

const getBoard = (id) => {
  const board = db.boards.find(el => el.id === id);
  if (!board) throw new Error(`Board with id ${id} not found`);
  return board;
};

const postBoard = (board) => {
  const newBoard = new Board({ ...board });
  db.boards.push(newBoard);
  return newBoard;
};

const putBoard = (id, board) => {
  const boardUpdate = db.boards.find(el => el.id === id);
  if (!boardUpdate) throw new Error(`Board with id ${id} not found`);
  boardUpdate.title = board.title;
  boardUpdate.columns = board.columns;
  return boardUpdate;
};

const deleteBoard = (id) => {
  const boardIndex = db.boards.findIndex(el => el.id === id);
  if (boardIndex === -1) throw new Error(`Board with id ${id} not found`);
  db.tasks.forEach(task => { if (task.boardId === id) { db.tasks.splice(db.tasks.indexOf(task), 1); } });
  db.boards.splice(boardIndex, 1);
};

const getAllTasks = (boardId) => db.tasks.filter(el => el.boardId === boardId);

const getTask = (boardId, id) => {
  const boardIndex = db.boards.findIndex(el => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const task = db.tasks.find(el => el.id === id && el.boardId === boardId);
  if (!task) throw new Error(`Task with id ${id} not found`);
  return task;
};

const postTask = (boardId, task) => {
  const newTask = new Task({ ...task, boardId });
  db.tasks.push(newTask);
  return newTask;
};

const putTask = (boardId, id, task) => {
  const boardIndex = db.boards.findIndex(el => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const taskUpdate = db.tasks.find(el => el.id === id && el.boardId === boardId);
  if (!taskUpdate) throw new Error(`Task with id ${id} not found`);
  taskUpdate.title = task.title;
  taskUpdate.order = task.order;
  taskUpdate.description = task.description;
  taskUpdate.userId = task.userId;
  taskUpdate.boardId = boardId;
  taskUpdate.columnId = task.columnId;
  return taskUpdate;
};

const deleteTask = (boardId, id) => {
  const boardIndex = db.boards.findIndex(el => el.id === boardId);
  if (boardIndex === -1) throw new Error(`Board with id ${boardId} not found`);
  const taskIndex = db.tasks.findIndex(el => el.id === id && el.boardId === boardId);
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