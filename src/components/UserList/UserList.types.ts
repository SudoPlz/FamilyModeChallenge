import type { User } from '../../store/state/user/user.types';
import type { PropsWithActionsAndState } from '../../store/hooks/withState';
import type { ScreenNames } from '../../routes/Router.constants';
export type UserList = Array<User>;

export type UserSelectedState = {
  users: UserList | null;
  isFetchingUsers: boolean;
};

export type UserListContainerProps = PropsWithActionsAndState<
  {}, // props
  UserSelectedState, // redux state
  ScreenNames.UserList // route name
>;
