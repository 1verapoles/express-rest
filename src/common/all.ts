export {};

interface userType {
  id?: string;
  name: string;
  login: string;
  password?: string; 
};

interface columnType {
  id?: string;
  title: string;
  order: number;
};

interface boardType {
  id?: string;
  title: string;
  columns: columnType[];
};

interface taskType {
  id?: string;
  title: string;
  order: number;
  description: string;
  userId: string | null;
  boardId: string;
  columnId: string;
};

interface dbType {
  users: userType[];
  boards: boardType[];
  tasks: taskType[];
};

type delType = undefined | void;

export  {userType,
  boardType,
  dbType,
  taskType,
  delType,
  columnType
};