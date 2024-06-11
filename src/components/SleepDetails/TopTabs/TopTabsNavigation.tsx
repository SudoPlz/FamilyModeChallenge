import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SummaryTab, { SummaryTabBarIcon } from './Tabs/Summary';
import Statistics, { StatisticsTabBarIcon } from './Tabs/Statistics';
import Temperature, { TemperatureTabBarIcon } from './Tabs/Temperature';
import TossAndTurn, { TossAndTurnTabBarIcon } from './Tabs/TossAndTurn';

import { SleepDetailsTabNames } from '../../../routes/Router.constants';
import { useTheme } from '../../../theme/useTheme';
const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={SleepDetailsTabNames.Summary}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 12, color: theme.inactiveColor },
        tabBarStyle: { backgroundColor: theme.layoutBg },
        tabBarInactiveTintColor: theme.inactiveColor,
        tabBarActiveTintColor: theme.color,
        tabBarIndicatorStyle: { backgroundColor: theme.accent },
      }}>
      <Tab.Screen
        name={SleepDetailsTabNames.Summary}
        component={SummaryTab}
        options={{
          tabBarIcon: SummaryTabBarIcon,
        }}
      />
      <Tab.Screen
        name={SleepDetailsTabNames.Statistics}
        component={Statistics}
        options={{
          tabBarIcon: StatisticsTabBarIcon,
        }}
      />
      <Tab.Screen
        name={SleepDetailsTabNames.Temperature}
        component={Temperature}
        options={{
          tabBarIcon: TemperatureTabBarIcon,
        }}
      />
      <Tab.Screen
        name={SleepDetailsTabNames.TossAndTurn}
        component={TossAndTurn}
        options={{
          tabBarIcon: TossAndTurnTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};
export default TopTabs;
