export { };
const { v4: uuidv4 } = require('uuid');
const { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } = require("typeorm");
const Board = require('./board.entity');
//import {boardType, columnType} from '../../common/all';

// class Board {
//   readonly id: string;
//   title: string;
//   columns: columnType[];
//     constructor({
//     id = uuidv4(),
//     title = 'Board',
//     columns = []
//   }: boardType) {
//     this.id = id;
//     this.title = title;
//     this.columns = columns;
//     this.columns.forEach(column => { if (!column.id) { column.id = uuidv4(); } });
//   }

//    static toResponse(board: boardType): boardType {
//     const { id, title, columns } = board;
//     return { id, title, columns };
//   }
// }

@Entity()
class Columns {
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @Column('varchar', { length: 50 })
  title = "";

  @Column('integer')
  order = 1;

  @ManyToOne(() => Board, (board: typeof Board) => board.columns)
  @JoinColumn({ name: 'column_id' })
  board: typeof Board

}

module.exports = Columns;
