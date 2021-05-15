const User = require('../../common/db');

const getAllUsers = () => User.getAllUsers();
const getUser = (id) => User.getUser(id);
const postUser = (user) => User.postUser(user);
const putUser = (id, user) => User.putUser(id, user);
const deleteUser = (id) => User.deleteUser(id);

module.exports = {
  getAllUsers,
  getUser,
  postUser,
  putUser,
  deleteUser
};
