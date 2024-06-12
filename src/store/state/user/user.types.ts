import LuxonDateTime from 'src/utils/DateTime';
import { StateError } from '../state.types';
import type { UserEndpointInterval } from 'src/network/endpoints/user';

export type User = {
  id: string;
  name: string;
  email: string;
};

export type SelectedUserData = {
  user: User;
  intervals: Array<SleepInterval>;
};

export type SleepInterval = UserEndpointInterval & {
  totalSleepHours: number;
  averageHeartRate: number;
};

export type InitialUserState = {
  selectedDate: LuxonDateTime;
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
