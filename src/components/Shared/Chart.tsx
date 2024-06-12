import React from 'react';
import { View } from 'react-native';
import { LineChart, type TLineChartDataProp } from 'react-native-wagmi-charts';

type ChartProps = {
  data: TLineChartDataProp;
};
const Chart = ({ data }: ChartProps) => {
  return (
    <View>
      <LineChart.Provider data={data}>
        <LineChart>
          <LineChart.Path />
          <LineChart.CursorCrosshair>
            <LineChart.Tooltip />
          </LineChart.CursorCrosshair>
        </LineChart>
      </LineChart.Provider>
    </View>
  );
};
export default Chart;
