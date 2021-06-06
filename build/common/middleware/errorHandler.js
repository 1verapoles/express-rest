"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { writeErrorLog } = require('./winstonConfig');
const errorHandler = (err, _req, res, next) => {
    if (err) {
        const status = err.statusCode ? err.statusCode : 500;
        const message = err.message ? err.message : 'Internal Server Error';
        writeErrorLog(err);
        res.status(status).send({ message });
    }
    next();
};
module.exports = errorHandler;
