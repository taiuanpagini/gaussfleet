const CREATE_TABLE_USERS =
  'CREATE TABLE IF NOT EXISTS users (id INTEGER, email TEXT, first_name TEXT, last_name TEXT, avatar TEXT, UNIQUE (id));';
const INSERT_USERS =
  'INSERT INTO users (id, email, first_name, last_name, avatar) VALUES(?,?,?,?,?)';
const SELECT_USERS =
  'SELECT id, email, first_name, last_name, avatar FROM users';

export const createTableUsers = () => {
  const sql = [];
  sql.query = CREATE_TABLE_USERS;
  sql.args = [];
  return sql;
};

export const insertUser = (user) => {
  const sql = [];
  sql.query = INSERT_USERS;
  sql.args = [
    user.id,
    user.email,
    user.first_name,
    user.last_name,
    user.avatar,
  ];
  return sql;
};

export const selectUsers = () => {
  const sql = [];
  sql.query = SELECT_USERS;
  sql.args = [];
  return sql;
};
