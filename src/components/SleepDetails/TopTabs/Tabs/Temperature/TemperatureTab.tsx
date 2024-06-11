import React from 'react';
import { Text, View } from 'react-native';
import Icon from '../../../../Shared/Icon';

export const TemperatureTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Icon name="thermometer-outline" color={color} size={focused ? 24 : 20} />
);

const HelloWorld: React.FC = () => {
  return (
    <View>
      <Text>Hello Temp</Text>
    </View>
  );
};

export default HelloWorld;
