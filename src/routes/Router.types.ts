import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { GenericComponentProps } from '../types/components';
import { ScreenNames } from './Router.constants';
import { User } from '../store/state/user/user.types';
type NoOpInitialParams = {} | undefined;
type UserListParams = NoOpInitialParams;
type SleepDetailsParams = { user: User } | undefined;
type RootStackParamList = {
  [ScreenNames.SleepDetails]: SleepDetailsParams;
  [ScreenNames.UserList]: UserListParams;
  [ScreenNames.SummaryTab]: NoOpInitialParams;
  [ScreenNames.StatisticsTab]: NoOpInitialParams;
  [ScreenNames.TemperatureTab]: NoOpInitialParams;
  [ScreenNames.TossAndTurnTab]: NoOpInitialParams;
};

export type NavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
