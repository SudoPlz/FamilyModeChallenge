import React from 'react';
import Icon from '../../../Shared/Icon';

const TemperatureTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Icon name="thermometer-outline" color={color} size={focused ? 24 : 20} />
);
export default TemperatureTabBarIcon;
