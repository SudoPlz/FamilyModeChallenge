import { PropsWithActionsAndState } from 'src/store/hooks/withState';
import { ScreenNames } from 'src/routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';

export type SummaryTabSelectedState = {
  selectedUserData: SelectedUserData;
  // isFetchingSingleUserData: boolean;
};
export type SummaryTabProps = PropsWithActionsAndState<
  {}, // props
  SummaryTabSelectedState, // redux state
  ScreenNames.SummaryTab // route name
>;
