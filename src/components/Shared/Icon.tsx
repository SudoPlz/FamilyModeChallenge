import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';

type IoniconProps = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const Icon = ({ name, size = 75, color = 'white', style }: IoniconProps) => {
  return <Ionicon name={name} size={size} color={color} style={style} />;
};

export default Icon;
