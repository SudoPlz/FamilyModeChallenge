import React from 'react';
import { StatusBar, StyleSheet, View, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../theme/useTheme';
import EightSleepLogo from '../Shared/EightSleepLogo';
import { LayoutPropsType } from '../../types/components';
import { ThemeContextInterface } from '../../theme/useTheme';

const LOGO_WIDTH = Dimensions.get('window').width * 2.9;
const Layout = ({ children, style, showLogo, ...rest }: LayoutPropsType) => {
  const { theme }: Partial<ThemeContextInterface> = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme?.layoutBg }]}
      {...rest}>
      <StatusBar
        animated
        backgroundColor={theme.cardBg}
        barStyle={theme?.name === 'light' ? 'dark-content' : 'light-content'}
      />
      <View
        testID="Layout.LayoutContainer"
        style={[styles.layout, { backgroundColor: theme?.layoutBg }, style]}>
        {showLogo ? (
          <View style={styles.logoContainer}>
            <EightSleepLogo color={theme.cardBg} width={LOGO_WIDTH} />
          </View>
        ) : null}
        {children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;

const styles = StyleSheet.create({
  container: { flex: 1 },
  layout: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  logoContainer: {
    position: 'absolute',
    bottom: 50,
    opacity: 0.8,
  },
});
