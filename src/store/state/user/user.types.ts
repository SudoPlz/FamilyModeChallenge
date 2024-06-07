import { StateError } from '../state.types';

export type User = {};

export type InitialUserState = {
  selectedUser: User | null;
  users: Array<User> | null;
  loading: {
    fetchUsers: boolean;
    fetchSingleUser: boolean;
  };
  error: {
    fetchUsers: StateError<string>;
    fetchSingleUser: StateError<string>;
  };
};
