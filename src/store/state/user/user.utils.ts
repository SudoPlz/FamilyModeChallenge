import type { UserEndpointInterval } from 'src/network/endpoints/user';

export function calculateTotalSleepHours(interval: UserEndpointInterval) {
  let totalSleepHours = 0;
  if (interval) {
    if (interval.stages) {
      for (const stage of interval.stages) {
        totalSleepHours += stage.duration / 3600;
      }
    }
  }
  return Math.round(totalSleepHours * 10) / 10; // round to 1 decimal place
}

export function calculateAverageHeartRate(interval: UserEndpointInterval) {
  let totalHeartRate = 0;
  let count = 0;
  if (interval?.timeseries?.heartRate) {
    for (const [_, aHeartRate] of interval.timeseries.heartRate) {
      totalHeartRate += aHeartRate;
      count++;
    }
  }
  const averageHeartRate = count > 0 ? totalHeartRate / count : 0;
  return Math.round(averageHeartRate * 10) / 10; // round to 1 decimal place
}
