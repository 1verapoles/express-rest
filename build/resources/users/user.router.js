"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');
router.route('/').get((_req, res) => {
    const users = usersService.getAllUsers();
    res.status(200).json(users.map(User.toResponse));
});
router.route('/:id').get((req, res) => {
    const user = usersService.getUser(req.params['id']);
    res.status(200).json(User.toResponse(user));
});
router.route('/').post((req, res) => {
    const user = usersService.postUser(req.body);
    res.status(201).json(User.toResponse(user));
});
router.route('/:id').put((req, res) => {
    const user = usersService.putUser(req.params['id'], req.body);
    res.status(200).json(User.toResponse(user));
});
router.route('/:id').delete((req, res) => {
    usersService.deleteUser(req.params['id']);
    res.sendStatus(204);
});
module.exports = router;
