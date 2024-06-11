import React from 'react';
import Icon from '../../../Shared/Icon';

const SummaryTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => <Icon name="home-outline" color={color} size={focused ? 24 : 20} />;
export default SummaryTabBarIcon;
