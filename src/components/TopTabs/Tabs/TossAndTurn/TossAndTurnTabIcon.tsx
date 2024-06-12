import React from 'react';
import Icon from '../../../Shared/Icon';

const TossAndTurnTabBarIcon = ({
  focused,
  color,
}: {
  focused: boolean;
  color: string;
}) => (
  <Icon name="reload-circle-outline" color={color} size={focused ? 24 : 20} />
);
export default TossAndTurnTabBarIcon;
