import React from 'react';
import StatisticsTabComponent from './StatisticsTab.component';
import withState from 'src/store/hooks/withState';
import {
  StatisticsTabProps,
  StatisticsTabSelectedState,
} from './StatisticsTab.types';
import useSleepData from '../hooks/Tab.hooks';

const StatisticsTabContainer = ({
  navigation,
  selectedState,
}: StatisticsTabProps) => {
  const [selectedDatetimeInterval, isFocused] = useSleepData(
    selectedState.selectedDate,
    selectedState.selectedUserData,
    navigation,
  );

  return (
    <StatisticsTabComponent
      isFocused={isFocused}
      sleepScore={selectedDatetimeInterval?.score}
      totalHours={selectedDatetimeInterval?.totalSleepHours}
      averageHeartRate={selectedDatetimeInterval?.averageHeartRate}
    />
  );
};

export default withState(
  StatisticsTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as StatisticsTabSelectedState),
);
