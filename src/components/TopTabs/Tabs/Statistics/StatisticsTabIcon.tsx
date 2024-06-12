import React from 'react';
import Icon from '../../../Shared/Icon';

const StatisticsTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <Icon name="pulse-outline" color={color} size={focused ? 24 : 20} />;
export default StatisticsTabBarIcon;
