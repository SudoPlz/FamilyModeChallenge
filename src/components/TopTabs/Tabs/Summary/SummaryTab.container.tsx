import React from 'react';
import SummaryTabComponent from './SummaryTab.component';
import withState from 'src/store/hooks/withState';
import { SummaryTabProps, SummaryTabSelectedState } from './SummaryTab.types';

const SummaryTabContainer = ({ selectedState }: SummaryTabProps) => {
  return (
    <SummaryTabComponent selectedUserData={selectedState?.selectedUserData} />
  );
};

export default withState(
  SummaryTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
    } as SummaryTabSelectedState),
);
