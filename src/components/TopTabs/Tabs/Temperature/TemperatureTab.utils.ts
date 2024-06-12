import type { SleepInterval } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';
import { TemperatureData } from './TemperatureTab.types';

export function convertIntervalDataToTemperatureGraphData(
  interval: SleepInterval | null,
  timeseriesField: 'tempRoomC' | 'tempBedC',
): TemperatureData | null {
  if (
    !interval?.ts ||
    !interval?.timeseries?.[timeseriesField] ||
    interval?.timeseries[timeseriesField]?.length <= 0
  ) {
    return null;
  }

  const graphData = [];
  let minValue = 0;
  let maxValue = 0;
  for (const [datetimeString, temperatureInCelcius] of interval.timeseries[
    timeseriesField
  ]) {
    const temperatureDateTime = LuxonDateTime.fromString(datetimeString);
    graphData.push({
      timestamp: temperatureDateTime.toUnixTimestamp(),
      value: parseFloat(temperatureInCelcius.toFixed(1)),
    });
    const temperatureValue = parseFloat(temperatureInCelcius.toFixed(1));
    graphData.push({
      timestamp: temperatureDateTime.toUnixTimestamp(),
      value: temperatureValue,
    });
    if (minValue === undefined || temperatureValue < minValue) {
      minValue = temperatureValue;
    }
    if (maxValue === undefined || temperatureValue > maxValue) {
      maxValue = temperatureValue;
    }
  }
  return { graphData, minValue, maxValue };
}

export function formatCelciusTemperatureString(value: string | number): string {
  'worklet';
  return `${parseFloat(value as string).toFixed(1)}°C`;
}
