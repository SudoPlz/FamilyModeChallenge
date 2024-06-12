import React, { useCallback, useEffect } from 'react';
import withState from '../../store/hooks/withState';
import SleepDetailsComponent from './SleepDetails.component';
import type {
  SleepDetailsProps,
  SleepDetailsSelectedState,
} from './SleepDetails.types';
import DateTime from 'src/utils/DateTime';

const SleepDetailsContainer = ({
  route,
  actions,
  selectedState,
}: SleepDetailsProps) => {
  useEffect(() => {
    // on screen load, fetch data for single user
    actions.fetchSingleUser(route?.params?.user.id || '');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onDatePicked = useCallback(
    (date: DateTime) => {
      actions.setSelectedDate(date);
    },
    [actions],
  );

  return (
    <SleepDetailsComponent
      isLoading={selectedState.isFetchingSingleUserData}
      selectedUserData={selectedState.selectedUserData}
      selectedDate={selectedState.selectedDate}
      onDatePicked={onDatePicked}
    />
  );
};

export default withState(
  SleepDetailsContainer,
  state =>
    ({
      isFetchingSingleUserData: state.user.loading.fetchSingleUser,
      selectedUserData: state.user.selectedUser,
      selectedDate: state.user.selectedDate,
    } as SleepDetailsSelectedState),
);
