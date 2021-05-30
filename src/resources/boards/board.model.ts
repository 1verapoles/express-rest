export {};
const { v4: uuidv4 } = require('uuid');
import {boardType, columnType} from '../../common/all';

/**
 * Class to create a board object
 */  
class Board {
  readonly id: string;
  title: string;
  columns: columnType[];
  /**
   * @param {Object} arg Information about the board
   */
  constructor({
    id = uuidv4(),
    title = 'Board',
    columns = []
  }: boardType) {
    /**
     * @property {string} id board's id
     * @property {string} title board's title
     * @property {Object[]} columns board's columns
     */
    this.id = id;
    this.title = title;
    this.columns = columns;
    this.columns.forEach(column => { if (!column.id) { column.id = uuidv4(); } });
  }

  /**
 * Returns object - copy of input board object 
 * @param {Board} board board object
 * @returns {{id: string, title: string, columns: Object[]}} object - copy of input board object   
 */  
  static toResponse(board: boardType): boardType {
    const { id, title, columns } = board;
    return { id, title, columns };
  }
}

module.exports = Board;
