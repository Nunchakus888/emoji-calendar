import addDays from "date-fns/addDays";
import * as dateFns from "date-fns";
import defaultLocale from "date-fns/locale/en-US";

export interface AdapterFormats {
  // Token formats
  /**
   * The 4-digit year.
   * @example "2019"
   */
  year: string;
  /**
   * The full month name.
   * @example "January"
   */
  month: string;
  /**
   * The abbreviated month name.
   * @example "Jan"
   */
  monthShort: string;
  /**
   * The day of the month.
   * @example "1"
   */
  dayOfMonth: string;
  /**
   * The day of the month with letters.
   * @example "2nd"
   */
  dayOfMonthFull: string;
  /**
   * The name of the day of the week.
   * @example "Wednesday"
   */
  weekday: string;
  /**
   * The abbreviated name of the day of the week.
   * @example "Wed"
   * */
  weekdayShort: string;
  /**
   * The hours, 24-hour clock.
   * @example "23"
   */
  hours24h: string;
  /**
   * The hours, 12-hour clock.
   * @example "11"
   */
  hours12h: string;
  /**
   * The meridiem.
   * @example "AM"
   */
  meridiem: string;
  /**
   * The minutes.
   * @example "44"
   */
  minutes: string;
  /**
   * The seconds.
   * @example "00"
   */
  seconds: string;

  // Date formats
  /** The localized full date.
   * Used for the aria-label of the opening button of the `DatePicker`.
   * @example "Jan 1, 2019"
   */
  fullDate: string;
  /**
   * A keyboard input friendly date format.
   * Used in the date fields.
   * @example "02/13/2020
   */
  keyboardDate: string;
  /**
   * The abbreviated month name and the day of the month.
   * Used in the `DateRangePicker` toolbar.
   * @example "Jan 1"
   */
  shortDate: string;
  /**
   * The month name and the day of the month.
   * Used in the `DatePicker` toolbar for non-english locales.
   * @example "1 January"
   */
  normalDate: string;
  /**
   * The month name, the day of the week and the day of the month.
   * Used in the `DatePicker` toolbar for english locales.
   * @example "Sun, Jan 1"
   */
  normalDateWithWeekday: string;

  // Time formats
  /**
   * The hours and the minutes.
   * Used for the aria-label of the opening button of the `TimePicker`.
   * @example "11:44 PM" for locales with meridiem, "23:44" for locales without meridiem.
   */
  fullTime: string;
  /**
   * The hours with the meridiem and minutes.
   * @example "11:44 PM"
   */
  fullTime12h: string;
  /**
   * The hours without the meridiem and minutes.
   * @example "23:44"
   */
  fullTime24h: string;

  // Date & Time formats
  /**
   * A keyboard input friendly time format.
   * Used in the date-time fields.
   * @example "02/13/2020 11:44 PM" for locales with meridiem, "02/13/2020 23:44" for locales without meridiem.
   */
  keyboardDateTime: string;
  /**
   * A keyboard input friendly time format for 12-hour clock.
   * Used in the date-time fields.
   * @example "02/13/2020 11:44 PM"
   */
  keyboardDateTime12h: string;
  /**
   * A keyboard input friendly time format for 24-hour clock.
   * Used in the date-time fields.
   * @example "02/13/2020 23:44"
   */
  keyboardDateTime24h: string;
}

// https://www.zhenghao.io/posts/ts-never#how-to-check-for-never
type PropertyIfNotNever<PName extends string, PType> = [PType] extends [never]
  ? {}
  : { [P in PName]?: PType };

export type AdapterOptions<TLocale, TInstance> = {
  formats?: Partial<AdapterFormats>;
  locale?: TLocale;
} & PropertyIfNotNever<"instance", TInstance>;

type DateFnsLocale = typeof defaultLocale;

/**
 * Based on `@date-io/date-fns`
 *
 * MIT License
 *
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const defaultFormats: AdapterFormats = {
  year: "yyyy",
  month: "LLLL",
  monthShort: "MMM",
  dayOfMonth: "d",
  dayOfMonthFull: "do",
  weekday: "EEEE",
  weekdayShort: "EEEEEE",
  hours24h: "HH",
  hours12h: "hh",
  meridiem: "aa",
  minutes: "mm",
  seconds: "ss",

  fullDate: "PP",
  keyboardDate: "P",
  shortDate: "MMM d",
  normalDate: "d MMMM",
  normalDateWithWeekday: "EEE, MMM d",

  fullTime: "p",
  fullTime12h: "hh:mm aa",
  fullTime24h: "HH:mm",

  keyboardDateTime: "P p",
  keyboardDateTime12h: "P hh:mm aa",
  keyboardDateTime24h: "P HH:mm",
};

export class AdapterDateFns {
  locale: typeof defaultLocale;
  formats: AdapterFormats;
  dateFns: any;

  constructor({ locale, formats }: AdapterOptions<DateFnsLocale, never> = {}) {
    if (typeof addDays !== "function") {
      throw new Error(
        [
          "MUI: The `date-fns` package v3.x is not compatible with this adapter.",
          "Please, install v2.x of the package or use the `AdapterDateFnsV3` instead.",
        ].join("\n"),
      );
    }
    this.dateFns = dateFns;
    this.locale = locale;
    this.formats = { ...defaultFormats, ...formats };
  }

  public parse = (value: string, format: string): Date | null | any => {
    if (value === "") {
      return null;
    }

    // @ts-ignore
    return dateFns.parse(value, format, new Date(), { locale: this.locale });
  };

  public isValid = (value: Date | null): boolean => {
    if (value == null) {
      return false;
    }

    return dateFns.isValid(value);
  };

  public formatLong = (
    value: Date,
    formatKey: keyof AdapterFormats,
  ): string => {
    return dateFns.format(value, formatKey);
  };

  public format = (value: Date, formatKey: keyof AdapterFormats): string => {
    return this.formatByString(value, this.formats[formatKey]);
  };

  public formatByString = (value: Date, formatString: string): string => {
    // @ts-ignore
    return dateFns.format(value, formatString, { locale: this.locale });
  };

  public isEqual = (value: Date | null, comparing: Date | null): boolean => {
    if (value === null && comparing === null) {
      return true;
    }

    if (value === null || comparing === null) {
      return false;
    }

    return dateFns.isEqual(value, comparing);
  };

  public isSameYear = (value: Date, comparing: Date): boolean => {
    return dateFns.isSameYear(value, comparing);
  };

  public isSameMonth = (value: Date, comparing: Date): boolean => {
    return dateFns.isSameMonth(value, comparing);
  };

  public isSameDay = (value: Date, comparing: Date): boolean => {
    return dateFns.isSameDay(value, comparing);
  };

  public isSameHour = (value: Date, comparing: Date): boolean => {
    return dateFns.isSameHour(value, comparing);
  };

  public isAfter = (value: Date, comparing: Date): boolean => {
    return dateFns.isAfter(value, comparing);
  };

  public isAfterYear = (value: Date, comparing: Date): boolean => {
    return dateFns.isAfter(value, dateFns.endOfYear(comparing));
  };

  public isAfterDay = (value: Date, comparing: Date): boolean => {
    return dateFns.isAfter(value, dateFns.endOfDay(comparing));
  };

  public isBefore = (value: Date, comparing: Date): boolean => {
    return dateFns.isBefore(value, comparing);
  };

  public isBeforeYear = (value: Date, comparing: Date): boolean => {
    return dateFns.isBefore(value, this.startOfYear(comparing));
  };

  public isBeforeDay = (value: Date, comparing: Date): boolean => {
    return dateFns.isBefore(value, this.startOfDay(comparing));
  };

  public isWithinRange = (value: Date, [start, end]: [Date, Date]): boolean => {
    return dateFns.isWithinInterval(value, { start, end });
  };

  public startOfYear = (value: Date): Date => {
    return dateFns.startOfYear(value);
  };

  public startOfMonth = (value: Date): Date => {
    return dateFns.startOfMonth(value);
  };

  public startOfWeek = (value: Date, options): Date => {
    return dateFns.startOfWeek(value, { locale: this.locale, ...options });
  };

  public startOfDay = (value: Date): Date => {
    return dateFns.startOfDay(value);
  };

  public endOfYear = (value: Date): Date => {
    return dateFns.endOfYear(value);
  };

  public endOfMonth = (value: Date): Date => {
    return dateFns.endOfMonth(value);
  };

  public endOfWeek = (value: Date, options): Date => {
    return dateFns.endOfWeek(value, { locale: this.locale, ...options });
  };

  public endOfDay = (value: Date): Date => {
    return dateFns.endOfDay(value);
  };

  public addYears = (value: Date, amount: number): Date => {
    return dateFns.addYears(value, amount);
  };

  public addMonths = (value: Date, amount: number): Date => {
    return dateFns.addMonths(value, amount);
  };

  public addWeeks = (value: Date, amount: number): Date => {
    return dateFns.addWeeks(value, amount);
  };

  public addDays = (value: Date, amount: number): Date => {
    return dateFns.addDays(value, amount);
  };

  public addHours = (value: Date, amount: number): Date => {
    return dateFns.addHours(value, amount);
  };

  public addMinutes = (value: Date, amount: number): Date => {
    return dateFns.addMinutes(value, amount);
  };

  public addSeconds = (value: Date, amount: number): Date => {
    return dateFns.addSeconds(value, amount);
  };

  public getYear = (value: Date): number => {
    return dateFns.getYear(value);
  };

  public getMonth = (value: Date): number => {
    return dateFns.getMonth(value);
  };

  public getDate = (value: Date): number => {
    return dateFns.getDate(value);
  };

  public getHours = (value: Date): number => {
    return dateFns.getHours(value);
  };

  public getMinutes = (value: Date): number => {
    return dateFns.getMinutes(value);
  };

  public getSeconds = (value: Date): number => {
    return dateFns.getSeconds(value);
  };

  public getMilliseconds = (value: Date): number => {
    return dateFns.getMilliseconds(value);
  };

  public setYear = (value: Date, year: number): Date => {
    return dateFns.setYear(value, year);
  };

  public setMonth = (value: Date, month: number): Date => {
    return dateFns.setMonth(value, month);
  };

  public setDate = (value: Date, date: number): Date => {
    return dateFns.setDate(value, date);
  };

  public setHours = (value: Date, hours: number): Date => {
    return dateFns.setHours(value, hours);
  };

  public setMinutes = (value: Date, minutes: number): Date => {
    return dateFns.setMinutes(value, minutes);
  };

  public setSeconds = (value: Date, seconds: number): Date => {
    return dateFns.setSeconds(value, seconds);
  };

  public setMilliseconds = (value: Date, milliseconds: number): Date => {
    return dateFns.setMilliseconds(value, milliseconds);
  };

  public getDaysInMonth = (value: Date): number => {
    return dateFns.getDaysInMonth(value);
  };

  public getWeekArray = (value: Date, options = {}): Date[][] => {
    const start = this.startOfWeek(this.startOfMonth(value), options);
    const end = this.endOfWeek(this.endOfMonth(value), options);

    let count = 0;
    let current = start;
    const nestedWeeks: Date[][] = [];

    while (this.isBefore(current, end)) {
      const weekNumber = Math.floor(count / 7);
      nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
      nestedWeeks[weekNumber].push(current);

      current = this.addDays(current, 1);
      count += 1;
    }

    return nestedWeeks;
  };

  public getWeekNumber = (value: Date): number => {
    // @ts-ignore
    return dateFns.getWeek(value, { locale: this.locale });
  };

  public getYearRange = ([start, end]: [Date, Date]): Date[] => {
    const startDate = this.startOfYear(start);
    const endDate = this.endOfYear(end);
    const years: Date[] = [];

    let current = startDate;
    while (this.isBefore(current, endDate)) {
      years.push(current);
      current = this.addYears(current, 1);
    }

    return years;
  };
}
