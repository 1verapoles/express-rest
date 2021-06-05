"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class Task {
    constructor({ id = uuidv4(), title = 'Task', order = 0, description = 'Important task', userId = uuidv4(), boardId = uuidv4(), columnId = uuidv4() } = {}) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.userId = userId;
        this.description = description;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    static toResponse(task) {
        const { id, title, order, description, userId, boardId, columnId } = task;
        return { id, title, order, description, userId, boardId, columnId };
    }
}
module.exports = Task;
