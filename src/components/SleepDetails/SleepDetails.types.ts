import { PropsWithActionsAndState } from '../../store/hooks/withState';
import type { UserList } from '../UserList/UserList.types';
import { ScreenNames } from '../../routes/Router.constants';

export type SleepDetailsState = {
  users: UserList | null;
  isFetchingUsers: boolean;
};
export type SleepDetailsProps = PropsWithActionsAndState<
  {}, // props
  SleepDetailsState, // redux state
  ScreenNames.SleepDetails // route name
>;
