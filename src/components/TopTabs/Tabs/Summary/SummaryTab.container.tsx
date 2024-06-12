import React from 'react';
import SummaryTabComponent from './SummaryTab.component';
import withState from 'src/store/hooks/withState';
import { SummaryTabProps, SummaryTabSelectedState } from './SummaryTab.types';
import useSleepData from '../hooks/Tab.hooks';

const SummaryTabContainer = ({
  navigation,
  selectedState,
}: SummaryTabProps) => {
  const [selectedDatetimeInterval, isFocused] = useSleepData(
    selectedState.selectedDate,
    selectedState.selectedUserData,
    navigation,
  );

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
