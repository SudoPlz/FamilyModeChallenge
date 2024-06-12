import React, { useState, useEffect } from 'react';
import SummaryTabComponent from './SummaryTab.component';
import withState from 'src/store/hooks/withState';
import { SummaryTabProps, SummaryTabSelectedState } from './SummaryTab.types';

const SummaryTabContainer = ({ navigation }: SummaryTabProps) => {
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
      sleepScore={65} // TODO Add real values
      totalHours={8} // TODO Add real values
      averageHeartRate={83} // TODO Add real values
    />
  );
};

export default withState(
  SummaryTabContainer,
  state =>
    ({
      selectedUserData: state.user.selectedUser,
    } as SummaryTabSelectedState),
);
