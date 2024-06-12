import React, { useState, useEffect, useMemo } from 'react';
import SummaryTabComponent from './SummaryTab.component';
import withState from 'src/store/hooks/withState';
import { SummaryTabProps, SummaryTabSelectedState } from './SummaryTab.types';
import type { SleepInterval } from 'src/store/state/user/user.types';
import { findIntervalForDateTime } from 'src/utils/Interval.utils';

const SummaryTabContainer = ({
  navigation,
  selectedState,
}: SummaryTabProps) => {
  const selectedDatetimeInterval = useMemo<SleepInterval | null>(() => {
    return findIntervalForDateTime(
      selectedState.selectedDate,
      selectedState.selectedUserData?.intervals,
    );
  }, [selectedState.selectedDate, selectedState.selectedUserData]);

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

  return (
    <SummaryTabComponent
      isFocused={isFocused}
      sleepScore={selectedDatetimeInterval?.score}
      totalHours={selectedDatetimeInterval?.totalSleepHours}
      averageHeartRate={selectedDatetimeInterval?.averageHeartRate}
    />
  );
};

export default withState(
  SummaryTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as SummaryTabSelectedState),
);
