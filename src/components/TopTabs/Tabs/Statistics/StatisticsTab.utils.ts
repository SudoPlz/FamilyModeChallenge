import type { SleepInterval } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';
import { GraphData } from './StatisticsTab.types';
import { SleepStageToGraphNumericValueMapping } from './StatisticsTab.constants';

export function convertIntervalDataToGraphData(
  interval: SleepInterval | null,
): GraphData | null {
  if (!interval?.ts || !interval.stages || interval.stages?.length <= 0) {
    return null;
  }
  const startDateTime = LuxonDateTime.fromString(interval.ts);

  let totalDuration = 0;
  const graphData = [];
  for (const data of interval.stages) {
    const graphValue = SleepStageToGraphNumericValueMapping[data.stage];
    totalDuration += data.duration;
    const stageDateTime = startDateTime.add(totalDuration, 'second');
    graphData.push({
      timestamp: stageDateTime.toUnixTimestamp(),
      value: graphValue,
    });
  }
  return graphData;
}
