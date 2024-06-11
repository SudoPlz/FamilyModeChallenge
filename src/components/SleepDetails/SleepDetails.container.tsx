import React, { useEffect } from 'react';
import withState from '../../store/hooks/withState';
import SleepDetailsComponent from './SleepDetails.component';
import type {
  SleepDetailsProps,
  SleepDetailsSelectedState,
} from './SleepDetails.types';

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

  return (
    <SleepDetailsComponent
      isLoading={selectedState.isFetchingSingleUserData}
      selectedUserData={selectedState.selectedUserData}
    />
  );
};

export default withState(
  SleepDetailsContainer,
  state =>
    ({
      isFetchingSingleUserData: state.user.loading.fetchSingleUser,
      selectedUserData: state.user.selectedUser,
    } as SleepDetailsSelectedState),
);
