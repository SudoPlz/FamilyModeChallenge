import { DateTime, Duration } from 'luxon';
import {
  DateTimeBaseUnit,
  DateTimeDurationObjectUnits,
  DateTimeGetSetUnit,
} from './DateTime.types';

export default class LuxonDateTime {
  protected instance: DateTime;

  constructor(value?: DateTime | null) {
    this.instance = value || DateTime.now();
    Object.freeze(this.instance);
  }

  // public static fromLuxonDateTime(luxonValue: DateTime): DateTimeService {
  //   const newDateTimeService = new DateTimeService();
  //   newDateTimeService.instance = luxonValue;
  //   return newDateTimeService;
  // }

  isValid = (): boolean => {
    return this.instance != null;
  };

  clone = (): this => {
    return new LuxonDateTime(this.instance) as this;
  };

  public static now() {
    return new LuxonDateTime();
  }

  public static utc() {
    return new LuxonDateTime(DateTime.utc());
  }

  public static fromString(date: string) {
    return new LuxonDateTime(DateTime.fromISO(date));
  }

  public static utcFromStrWithFormat(date: string, luxonFormat: string) {
    return new LuxonDateTime(
      DateTime.fromFormat(date, luxonFormat, {
        zone: 'utc',
      }),
    );
  }

  public static fromFormat(
    value: string,
    luxonFormat: string,
    // preserveOffset: boolean = false,
  ): LuxonDateTime {
    return new LuxonDateTime(DateTime.fromFormat(value, luxonFormat));
  }

  public static fromFormatWithTimezone(
    value: string,
    luxonFormat: string,
    timezone: string,
  ) {
    return new LuxonDateTime(
      DateTime.fromFormat(value, luxonFormat, {
        zone: timezone,
      }),
    );
  }

  public static fromJsDate(value: Date): LuxonDateTime {
    return new LuxonDateTime(DateTime.fromJSDate(value));
  }

  // public static fromObject(values: DateTimeBaseUnits): LuxonDateTime {
  //   return new LuxonDateTime(DateTime.fromObject(values));
  // }

  public static isDeviceInDST = (): boolean => {
    return DateTime.now().isInDST;
  };

  // set = (values: DateTimeBaseUnits): this => {
  //   return new LuxonDateTime(this.instance.set(values)) as this;
  // };

  get = (value: DateTimeGetSetUnit): number => {
    return this.instance.get(value);
  };

  // setFrom = (otherDateTime: this, units: Array<DateTimeGetSetUnit>): this => {
  //   const attributes = units.reduce<DateObjectUnits>(
  //     (acc, key: DateTimeGetSetUnit) => {
  //       acc[key] = otherDateTime.instance?.get(key);
  //       return acc;
  //     },
  //     {},
  //   );
  //   return this.set(attributes);
  // };

  toJsDate = (): Date => {
    return this.instance.toJSDate();
  };

  add = (value: number, unit: DateTimeBaseUnit): this => {
    return new LuxonDateTime(
      this.instance.plus(this.createDuration(value, unit)),
    ) as this;
  };

  subtract = (value: number, unit: DateTimeBaseUnit): this => {
    return new LuxonDateTime(
      this.instance.minus(this.createDuration(value, unit)),
    ) as this;
  };

  updateTimezone = (timezone: string, keepLocalTime: boolean = false): this => {
    return new LuxonDateTime(
      this.instance.setZone(timezone, { keepLocalTime }),
    ) as this;
  };

  endOf = (unit: DateTimeBaseUnit): this => {
    return new LuxonDateTime(this.instance.endOf(unit)) as this;
  };

  startOf = (unit: DateTimeBaseUnit): this => {
    return new LuxonDateTime(this.instance.startOf(unit)) as this;
  };

  midOfDay = (): this => {
    return new LuxonDateTime(this.instance.startOf('day')).add(
      12,
      'hour',
    ) as this;
  };

  createDuration = (value: number, unit: DateTimeBaseUnit) => {
    return Duration.fromObject({ [unit]: value });
  };

  luxonFormat = (luxonFormat: string): string => {
    return this.instance
      .plus(0) // workaround for https://github.com/moment/luxon/issues/740
      .toFormat(luxonFormat);
  };

  format = (luxonFormat: string): string => {
    return this.luxonFormat(luxonFormat);
  };

  relativeTime = (): string => {
    return this.instance.toRelative() ?? '';
  };

  toString = () => {
    return this.instance.toString();
  };

  isToday = (): boolean => {
    return this.instance.toISODate() === DateTime.local().toISODate();
  };

  toISOString(): string | null {
    return this.instance.toISO();
  }

  isSame = (
    otherDateTime: LuxonDateTime | null | undefined,
    unit: DateTimeBaseUnit = 'millisecond',
  ): boolean => {
    if (!otherDateTime) {
      return false;
    }
    return this.instance.hasSame(otherDateTime.instance, unit);
  };

  diff = (otherDateTime: LuxonDateTime, unit: DateTimeBaseUnit): number => {
    const durationDiff = this.instance
      .diff(otherDateTime.instance, unit)
      .as(unit);
    return durationDiff || 0;
  };

  isAfter = (
    otherDateTime: LuxonDateTime,
    unit?: DateTimeBaseUnit,
  ): boolean => {
    if (!unit) {
      return this.instance > otherDateTime.instance;
    }
    return this.diff(otherDateTime, unit) > 0;
  };

  isSameOrAfter = (
    otherDateTime: LuxonDateTime,
    unit?: DateTimeBaseUnit,
  ): boolean => {
    if (!unit) {
      return this.instance >= otherDateTime.instance;
    }
    console.log(
      `@@@ DIF ${this.diff(otherDateTime, unit)} of ${this.instance.toFormat(
        'DD/YY',
      )} from  ${otherDateTime.format('DD/YY')}`,
    );
    return this.diff(otherDateTime, unit) >= 0;
  };

  isBefore = (
    otherDateTime: LuxonDateTime,
    unit?: DateTimeBaseUnit,
  ): boolean => {
    if (!unit) {
      return this.instance < otherDateTime.instance;
    }
    return this.diff(otherDateTime, unit) < 0;
  };

  isSameOrBefore = (
    otherDateTime: LuxonDateTime,
    unit?: DateTimeBaseUnit,
  ): boolean => {
    if (!unit) {
      return this.instance <= otherDateTime.instance;
    }
    return this.diff(otherDateTime, unit) <= 0;
  };

  convertDurationObjectUnit = (
    unit: DateTimeBaseUnit,
  ): keyof DateTimeDurationObjectUnits => {
    const lastChar = unit.slice(-1);
    if (lastChar === 's') {
      return unit as keyof DateTimeDurationObjectUnits;
    }
    return `${unit}s` as keyof DateTimeDurationObjectUnits;
  };

  printHumanReadableTimezone(): string {
    return this.instance.toFormat('ZZZZ');
  }

  isTomorrow = (): boolean => {
    const tomorrow = LuxonDateTime.now().add(1, 'day');
    return this.isSame(tomorrow, 'day');
  };

  isYesterday = (): boolean => {
    const yesterday = LuxonDateTime.now().subtract(1, 'day');
    return this.isSame(yesterday, 'day');
  };
}
