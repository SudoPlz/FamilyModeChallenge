import React, { useCallback, useEffect, useRef } from 'react';
import { View } from 'react-native';
import CircularProgress from 'src/components/Shared/CircularProgress';
import Text from 'src/components/Shared/Text';
import styles, {
  ProgressActiveBarColor,
  ProgressCircleRadius,
  ProgressInactiveBarColor,
  ProgressValueFontSize,
} from './SummaryTab.styles';
import Icon from 'src/components/Shared/Icon';
import { ProgressRef } from 'react-native-circular-progress-indicator';

type SummaryTabComponentProps = {
  sleepScore: number;
  totalHours: number;
  averageHeartRate: number;
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

  const onAnimationComplete = useCallback(() => {}, []);
  return (
    <View style={styles.container}>
      <View style={styles.percentageContainer}>
        <View style={styles.descriptionParent}>
          <View style={styles.descriptionContentContainer}>
            <View style={styles.totalHoursContainer}>
              <Icon
                style={styles.icon}
                name="hourglass-outline"
                size={22}
                color="white"
              />
              <View style={styles.descriptionTextContainer}>
                <Text style={styles.descriptionMainText}>{totalHours}</Text>
                <Text style={styles.descriptionSideText}> hours</Text>
              </View>
            </View>
            <View style={styles.heartRateContainer}>
              <Icon
                style={styles.icon}
                name="heart-half-outline"
                size={22}
                color="white"
              />
              <View style={styles.descriptionTextContainer}>
                <Text style={styles.descriptionMainText}>
                  {averageHeartRate}
                </Text>
                <Text style={styles.descriptionSideText}> bpm</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.circularProgressContainer}>
          <CircularProgress
            ref={circleAnimationRef}
            radius={ProgressCircleRadius}
            value={sleepScore}
            progressValueFontSize={ProgressValueFontSize}
            valueSuffix="%"
            valueSuffixStyle={styles.circularProgressSuffixText}
            inActiveStrokeColor={ProgressInactiveBarColor}
            activeStrokeColor={ProgressActiveBarColor}
            progressValueColor="white"
            onAnimationComplete={onAnimationComplete}
          />
        </View>
      </View>
    </View>
  );
};

export default SummaryTabComponent;
