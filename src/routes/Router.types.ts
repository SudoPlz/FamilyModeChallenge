import type { NativeStackScreenProps } from '@react-navigation/native-stack';
// import { GenericComponentProps } from '../types/components';
import { ScreenNames } from './Router.constants';
import { User } from '../store/state/user/user.types';
type UserListParams = {} | undefined;
type SleepDetailsParams = { user: User } | undefined;
type RootStackParamList = {
  [ScreenNames.SleepDetails]: SleepDetailsParams;
  [ScreenNames.UserList]: UserListParams;
};

export type NavigationProps<RouteName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, RouteName>;
