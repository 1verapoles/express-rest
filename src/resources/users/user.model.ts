export {};
const { v4: uuidv4 } = require('uuid');
import {userType} from '../../common/all';

/**
 * Class to create a user object
 */
class User {
  readonly id: string;
   name: string;
   login: string;
   password: string;
  /**
   * @param {Object} arg Information about the user
   */   
  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
     /**
     * @property {string} id user's id
     * @property {string} name user's name
     * @property {string} login user's login
     * @property {string} password user's password
     */
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
 * Returns object without unnecessary fields
 * @param {User} user user object
 * @returns {{id: string, name: string, login: string}} object without password 
 */
  static toResponse(user: userType): userType {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
