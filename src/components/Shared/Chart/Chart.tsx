import React, { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';
import { LineChart, type TLineChartDataProp } from 'react-native-wagmi-charts';
import styles from './Chart.styles';

type ChartProps = {
  data: TLineChartDataProp;
  textFormatter: (props: { value: string; formatted: string }) => string;
  width?: number;
  height?: number;
  style?: ViewStyle;
  showTooltipOnDrag?: boolean;
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
