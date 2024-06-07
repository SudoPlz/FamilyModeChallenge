import { get } from '../client/ApiClient';

export const fetchUsers = () => {
  return get('users.json');
};
