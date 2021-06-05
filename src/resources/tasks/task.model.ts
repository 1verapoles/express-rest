export {};
const { v4: uuidv4 } = require('uuid');
import {taskType} from '../../common/all';

class Task {
  readonly id: string;
  title: string;
  order: number;
  description: string;
  userId: string;
  boardId: string;
  columnId: string;
  constructor({
    id = uuidv4(),
    title = 'Task',
    order = 0,
    description = 'Important task',
    userId = uuidv4(),
    boardId = uuidv4(),
    columnId = uuidv4()
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.userId = userId;
    this.description = description;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: taskType): taskType {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
