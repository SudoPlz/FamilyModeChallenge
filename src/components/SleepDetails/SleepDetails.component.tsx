import React, { useEffect } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import styles from './SleepDetails.styles';
import Layout from '../Shared/Layout';
import type { SelectedUserData } from 'src/store/state/user/user.types';
import { useNavigation } from '../../routes/Router.hooks';

type SleepDetailsComponentProps = {
  isLoading: boolean;
  selectedUserData: SelectedUserData;
};
const SleepDetailsContainer = ({
  isLoading,
  selectedUserData,
}: SleepDetailsComponentProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    if (selectedUserData?.user?.name) {
      navigation.setOptions({ title: selectedUserData.user?.name });
    }
  }, [navigation, selectedUserData?.user?.name]);

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
      <Text>Details</Text>
    </Layout>
  );
};

export default SleepDetailsContainer;
