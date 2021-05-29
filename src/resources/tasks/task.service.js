const tasksRepo = require('./task.memory.repository');

/**
 * Returns the array of all tasks of certain board
 * @param {string} boardId  id of board
 * @returns {Task[]} all tasks of certain board
 */
const getAllTasks = (boardId) => tasksRepo.getAllTasks(boardId);

/**
 * Returns the task by specified id and boardId or an error if board or task is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task
 * @returns {(Task|Object)} task or error object if an error occurred
 */
const getTask = (boardId, id) => tasksRepo.getTask(boardId, id);

/**
 * Creates new task and adds him to db 
 * @param {string} boardId  id of board
 * @param {{title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} task data for new task
 * @returns {Task} new task 
 */
const postTask = (boardId, task) => tasksRepo.postTask(boardId, task);

/**
 * Changes task's data in db or returns an error if task or board is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task 
 * @param {{title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} task data for task's update
 * @returns {(Task|Object)} task with changed data or an error if task or board is not found
 */
const putTask = (boardId, id, task) => tasksRepo.putTask(boardId, id, task);

/**
 * Deletes the task by specified id and boardId or returns an error if task or board is not found
 * @param {string} boardId  id of board
 * @param {string} id  id of task 
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteTask = (boardId, id) => tasksRepo.deleteTask(boardId, id);

module.exports = {
    getAllTasks,
    getTask,
    postTask,
    putTask,
    deleteTask
};
