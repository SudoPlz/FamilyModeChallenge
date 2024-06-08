import React, { PropsWithChildren } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type GradientBorderProps = {
  thickness?: number;
  colors?: Array<string>;
  borderRadius?: number;
  style?: StyleProp<ViewStyle>;
};
const GradientBorder = ({
  children,
  colors = ['#2819FD', '#7E25A7'],
  borderRadius = 50,
  thickness = 10,
  style,
}: PropsWithChildren<GradientBorderProps>) => {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }} // Top-left corner
      end={{ x: 1, y: 1 }} // Bottom-right corner
      style={{
        padding: thickness, // Adjust this value to change the border thickness
        borderRadius, // Adjust this value to change the border radius
      }}>
      <View
        style={[
          // eslint-disable-next-line react-native/no-inline-styles
          {
            borderRadius, // Adjust this value to match the gradient border's radius minus the padding
            backgroundColor: '#151515', // Background color of the inner content
            overflow: 'hidden', // Ensures the inner content does not overflow the border
            padding: 30, // Adjust this value to add padding to the inner content
          },
          style,
        ]}>
        {children}
      </View>
    </LinearGradient>
  );
};

export default GradientBorder;
