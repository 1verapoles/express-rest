"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
/**
 * Class to create a task object
 */
class Task {
    /**
     * @param {Object} arg Information about the task
     */
    constructor({ id = uuidv4(), title = 'Task', order = 0, description = 'Important task', userId = uuidv4(), boardId = uuidv4(), columnId = uuidv4() } = {}) {
        /**
         * @property {string} id task's id
         * @property {string} title task's title
         * @property {number} order task's order
         * @property {string} userId task's userId
         * @property {string} description task's description
         * @property {string} boardId task's boardId
         * @property {string} columnId task's columnId
         */
        this.id = id;
        this.title = title;
        this.order = order;
        this.userId = userId;
        this.description = description;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    /**
   * Returns object - copy of input task object
   * @param {Task} task task object
   * @returns {{id: string, title: string, order: number, description: string, userId: string, boardId: string, columnId: string}} object - copy of input task object
   */
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
}
module.exports = Task;
