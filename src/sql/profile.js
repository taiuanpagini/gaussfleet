let CREATE_TABLE_PROFILE =
  'CREATE TABLE IF NOT EXISTS profile (id INTEGER, token TEXT, UNIQUE (id));';

export const createTableProfile = () => {
  let sql = [];
  sql.query = CREATE_TABLE_PROFILE;
  sql.args = [];
  return sql;
};
