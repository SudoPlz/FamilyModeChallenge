import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import UserListComponent from './UserList.component';
import withState from '../../store/hooks/withState';
import { ScreenNames } from '../../routes/Router.constants';
import type { User } from '../../store/state/user/user.types';
import type {
  UserListContainerProps,
  UserSelectedState,
} from './UserList.types';

const UserListContainer: React.FC<UserListContainerProps> = ({
  actions,
  navigation,
  selectedState,
}: PropsWithChildren<UserListContainerProps>) => {
  useEffect(() => {
    // on screen load, fetch users
    actions.fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUserSelected = useCallback(
    (user: User) => {
      navigation.navigate(ScreenNames.SleepDetails, {
        user,
      });
    },
    [navigation],
  );

  const onRetryTapped = useCallback(() => {
    // on screen load, fetch users
    actions.fetchUsers();
  }, [actions]);

  const { users, isFetchingUsers } = selectedState;
  return (
    <UserListComponent
      users={users}
      isLoading={isFetchingUsers}
      onUserSelected={onUserSelected}
      onRetryTapped={onRetryTapped}
    />
  );
};
export default withState(
  UserListContainer,
  state =>
    ({
      users: state.user.users,
      isFetchingUsers: state.user.loading.fetchUsers,
    } as UserSelectedState),
);
