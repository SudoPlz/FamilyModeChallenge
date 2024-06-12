import { useState, useEffect, useMemo } from 'react';
import type {
  SelectedUserData,
  SleepInterval,
} from 'src/store/state/user/user.types';
import DateTime from 'src/utils/DateTime';
import { findIntervalForDateTime } from 'src/utils/Interval.utils';
import type { NavigationProps } from 'src/routes/Router.types';

export default function useSleepData(
  selectedDate: DateTime,
  selectedUserData: SelectedUserData,
  navigation: NavigationProps<any>['navigation'],
): [SleepInterval | null, boolean] {
  const selectedDatetimeInterval = useMemo<SleepInterval | null>(() => {
    return findIntervalForDateTime(selectedDate, selectedUserData?.intervals);
  }, [selectedDate, selectedUserData]);

  const [isFocused, setIsFocused] = useState(navigation.isFocused());
  useEffect(() => {
    const unsubscribeIsFocused = navigation.addListener('focus', () => {
      setIsFocused(true);
    });
    const unsubscribeIsBlured = navigation.addListener('blur', () => {
      setIsFocused(false);
    });
    return () => {
      unsubscribeIsFocused();
      unsubscribeIsBlured();
    };
  }, [navigation]);
  return [selectedDatetimeInterval, isFocused];
}
