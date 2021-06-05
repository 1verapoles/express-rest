export {};
const User = require('../../common/db');
import {userType, delType} from '../../common/all';

const getAllUsersRepo = (): userType[] => User.getAllUsers();

const getUserRepo = (id: string): userType => User.getUser(id);

const postUserRepo = (user: userType): userType => User.postUser(user);

const putUserRepo = (id: string, user: userType): userType => User.putUser(id, user);

const deleteUserRepo = (id: string): delType => User.deleteUser(id);

module.exports = {
  getAllUsers: getAllUsersRepo,
  getUser: getUserRepo,
  postUser: postUserRepo,
  putUser: putUserRepo,
  deleteUser: deleteUserRepo
};
