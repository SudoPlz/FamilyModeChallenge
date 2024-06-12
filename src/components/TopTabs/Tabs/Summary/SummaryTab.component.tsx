import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import styles from './SummaryTab.styles';
import { ProgressRef } from 'react-native-circular-progress-indicator';
import SummaryDescription from './SummaryDescription';
import SummaryNoData from './SummaryNoData';

type SummaryTabComponentProps = {
  sleepScore?: number;
  totalHours?: number;
  averageHeartRate?: number;
  isFocused: boolean;
};
const SummaryTabComponent = ({
  sleepScore,
  totalHours,
  averageHeartRate,
  isFocused,
}: SummaryTabComponentProps) => {
  const circleAnimationRef = useRef<ProgressRef>(null);

  useEffect(() => {
    if (isFocused) {
      // restart animation on re-focus
      circleAnimationRef.current?.reAnimate();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {sleepScore && averageHeartRate && totalHours ? (
        <SummaryDescription
          sleepScore={sleepScore}
          averageHeartRate={averageHeartRate}
          totalHours={totalHours}
          ref={circleAnimationRef}
        />
      ) : (
        <SummaryNoData />
      )}
    </View>
  );
};

export default SummaryTabComponent;
