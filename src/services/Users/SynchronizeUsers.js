/* eslint-disable array-callback-return */
import { insertUser } from '~/sql/users';
import { executeQueryInterno } from '../dbUtil';

export async function SynchronizeUsers(users) {
  users.map((user) => {
    executeQueryInterno(insertUser(user));
  });
}
