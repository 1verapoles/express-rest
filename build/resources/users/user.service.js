"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersRepo = require('./user.memory.repository');
/**
 * Returns the array of all users
 * @returns {User[]} all users
 */
const getAllUsers = () => usersRepo.getAllUsers();
/**
 * Returns the user by specified id or an error if user not found
 * @param {string} id  id of user
 * @returns {(User|Object)} user or error object if an error occurred
 */
const getUser = (id) => usersRepo.getUser(id);
/**
 * Creates new user and adds him to db
 * @param {{name: string, login: string, password: string}} user data for new user
 * @returns {User} new user
 */
const postUser = (user) => usersRepo.postUser(user);
/**
 * Changes user's data in db or returns an error if user not found
 * @param {string} id  id of user
 * @param {{name: string, login: string, password: string}} user data for user's update
 * @returns {(User|Object)} user with changed data or an error if user not found
 */
const putUser = (id, user) => usersRepo.putUser(id, user);
/**
 * Deletes the user by specified id or returns an error if user not found
 * @param {string} id  id of user
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteUser = (id) => usersRepo.delType(id);
module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};
