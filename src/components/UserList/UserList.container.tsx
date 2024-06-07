import React, { PropsWithChildren, useCallback, useEffect } from 'react';
import isEqual from 'lodash/isEqual';
import UserListComponent from './UserList.component';
import withState from '../../store/hooks/withState';
import { ScreenNames } from '../../routes/Router.constants';
import type { User } from '../../store/state/user/user.types';
import type {
  UserListContainerProps,
  UserSelectedState,
} from './UserList.types';

const UserListContainer: React.FC<UserListContainerProps> = (
  props: PropsWithChildren<UserListContainerProps>,
) => {
  useEffect(() => {
    // on screen load, fetch users
    props.actions.fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onUserSelected = useCallback(
    (user: User) => {
      props.navigation.navigate(ScreenNames.SleepDetails, {
        user,
      });
    },
    [props.navigation],
  );

  const { users, isFetchingUsers } = props.selectedState;
  return (
    <UserListComponent
      users={users}
      isLoading={isFetchingUsers}
      onUserSelected={onUserSelected}
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
  isEqual,
);
