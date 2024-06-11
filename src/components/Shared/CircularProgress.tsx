import React from 'react';
import CircularProgressIndicator from 'react-native-circular-progress-indicator';
import type {
  CircularProgressProps,
  ProgressRef,
} from 'react-native-circular-progress-indicator/src/types';
const CircularProgress = React.forwardRef<ProgressRef, CircularProgressProps>(
  (
    {
      value,
      maxValue = 100,
      duration = 1000,
      progressValueColor = '#3498db',
      title = '',
      titleColor = 'black',
      radius = 120,
      valueSuffix = '',
      ...restProps
    },
    ref,
  ) => (
    <CircularProgressIndicator
      ref={ref}
      value={value}
      radius={radius}
      duration={duration}
      progressValueColor={progressValueColor}
      maxValue={maxValue}
      title={title}
      titleColor={titleColor}
      valueSuffix={valueSuffix}
      {...restProps}
    />
  ),
);
export default CircularProgress;
