export {};
const usersRepo = require('./user.memory.repository');
import {userType, delType} from '../../common/all';

const getAllUsers = (): userType[] => usersRepo.getAllUsers();

const getUser = (id: string): userType => usersRepo.getUser(id);

const postUser = (user: userType): userType => usersRepo.postUser(user);

const putUser = (id: string, user: userType): userType => usersRepo.putUser(id, user);

const deleteUser = (id: string): delType => usersRepo.deleteUser(id);

module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};
