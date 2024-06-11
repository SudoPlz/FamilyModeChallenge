import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SummaryTab, { SummaryTabBarIcon } from './Tabs/Summary';
import Statistics, { StatisticsTabBarIcon } from './Tabs/Statistics';
import Temperature, { TemperatureTabBarIcon } from './Tabs/Temperature';
import TossAndTurn, { TossAndTurnTabBarIcon } from './Tabs/TossAndTurn';
import { ScreenNames } from '../../routes/Router.constants';
import { useTheme } from '../../theme/useTheme';

const Tab = createMaterialTopTabNavigator();

// type TopTabsProps = {};
const TopTabs = () => {
  const { theme } = useTheme();
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.SummaryTab}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelStyle: { fontSize: 12, color: theme.inactiveColor },
        tabBarStyle: { backgroundColor: theme.layoutBg },
        tabBarInactiveTintColor: theme.inactiveColor,
        tabBarActiveTintColor: theme.color,
        tabBarIndicatorStyle: { backgroundColor: theme.accent },
      }}>
      <Tab.Screen
        name={ScreenNames.SummaryTab}
        component={SummaryTab as React.FC}
        options={{
          tabBarIcon: SummaryTabBarIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.StatisticsTab}
        component={Statistics}
        options={{
          tabBarIcon: StatisticsTabBarIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.TemperatureTab}
        component={Temperature}
        options={{
          tabBarIcon: TemperatureTabBarIcon,
        }}
      />
      <Tab.Screen
        name={ScreenNames.TossAndTurnTab}
        component={TossAndTurn}
        options={{
          tabBarIcon: TossAndTurnTabBarIcon,
        }}
      />
    </Tab.Navigator>
  );
};
export default TopTabs;
