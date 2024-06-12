import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import styles from './TossAndTurnTab.styles';
// import NoData from 'src/components/Shared/NoData';
import Chart from 'src/components/Shared/Chart';
import type { TossAndTurnData } from './TossAndTurnTab.types';
import Text from 'src/components/Shared/Text';
import NoData from 'src/components/Shared/NoData';

type TossAndTurnTabComponentProps = {
  tossAndTurnData?: TossAndTurnData | null;
};

const tossAndTurnStringFormatter = ({
  value,
}: {
  value: string;
  formatted: string;
}) => {
  'worklet';
  return `${value}`;
};

const TossAndTurnTabComponent = ({
  tossAndTurnData,
}: TossAndTurnTabComponentProps) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  return (
    <View style={styles.container}>
      {tossAndTurnData ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Toss and Turns</Text>
            <Text style={styles.subTitleText}>(drag to check it out)</Text>
          </View>
          <View style={styles.body}>
            <Chart
              data={tossAndTurnData || []}
              textFormatter={tossAndTurnStringFormatter}
              style={styles.chart}
              width={screenWidth * 0.7}
              height={screenHeight * 0.32}>
              <View style={styles.chartLabelsContainer}>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Restless</Text>
                </View>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Calm</Text>
                </View>
              </View>
            </Chart>
          </View>
        </>
      ) : (
        <NoData />
      )}
    </View>
  );
};

export default TossAndTurnTabComponent;
