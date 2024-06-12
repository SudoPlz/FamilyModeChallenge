import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import styles from './StatisticsTab.styles';
// import NoData from 'src/components/Shared/NoData';
import Chart from 'src/components/Shared/Chart';
import type { GraphData } from './StatisticsTab.types';
import { ReverseSleepStageToGraphNumericValueMapping } from './StatisticsTab.constants';
import Text from 'src/components/Shared/Text';
import NoData from 'src/components/Shared/NoData';
import { ScrollView } from 'react-native-gesture-handler';

type StatisticsTabComponentProps = {
  graphData: GraphData | null;
};

const textFormatter = ({ value }: { value: string; formatted: string }) => {
  'worklet';
  return `${
    ReverseSleepStageToGraphNumericValueMapping[Math.abs(parseInt(value, 10))]
  }`;
};

const StatisticsTabComponent = ({ graphData }: StatisticsTabComponentProps) => {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();

  return (
    <ScrollView
      style={styles.scrollView}
      contentContainerStyle={styles.container}>
      {graphData ? (
        <>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Sleep Stages</Text>
            <Text style={styles.subTitleText}>(slide to check it out)</Text>
          </View>
          <View style={styles.body}>
            <Chart
              showTooltipOnDrag
              data={graphData || []}
              textFormatter={textFormatter}
              style={styles.chart}
              width={screenWidth * 0.7}
              height={screenHeight * 0.4}>
              <View style={styles.chartLabelsContainer}>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Out</Text>
                </View>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Awake</Text>
                </View>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Light</Text>
                </View>
                <View style={styles.chartLabelsTextContainer}>
                  <Text style={styles.chartLabelsText}>Deep</Text>
                </View>
              </View>
            </Chart>
          </View>
        </>
      ) : (
        <NoData />
      )}
    </ScrollView>
  );
};

export default StatisticsTabComponent;
