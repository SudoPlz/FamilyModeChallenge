import React from 'react';
import { Text, View } from 'react-native';
import type { SelectedUserData } from 'src/store/state/user/user.types';

type SummaryTabComponentProps = {
  selectedUserData: SelectedUserData;
};
const SummaryTabComponent = ({
  selectedUserData,
}: SummaryTabComponentProps) => {
  return (
    <View
      style={{
        backgroundColor: 'red',
      }}>
      <Text>Hello Summary {JSON.stringify(selectedUserData?.user)}</Text>
    </View>
  );
};

export default SummaryTabComponent;
