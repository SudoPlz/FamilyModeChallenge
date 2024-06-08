import React from 'react';
import { Text, StyleSheet, ViewStyle } from 'react-native';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
// import { useTheme } from '../../theme/useTheme';

export type ButtonProps = {
  onPress: () => void;
  text?: string;
  children?: React.ReactNode;
  mode?: 'opacity' | 'highlight';
  style?: ViewStyle;
};
type TouchableType = typeof TouchableOpacity | typeof TouchableHighlight;

const Button = ({ onPress, text, children, style, mode }: ButtonProps) => {
  // const { theme } = useTheme();
  let Touchable: TouchableType = TouchableOpacity;
  if (mode === 'highlight') {
    Touchable = TouchableHighlight;
  }
  return (
    <Touchable
      style={[styles.container, style]}
      containerStyle={styles.touchableContainer}
      onPress={onPress}>
      <>
        {children ? children : <></>}
        {text ? <Text style={styles.text}>{text}</Text> : <></>}
      </>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  touchableContainer: {},
  text: { color: 'white' },
});

export default Button;
