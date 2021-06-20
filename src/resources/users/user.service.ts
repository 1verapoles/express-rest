export { };
const usersRepo = require('./user.memory.repository');
import { userType, delType } from '../../common/all';

const getAllUsers = (): Promise<userType[]> => usersRepo.getAllUsers();

const getUser = (id: string): Promise<userType> => usersRepo.getUser(id);

const postUser = (user: userType): Promise<userType> => usersRepo.postUser(user);

const putUser = (id: string, user: userType): Promise<userType> => usersRepo.putUser(id, user);

const deleteUser = (id: string): Promise<delType> => usersRepo.deleteUser(id);

module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
};
