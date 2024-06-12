import React, { useMemo } from 'react';
import TossAndTurnTabComponent from './TossAndTurnTab.component';
import withState from 'src/store/hooks/withState';
import {
  TossAndTurnData,
  TossAndTurnTabProps,
  TossAndTurnTabSelectedState,
} from './TossAndTurnTab.types';
import useSleepData from '../hooks/Tab.hooks';
import { convertIntervalDataToTnTGraphData } from './TossAndTurnTab.utils';

const TossAndTurnTabContainer = ({
  navigation,
  selectedState,
}: TossAndTurnTabProps) => {
  const [selectedDatetimeInterval] = useSleepData(
    selectedState.selectedDate,
    selectedState.selectedUserData,
    navigation,
  );

  const tossAndTurnData = useMemo<TossAndTurnData | null>(() => {
    return convertIntervalDataToTnTGraphData(selectedDatetimeInterval);
  }, [selectedDatetimeInterval]);
  return <TossAndTurnTabComponent tossAndTurnData={tossAndTurnData} />;
};

export default withState(
  TossAndTurnTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as TossAndTurnTabSelectedState),
);
