import React from 'react';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useDispatch } from 'react-redux';

import { ScreenNames } from './Router.constants';

import { useTheme } from '../theme/useTheme';

// Screens
import SleepDetails from '../components/SleepDetails';
import UserList from '../components/UserList';

// Root Navigation
const Stack = createNativeStackNavigator();
const styles = StyleSheet.create({
  flex: { flex: 1 },
});

export default function RootNavigation() {
  const { theme } = useTheme();
  const globalScreenOptions = {
    headerStyle: {
      backgroundColor: theme.layoutBg, // Set the background color for the navigation bar
    },
    headerTintColor: 'white', // Set the text color for the navigation bar
  };
  // const dispatch = useDispatch();
  // const user = useSelector((state: RootState) => state.user)

  return (
    <GestureHandlerRootView style={styles.flex}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={ScreenNames.UserList}
          screenOptions={globalScreenOptions}>
          <Stack.Screen
            name={ScreenNames.UserList}
            component={UserList as React.FC}
            options={{
              headerShown: false,
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
    </GestureHandlerRootView>
  );
}
