export interface DateTimeBaseUnits {
  // a year, such as 1987
  year?: number | undefined;
  // a month, 1-12
  month?: number | undefined;
  // a day of the month, 1-31, depending on the month
  day?: number | undefined;
  // day of the year, 1-365 or 366
  ordinal?: number | undefined;
  // an ISO week year
  weekYear?: number | undefined;
  // an ISO week number, between 1 and 52 or 53, depending on the year
  weekNumber?: number | undefined;
  // an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
  weekday?: number | undefined;
  // hour of the day, 0-23
  hour?: number | undefined;
  // minute of the hour, 0-59
  minute?: number | undefined;
  // second of the minute, 0-59
  second?: number | undefined;
  // millisecond of the second, 0-999
  millisecond?: number | undefined;
}

export interface DateTimeDurationObjectUnits {
  years?: number | undefined;
  quarters?: number | undefined;
  months?: number | undefined;
  weeks?: number | undefined;
  days?: number | undefined;
  hours?: number | undefined;
  minutes?: number | undefined;
  seconds?: number | undefined;
  milliseconds?: number | undefined;
}

export type DateTimeGetSetUnit =
  | 'year'
  | 'month'
  | 'day'
  | 'weekday'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond';

export type DateTimeBaseUnit =
  | 'year'
  | 'quarter'
  | 'month'
  | 'week'
  | 'day'
  | 'hour'
  | 'minute'
  | 'second'
  | 'millisecond';

export enum DateTimeBaseFormats {
  BACKEND_TIME_24H = 'HH:mm',
  BACKEND_TIME_12H = 'h:mma',
  BACKEND_DATETIME = 'YYYY-MM-DDTHH:mm:ssZZ',
}
