import type { SleepInterval } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';
import { TossAndTurnData } from './TossAndTurnTab.types';

export function convertIntervalDataToTnTGraphData(
  interval: SleepInterval | null,
): TossAndTurnData | null {
  if (
    !interval?.ts ||
    !interval?.timeseries?.tnt ||
    interval?.timeseries?.tnt?.length <= 0
  ) {
    return null;
  }

  const tossAndTurnInitialData = interval.timeseries?.tnt;
  const startDateTime = LuxonDateTime.fromString(tossAndTurnInitialData[0][0]);
  const endDateTime = LuxonDateTime.fromString(
    tossAndTurnInitialData[tossAndTurnInitialData.length - 1][0],
  );
  const hourDiffBetweenStartAndEndTime = Number(
    endDateTime.diff(startDateTime, 'hour'),
  );

  const graphData = [];
  // adds a hourly mark points with zero count value, to make the graph more readable
  if (hourDiffBetweenStartAndEndTime > 1) {
    for (let hour = 0; hour <= hourDiffBetweenStartAndEndTime; hour += 1) {
      const hourMarkDateTime = startDateTime.add(hour, 'hour');
      graphData.push({
        timestamp: hourMarkDateTime.toUnixTimestamp(),
        value: 0,
      });
    }
  }

  for (let i = 0; i < tossAndTurnInitialData.length; i += 1) {
    const [datetimeString, tntCount] = tossAndTurnInitialData[i];
    const dateTime = LuxonDateTime.fromString(datetimeString);

    // massages data to be in the format that the chart expects
    graphData.push({
      timestamp: dateTime.toUnixTimestamp(),
      value: tntCount,
    });
  }

  graphData.sort((a, b) => a.timestamp - b.timestamp);
  return graphData;
}
