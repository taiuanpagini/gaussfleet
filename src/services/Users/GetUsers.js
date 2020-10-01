import api from '../api';
import { SynchronizeUsers } from './SynchronizeUsers';

export async function GetUsers(returnRequest) {
  const response = await api.get('/users?page=2');

  const { data, status } = response;

  if (status === 200) {
    SynchronizeUsers(data.data);
    returnRequest(data.data);
  }
}
