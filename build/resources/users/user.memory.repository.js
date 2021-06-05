"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require('../../common/db');
const getAllUsersRepo = () => User.getAllUsers();
const getUserRepo = (id) => User.getUser(id);
const postUserRepo = (user) => User.postUser(user);
const putUserRepo = (id, user) => User.putUser(id, user);
const deleteUserRepo = (id) => User.deleteUser(id);
module.exports = {
    getAllUsers: getAllUsersRepo,
    getUser: getUserRepo,
    postUser: postUserRepo,
    putUser: putUserRepo,
    deleteUser: deleteUserRepo
};
