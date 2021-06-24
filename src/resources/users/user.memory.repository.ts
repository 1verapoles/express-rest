/** @module UserRepository */
import { getRepository } from "typeorm";
import bcrypt from 'bcrypt';
import { User } from "../../entity/User";
import { UserDTO } from "../../common/types";

const getAll = async (): Promise<Array<User> | []> => {
  const userRepository = getRepository(User);
  const allUsers = await userRepository.find()
  return allUsers;
};

const getOne = async (id: string): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  const user = await userRepository.findOne(id)
  return user;
};


const createUser = async ({ name, login, password }: UserDTO): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  const user = new User();
  user.name = name;
  user.login = login;
  const salt = await bcrypt.genSalt(10);
  const pass = await bcrypt.hash(password, salt);
  user.password = pass;
  await userRepository.save(user);
  return user;
};


const updateUser = async (id: string, newUserInfo: UserDTO): Promise<User | undefined> => {
  const userRepository = getRepository(User);
  const userToUpdate = await userRepository.findOne(id);
  if (userToUpdate) {
    const updatedUser = { ...userToUpdate, ...newUserInfo }
    await userRepository.save(updatedUser);
    return updatedUser;
  }
  return undefined;
};


const deleteUser = async (id: string | undefined): Promise<void> => {
  const userRepository = getRepository(User);
  const userToRemove = await userRepository.findOne(id);
  if (userToRemove) {
    await userRepository.remove(userToRemove)
  }
};


export default { getAll, getOne, createUser, updateUser, deleteUser };
