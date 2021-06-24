import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import { createLogger } from '../utils/writeLog';

const logger = (req: Request, res: Response, next: NextFunction) => {
  //@ts-ignore
  const { method, url, query, body } = req;
  const writeStream = createLogger('../../logs/log.txt')
  next()

  finished(res, () => {
    const { statusCode } = res;
    const formattedQuery = JSON.stringify(query);
    const formattedBody = JSON.stringify(body);
    const message = `\nMethod: ${method}\nUrl: ${url}\nQuery: ${formattedQuery}\nBody: ${formattedBody}\nStatus code: ${statusCode}\n`;
    process.stdout.write(message)
    writeStream.write((new Date()).toUTCString());
    writeStream.write(message.toString());
    writeStream.end(`-----\n`);
  })
}

export { logger }