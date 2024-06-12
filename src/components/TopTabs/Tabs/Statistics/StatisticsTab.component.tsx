import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './StatisticsTab.styles';
import { ProgressRef } from 'react-native-circular-progress-indicator';
import NoData from 'src/components/Shared/NoData';

type StatisticsTabComponentProps = {
  sleepScore?: number;
  totalHours?: number;
  averageHeartRate?: number;
  isFocused: boolean;
};
const StatisticsTabComponent = ({
  sleepScore,
  totalHours,
  averageHeartRate,
  isFocused,
}: StatisticsTabComponentProps) => {
  const circleAnimationRef = useRef<ProgressRef>(null);

  useEffect(() => {
    if (isFocused) {
      // restart animation on re-focus
      circleAnimationRef.current?.reAnimate();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {sleepScore && averageHeartRate && totalHours ? <View /> : <NoData />}
    </View>
  );
};

export default StatisticsTabComponent;
