export { };
const User = require('../../common/entities/user.entity');
const TaskEntity = require('../../common/entities/task.entity');
import { userType, delType } from '../../common/all';
const { getRepository } = require("typeorm");

//console.log(User);

const getAllUsersRepo = async (): Promise<userType[]> => {
  const userRepository = getRepository(User);
  return await userRepository.find();
}

const getUserRepo = async (id: string): Promise<userType> => {
  try {
    const userRepository = getRepository(User); return userRepository.findOneOrFail(id);
  } catch (err) {
    throw err;
  }
}

const postUserRepo = async (user: userType): Promise<userType> => {
  const userRepository = getRepository(User);
  const newUser = userRepository.create(user);
  return await userRepository.save(newUser);
}

const putUserRepo = async (id: string, user: userType): Promise<userType> => {
  const userRepository = getRepository(User);
  let userU = await getUserRepo(id);
  userU = { ...userU, ...user };
  return await userRepository.save(userU);
}

const deleteUserRepo = async (id: string): Promise<delType> => {
  const userRepository = getRepository(User);
  const taskRepository = getRepository(TaskEntity);
  let taskU = await taskRepository.find({ where: { userId: id } });
  taskU = { ...taskU, userId: null };
  await taskRepository.save(taskU);
  const userR = await getUserRepo(id);
  await userRepository.remove(userR);
}

module.exports = {
  getAllUsers: getAllUsersRepo,
  getUser: getUserRepo,
  postUser: postUserRepo,
  putUser: putUserRepo,
  deleteUser: deleteUserRepo
};
