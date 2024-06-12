import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import {
  LineChart,
  type TLineChartData,
  type TLineChartPoint,
} from 'react-native-wagmi-charts';
import styles from './Chart.styles';
import { reduceArray } from './Chart.utils';

type ChartProps = {
  data: TLineChartData;
  textFormatter: (props: { value: string; formatted: string }) => string;
  staticLabelsFormatter?: (props: {
    value: string;
    formatted: string;
  }) => string;
  width?: number;
  height?: number;
  style?: ViewStyle;
  showTooltipOnDrag?: boolean;
  showStaticLabels?: boolean;
  onCurrentIndexChange?: (index: number) => void;
};

const Chart = ({
  data,
  textFormatter,
  style,
  width,
  height,
  onCurrentIndexChange,
  showTooltipOnDrag,
  showStaticLabels,
  staticLabelsFormatter,
  children,
}: PropsWithChildren<ChartProps>) => {
  return (
    <View style={style}>
      <LineChart.Provider
        data={data}
        onCurrentIndexChange={onCurrentIndexChange}>
        <LineChart width={width} height={height}>
          <LineChart.Path color="#5208F0">
            <LineChart.Gradient color="#B00029" />
            <LineChart.Gradient color="#5208F0" />
          </LineChart.Path>
          <LineChart.CursorCrosshair color="#B00029">
            {showStaticLabels && data
              ? reduceArray(data, 6).map(
                  ({
                    initialIndex,
                  }: {
                    item: TLineChartPoint;
                    initialIndex: number;
                  }) => (
                    <LineChart.Tooltip
                      key={initialIndex}
                      position="top"
                      at={initialIndex}
                      textStyle={styles.staticLabelText}
                      textProps={{
                        format: staticLabelsFormatter,
                      }}
                    />
                  ),
                )
              : null}
            <LineChart.HoverTrap />
            {showTooltipOnDrag ? (
              <LineChart.Tooltip
                textStyle={styles.labelText}
                textProps={{
                  format: textFormatter,
                }}
              />
            ) : null}
          </LineChart.CursorCrosshair>
        </LineChart>
        <LineChart.DatetimeText
          style={styles.labelText}
          options={{
            hour: 'numeric',
            minute: 'numeric',
          }}
        />
        {children}
      </LineChart.Provider>
    </View>
  );
};
export default Chart;
