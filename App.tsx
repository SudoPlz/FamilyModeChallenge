import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ReduxProvider from './src/store';
import { ThemeProvider } from './src/theme/useTheme';
import { NoInternetToast } from './src/components/Shared/NoInternet';

// Navigation
import RootNavigation from './src/routes/RootNavigation';

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
