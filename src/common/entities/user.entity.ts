export { };
const { v4: uuidv4 } = require('uuid');
const { Entity, PrimaryGeneratedColumn, Column } = require("typeorm");
//import { userType } from '../all';

// class User {
//   readonly id: string;
//   name: string;
//   login: string;
//   password: string;
//   constructor({
//     id = uuidv4(),
//     name = 'USER',
//     login = 'user',
//     password = 'P@55w0rd'
//   } = {}) {
//     this.id = id;
//     this.name = name;
//     this.login = login;
//     this.password = password;
//   }


//   static toResponse(user: userType): userType {
//     const { id, name, login } = user;
//     return { id, name, login };
//   }
// }


@Entity()
class User {
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @Column('varchar', { length: 50 })
  password = "";

  @Column('varchar', { length: 50 })
  name = "";

  @Column('varchar', { length: 50 })
  login = "";

}

module.exports = User;