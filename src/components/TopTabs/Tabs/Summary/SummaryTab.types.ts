import { PropsWithActionsAndState } from 'src/store/hooks/withState';
import { ScreenNames } from 'src/routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';

export type SummaryTabSelectedState = {
  selectedUserData: SelectedUserData;
  selectedDate: LuxonDateTime;
};
export type SummaryTabProps = PropsWithActionsAndState<
  {}, // props
  SummaryTabSelectedState, // redux state
  ScreenNames.SummaryTab // route name
>;
