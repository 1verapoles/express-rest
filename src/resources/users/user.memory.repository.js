const User = require('../../common/db');

/**
 * Returns the array of all users
 * @returns {User[]} all users
 */
const getAllUsersRepo = () => User.getAllUsers();

/**
 * Returns the user by specified id or an error if user not found
 * @param {string} id  id of user
 * @returns {(User|Object)} user or error object if an error occurred
 */
const getUserRepo = (id) => User.getUser(id);

/**
 * Creates new user and adds him to db 
 * @param {{name: string, login: string, password: string}} user data for new user
 * @returns {User} new user 
 */
const postUserRepo = (user) => User.postUser(user);

/**
 * Changes user's data in db or returns an error if user not found
 * @param {string} id  id of user 
 * @param {{name: string, login: string, password: string}} user data for user's update
 * @returns {(User|Object)} user with changed data or an error if user not found
 */
const putUserRepo = (id, user) => User.putUser(id, user);

/**
 * Deletes the user by specified id or returns an error if user not found
 * @param {string} id  id of user
 * @returns {(void|Object)} returns nothing or error object if an error occurred
 */
const deleteUserRepo = (id) => User.deleteUser(id);

module.exports = {
  getAllUsers: getAllUsersRepo,
  getUser: getUserRepo,
  postUser: postUserRepo,
  putUser: putUserRepo,
  deleteUser: deleteUserRepo
};
