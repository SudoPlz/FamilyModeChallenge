import { PropsWithActionsAndState } from 'src/store/hooks/withState';
import { ScreenNames } from 'src/routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';

export type StatisticsTabSelectedState = {
  selectedUserData: SelectedUserData;
  selectedDate: LuxonDateTime;
};
export type StatisticsTabProps = PropsWithActionsAndState<
  {}, // props
  StatisticsTabSelectedState, // redux state
  ScreenNames.StatisticsTab // route name
>;

export type GraphSingleData = { timestamp: number; value: number };
export type GraphData = Array<GraphSingleData>;
