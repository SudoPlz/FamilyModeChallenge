import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { ProgressRef } from 'react-native-circular-progress-indicator';
import NoData from 'src/components/Shared/NoData/NoData';
import styles from './SummaryTab.styles';
import SummaryDescription from './SummaryDescription';

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
        <NoData />
      )}
    </View>
  );
};

export default SummaryTabComponent;
