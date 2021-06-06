"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createLogger, format, transports } = require('winston');
const path = require('path');
const { finished } = require('stream');
const options = {
    console: {
        handleExceptions: false,
        json: false,
        colorize: true
    },
    infoFile: {
        level: 'info',
        filename: path.join(__dirname, '../logs/logs.log'),
        maxSize: 5242880
    },
    errorFile: {
        level: 'error',
        filename: path.join(__dirname, '../logs/errors.log'),
        maxSize: 5242880
    }
};
const logger = createLogger({
    transports: [
        new transports.Console(options.console),
        new transports.File(options.infoFile),
        new transports.File(options.errorFile)
    ],
    format: format.combine(format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss Z' }), format.printf((opt) => `${opt.level} [${opt.timestamp}] :: ${opt.message}`)),
    exitOnError: false
});
function writeInfoLog(req, res) {
    const { query, body, method, url } = req;
    finished(res, () => {
        logger.info(`METHOD: ${method} :: URL: ${url} :: QUERY: ${JSON.stringify(query)} :: BODY: ${JSON.stringify(body)} :: STATUS CODE: ${res.statusCode}`);
    });
}
function writeErrorLog(err) {
    logger.error(err);
}
module.exports = { logger, writeInfoLog, writeErrorLog };
