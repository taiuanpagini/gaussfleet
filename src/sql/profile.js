const CREATE_TABLE_PROFILE =
  'CREATE TABLE IF NOT EXISTS profile (id INTEGER, token TEXT, UNIQUE (id));';
const INSERT_PROFILE = 'INSERT INTO profile (id, token) VALUES(?,?)';
const SELECT_PROFILE = 'SELECT id, token FROM profile WHERE id = 1';

export const createTableProfile = () => {
  const sql = [];
  sql.query = CREATE_TABLE_PROFILE;
  sql.args = [];
  return sql;
};

export const insertProfile = (id, token) => {
  const sql = [];
  sql.query = INSERT_PROFILE;
  sql.args = [id, token];
  return sql;
};

export const selectProfile = () => {
  const sql = [];
  sql.query = SELECT_PROFILE;
  sql.args = [];
  return sql;
};
