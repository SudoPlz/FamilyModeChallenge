import React, { useEffect, useRef } from 'react';
import { View, useWindowDimensions } from 'react-native';
import { ProgressRef } from 'react-native-circular-progress-indicator';
import NoData from 'src/components/Shared/NoData/NoData';
import styles from './SummaryTab.styles';
import SummaryDescription from './SummaryDescription';
import Particles from 'src/components/Shared/Particles';
import Icon from 'src/components/Shared/Icon';
import Text from 'src/components/Shared/Text';
import { ScrollView } from 'react-native-gesture-handler';

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
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (isFocused) {
      // restart animation on re-focus
      circleAnimationRef.current?.reAnimate();
    }
  }, [isFocused]);

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}>
      {sleepScore && averageHeartRate && totalHours ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sleep Score</Text>
          </View>
          <View style={styles.body}>
            <SummaryDescription
              sleepScore={sleepScore}
              averageHeartRate={averageHeartRate}
              totalHours={totalHours}
              ref={circleAnimationRef}
            />
            <Particles
              infiniteLoop
              numberOfParticles={20}
              emissionRate={10}
              speed={5}
              gravity={-2}
              interval={300}
              particleLife={600}
              direction={-45}
              spread={200}
              fromPosition={{ x: width * 0.31, y: height * 0.255 }}>
              <Icon name="star-outline" size={12} color="#6F08F2" />
            </Particles>
          </View>
        </>
      ) : (
        <NoData />
      )}
    </ScrollView>
  );
};

export default SummaryTabComponent;
