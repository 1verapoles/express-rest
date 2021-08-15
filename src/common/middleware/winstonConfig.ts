export {};
const { createLogger, format, transports } = require('winston');
import { Request, Response } from 'express';
const path = require('path');
const { finished } = require('stream');

type optType = {
  level: string;
  timestamp: string;
  message: string;
};

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
  format: format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss Z' }),
    format.printf((opt: optType) => `${opt.level} [${opt.timestamp}] :: ${opt.message}`)
  ),
  exitOnError: false
});

function writeInfoLog(req: Request, res: Response) {
  const {query, body, method, url} = req;

  finished(res, () => {
    logger.info(
      `METHOD: ${method} :: URL: ${url} :: QUERY: ${JSON.stringify(query)} :: BODY: ${JSON.stringify(body)} :: STATUS CODE: ${res.statusCode}`
    );
  });

  
}

function writeErrorLog(err: Error) {
  logger.error(err);
}

module.exports = { logger, writeInfoLog, writeErrorLog };