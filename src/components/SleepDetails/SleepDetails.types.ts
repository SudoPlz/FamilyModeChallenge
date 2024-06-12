import { PropsWithActionsAndState } from '../../store/hooks/withState';
import { ScreenNames } from '../../routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import type DateTime from 'src/utils/DateTime';

export type SleepDetailsSelectedState = {
  selectedUserData: SelectedUserData;
  isFetchingSingleUserData: boolean;
  selectedDate: DateTime;
};
export type SleepDetailsProps = PropsWithActionsAndState<
  {}, // props
  SleepDetailsSelectedState, // redux state
  ScreenNames.SleepDetails // route name
>;
