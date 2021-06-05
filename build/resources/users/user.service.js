"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepo = require('./user.memory.repository');
const getAllUsers = () => usersRepo.getAllUsers();
const getUser = (id) => usersRepo.getUser(id);
const postUser = (user) => usersRepo.postUser(user);
const putUser = (id, user) => usersRepo.putUser(id, user);
const deleteUser = (id) => usersRepo.deleteUser(id);
module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};
