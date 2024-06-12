import React, { useMemo } from 'react';
import StatisticsTabComponent from './StatisticsTab.component';
import withState from 'src/store/hooks/withState';
import {
  GraphData,
  StatisticsTabProps,
  StatisticsTabSelectedState,
} from './StatisticsTab.types';
import useSleepData from '../hooks/Tab.hooks';
import { convertIntervalDataToSleepStageGraphData } from './StatisticsTab.utils';

const StatisticsTabContainer = ({
  navigation,
  selectedState,
}: StatisticsTabProps) => {
  const [selectedDatetimeInterval] = useSleepData(
    selectedState.selectedDate,
    selectedState.selectedUserData,
    navigation,
  );

  const graphData = useMemo<GraphData | null>(() => {
    return convertIntervalDataToSleepStageGraphData(selectedDatetimeInterval);
  }, [selectedDatetimeInterval]);

  return <StatisticsTabComponent graphData={graphData} />;
};

export default withState(
  StatisticsTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as StatisticsTabSelectedState),
);
