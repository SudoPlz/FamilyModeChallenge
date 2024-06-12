import { PropsWithActionsAndState } from 'src/store/hooks/withState';
import { ScreenNames } from 'src/routes/Router.constants';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';

export type TemperatureTabSelectedState = {
  selectedUserData: SelectedUserData;
  selectedDate: LuxonDateTime;
};
export type TemperatureTabProps = PropsWithActionsAndState<
  {}, // props
  TemperatureTabSelectedState, // redux state
  ScreenNames.TemperatureTab // route name
>;

export type TemperatureSingleData = { timestamp: number; value: number };
export type TemperatureData = {
  graphData: TemperatureSingleData[];
  minValue: number;
  maxValue: number;
};
