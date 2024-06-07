import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useDispatch } from 'react-redux';

import { ScreenNames } from './Router.constants';

// import { useTheme } from '../theme/useTheme';

// Screens
import SleepDetails from '../components/SleepDetails';
import UserList from '../components/UserList';

// Root Navigation
const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  // const { theme } = useTheme();
  // const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={ScreenNames.UserList}>
        <Stack.Screen
          name={ScreenNames.UserList}
          component={UserList as React.FC}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen
          name={ScreenNames.SleepDetails}
          component={SleepDetails as React.FC}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
