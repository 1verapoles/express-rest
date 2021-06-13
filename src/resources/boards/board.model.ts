export {};
const { v4: uuidv4 } = require('uuid');
import {boardType, columnType} from '../../common/all';

class Board {
  readonly id: string;
  title: string;
  columns: columnType[];
    constructor({
    id = uuidv4(),
    title = 'Board',
    columns = []
  }: boardType) {
    this.id = id;
    this.title = title;
    this.columns = columns;
    this.columns.forEach(column => { if (!column.id) { column.id = uuidv4(); } });
  }

   static toResponse(board: boardType): boardType {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
