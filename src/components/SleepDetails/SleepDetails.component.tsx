import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import styles from './SleepDetails.styles';
import Layout from '../Shared/Layout';
import type { SelectedUserData } from 'src/store/state/user/user.types';

type SleepDetailsComponentProps = {
  isLoading: boolean;
  selectedUserData: SelectedUserData;
};
const SleepDetailsContainer = ({
  isLoading,
}: // selectedUserData,
SleepDetailsComponentProps) => {
  if (isLoading) {
    return (
      <Layout style={styles.container} showLogo>
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
    <Layout style={styles.container} showLogo>
      <Text>Details</Text>
    </Layout>
  );
};

export default SleepDetailsContainer;
