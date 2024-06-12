import { PropsWithActionsAndState } from 'src/store/hooks/withState';
import { ScreenNames } from 'src/routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';

export type TossAndTurnTabSelectedState = {
  selectedUserData: SelectedUserData;
  selectedDate: LuxonDateTime;
};
export type TossAndTurnTabProps = PropsWithActionsAndState<
  {}, // props
  TossAndTurnTabSelectedState, // redux state
  ScreenNames.TossAndTurnTab // route name
>;

export type TossAndTurnSingleData = { timestamp: number; value: number };
export type TossAndTurnData = TossAndTurnSingleData[];
