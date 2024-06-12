import React, { useMemo } from 'react';
import TemperatureTabComponent from './TemperatureTab.component';
import withState from 'src/store/hooks/withState';
import {
  TemperatureData,
  TemperatureTabProps,
  TemperatureTabSelectedState,
} from './TemperatureTab.types';
import useSleepData from '../hooks/Tab.hooks';
import { convertIntervalDataToTemperatureGraphData } from './TemperatureTab.utils';

const TemperatureTabContainer = ({
  navigation,
  selectedState,
}: TemperatureTabProps) => {
  const [selectedDatetimeInterval] = useSleepData(
    selectedState.selectedDate,
    selectedState.selectedUserData,
    navigation,
  );

  const temperatureData = useMemo<{
    bedData: TemperatureData | null;
    roomData: TemperatureData | null;
  } | null>(() => {
    return {
      bedData: convertIntervalDataToTemperatureGraphData(
        selectedDatetimeInterval,
        'tempBedC',
      ),
      roomData: convertIntervalDataToTemperatureGraphData(
        selectedDatetimeInterval,
        'tempRoomC',
      ),
    };
  }, [selectedDatetimeInterval]);

  return (
    <TemperatureTabComponent
      bedData={temperatureData?.bedData}
      roomData={temperatureData?.roomData}
    />
  );
};

export default withState(
  TemperatureTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as TemperatureTabSelectedState),
);
