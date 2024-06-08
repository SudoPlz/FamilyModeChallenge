import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ReduxProvider from './store';
import { ThemeProvider } from './theme/useTheme';
import { NoInternetToast } from './components/Shared/NoInternet';

// Navigation
import RootNavigation from './routes/RootNavigation';

let Root = function App() {
  return (
    <SafeAreaProvider>
      <ReduxProvider>
        <ThemeProvider>
          <RootNavigation />
          <NoInternetToast />
        </ThemeProvider>
      </ReduxProvider>
    </SafeAreaProvider>
  );
};

export default Root;
