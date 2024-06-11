import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import styles from './SleepDetails.styles';
import Layout from '../Shared/Layout';
import type { SelectedUserData } from '../../store/state/user/user.types';
import { useNavigation } from '../../routes/Router.hooks';
import DatePicker from '../Shared/DatePicker/DatePicker';
import DateTime from '../../utils/DateTime';
import TopTabs from '../TopTabs/TopTabsNavigation';

type SleepDetailsComponentProps = {
  isLoading: boolean;
  selectedUserData: SelectedUserData;
};
const SleepDetailsContainer = ({
  isLoading,
  selectedUserData,
}: SleepDetailsComponentProps) => {
  const navigation = useNavigation();
  const [selectedDate, setSelectedDate] = useState<DateTime>(DateTime.now());

  useEffect(() => {
    if (selectedUserData?.user?.name) {
      navigation.setOptions({ title: selectedUserData.user?.name });
    }
  }, [navigation, selectedUserData?.user?.name]);

  const onDatePicked = useCallback((date: DateTime) => {
    setSelectedDate(date);
  }, []);

  if (isLoading) {
    return (
      <Layout style={styles.container}>
        <ActivityIndicator
          animating
          size="large"
          color="white"
          style={styles.loadingIndicator}
        />
      </Layout>
    );
  }
  return (
    <Layout style={styles.container}>
      <DatePicker selectedDate={selectedDate} onDateChange={onDatePicked} />
      <TopTabs />
    </Layout>
  );
};

export default SleepDetailsContainer;
