import type { SleepInterval } from 'src/store/state/user/user.types';
import LuxonDateTime from 'src/utils/DateTime';

export function findIntervalForDateTime(
  selectedDate: LuxonDateTime,
  intervals: Array<SleepInterval>,
) {
  if (
    intervals == null ||
    intervals?.length <= 0 ||
    selectedDate == null ||
    !selectedDate.isValid()
  ) {
    console.log('Na-AH');
    return null;
  }
  return (
    intervals.find((interval: SleepInterval) => {
      return (
        interval.ts != null &&
        LuxonDateTime.fromString(interval.ts).isSame(selectedDate, 'day')
      );
    }) || null
  );
}
