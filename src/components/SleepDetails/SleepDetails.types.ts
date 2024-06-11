import { PropsWithActionsAndState } from '../../store/hooks/withState';
import { ScreenNames } from '../../routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';

export type SleepDetailsSelectedState = {
  selectedUserData: SelectedUserData;
  isFetchingSingleUserData: boolean;
};
export type SleepDetailsProps = PropsWithActionsAndState<
  {}, // props
  SleepDetailsSelectedState, // redux state
  ScreenNames.SleepDetails // route name
>;
