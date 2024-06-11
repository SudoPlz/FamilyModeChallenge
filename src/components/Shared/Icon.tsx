import React from 'react';
import Ionicon from 'react-native-vector-icons/Ionicons';

type IoniconProps = {
  name: string;
  size?: number;
  color?: string;
};

const Icon = ({ name, size = 75, color = 'white' }: IoniconProps) => {
  return <Ionicon name={name} size={size} color={color} />;
};

export default Icon;
