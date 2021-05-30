export {};
const express = require('express');
import { Request, Response, NextFunction } from 'express';
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router.ts');
const boardRouter = require('./resources/boards/board.router.ts');
const taskRouter = require('./resources/tasks/task.router.ts');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
boardRouter.use('/:boardId/tasks', taskRouter);
app.use('/docs', express.static(path.join(__dirname, 'docs')));

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  if (err) {
    const { name, message, stack } = err;
    res.status(404).json({ name, message, stack });
  }
  next();
});


module.exports = app;
