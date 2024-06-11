import { StateError } from '../state.types';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type SelectedUserData = {
  user: User;
  intervals: Array<any>;
};

export type InitialUserState = {
  selectedUser: SelectedUserData | null;
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
