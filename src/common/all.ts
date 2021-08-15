export {};

type userType = {
  id?: string;
  name: string;
  login: string;
  password?: string; 
};

type columnType = {
  id?: string;
  title: string;
  order: number;
};

type boardType = {
  id?: string;
  title: string;
  columns: columnType[];
};

type taskType = {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
};

type dbType = {
  users: userType[];
  boards: boardType[];
  tasks: taskType[];
};

type delType = undefined | void;

export {userType,
  boardType,
  dbType,
  taskType,
  delType,
  columnType
};