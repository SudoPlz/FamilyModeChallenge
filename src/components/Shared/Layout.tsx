import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import { useTheme } from '../../theme/useTheme';
import EightSleepLogo from '../Shared/EightSleepLogo';
import { LayoutPropsType } from '../../types/components';
import { ThemeContextInterface } from '../../theme/useTheme';

const LOGO_WIDTH = Dimensions.get('window').width * 2.9;
const androidStatusBarController =
  Platform.OS === 'ios' ? null : <StatusBar backgroundColor="black" />;
const Layout = ({ children, style, showLogo }: LayoutPropsType) => {
  const { theme }: Partial<ThemeContextInterface> = useTheme();
  return (
    <View
      testID="Layout.LayoutContainer"
      style={[styles.layout, { backgroundColor: theme?.layoutBg }, style]}>
      {androidStatusBarController}
      {showLogo ? (
        <View style={styles.logoContainer}>
          <EightSleepLogo color={theme.cardBg} width={LOGO_WIDTH} />
        </View>
      ) : null}
      {children}
    </View>
  );
};

export default Layout;

const styles = StyleSheet.create({
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
