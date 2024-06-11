import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../../../../Shared/Icon';

export const SummaryTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <Icon name="home-outline" color={color} size={focused ? 24 : 20} />;

const HelloWorld: React.FC = () => {
  return (
    <View
      style={{
        backgroundColor: 'red',
      }}>
      <Text>Hello Summary</Text>
    </View>
  );
};

export default HelloWorld;
