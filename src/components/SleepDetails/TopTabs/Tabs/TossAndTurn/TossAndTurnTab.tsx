import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../../../../Shared/Icon';

export const TossAndTurnTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Icon name="reload-circle-outline" color={color} size={focused ? 24 : 20} />
);
const HelloWorld: React.FC = () => {
  return (
    <View>
      <Text>Hello TnT</Text>
    </View>
  );
};

export default HelloWorld;
