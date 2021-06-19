export { };
const router = require('express').Router({ mergeParams: true });
import { Request, Response, NextFunction } from 'express';
//const Task = require('./task.model');
const handlerWrapper = require('../../common/handler-wrapper');
const TasksService = require('./task.service');

router.route('/').get(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const { boardId } = req.params;
  const Tasks = TasksService.getAllTasks(boardId);
  res.status(200).json({ Tasks });
}));

router.route('/:id').get(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const { boardId, id } = req.params;
  const task = TasksService.getTask(boardId, id);
  res.status(200).json({ task });
}));

router.route('/').post(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const { boardId } = req.params;
  const task = TasksService.postTask(boardId, req.body);
  res.status(201).json({ task });
}));

router.route('/:id').put(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const { boardId, id } = req.params;
  const task = TasksService.putTask(boardId, id, req.body);
  res.status(200).json({ task });
}));

router.route('/:id').delete(handlerWrapper(async (req: Request, res: Response, _next: NextFunction) => {
  const { boardId, id } = req.params;
  TasksService.deleteTask(boardId, id);
  res.sendStatus(204);
}));

module.exports = router;
