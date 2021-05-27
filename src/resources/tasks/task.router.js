const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const TasksService = require('./task.service');

router.route('/').get( (req, res) => {
  const { boardId } = req.params;
  const Tasks =  TasksService.getAllTasks(boardId);
  res.status(200).json(Tasks.map(Task.toResponse));
});

router.route('/:id').get( (req, res) => {
  const { boardId, id } = req.params;
  const task =  TasksService.getTask(boardId, id);
  res.status(200).json(Task.toResponse(task));
});

router.route('/').post( (req, res) => {
  const { boardId } = req.params;
  const task =  TasksService.postTask(boardId, req.body);
  res.status(201).json(Task.toResponse(task));
});

router.route('/:id').put( (req, res) => {
  const { boardId, id } = req.params;
  const task =  TasksService.putTask(boardId, id, req.body);
  res.status(200).json(Task.toResponse(task));
});

router.route('/:id').delete( (req, res) => {
  const { boardId, id } = req.params;
   TasksService.deleteTask(boardId, id);
  res.sendStatus(204);
});

module.exports = router;
