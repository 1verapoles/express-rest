export { };
const { v4: uuidv4 } = require('uuid');
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
//import { taskType } from '../all';

// class Task {
//   readonly id: string;
//   title: string;
//   order: number;
//   description: string;
//   userId: string;
//   boardId: string;
//   columnId: string;
//   constructor({
//     id = uuidv4(),
//     title = 'Task',
//     order = 0,
//     description = 'Important task',
//     userId = uuidv4(),
//     boardId = uuidv4(),
//     columnId = uuidv4()
//   } = {}) {
//     this.id = id;
//     this.title = title;
//     this.order = order;
//     this.userId = userId;
//     this.description = description;
//     this.boardId = boardId;
//     this.columnId = columnId;
//   }

//   static toResponse(task: taskType): taskType {
//     const { id, title, order, description, userId, boardId, columnId } = task;
//     return { id, title, order, description, userId, boardId, columnId };
//   }
// }

@Entity()
class Task {
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @Column('varchar', { length: 50 })
  title = "";

  @Column('integer', { length: 50 })
  order = 0;

  @Column('varchar', { length: 100 })
  description = "";

  @Column('varchar', { length: 50 })
  userId = "";

  @Column('varchar', { length: 50 })
  boardId = "";

  @Column('varchar', { length: 50 })
  columnId = "";

}

module.exports = Task;
