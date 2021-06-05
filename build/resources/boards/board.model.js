"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { v4: uuidv4 } = require('uuid');
class Board {
    constructor({ id = uuidv4(), title = 'Board', columns = [] }) {
        this.id = id;
        this.title = title;
        this.columns = columns;
        this.columns.forEach(column => { if (!column.id) {
            column.id = uuidv4();
        } });
    }
    static toResponse(board) {
        const { id, title, columns } = board;
        return { id, title, columns };
    }
}
module.exports = Board;
