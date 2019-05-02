/**
 * Precision for DateSalsah.
 */
export declare enum Precision {
    yearPrecision = 0,
    monthPrecision = 1,
    dayPrecision = 2
}
/**
 * Represents a Salsah date object with a precision information.
 */
export declare class DateSalsah {
    readonly calendar: string;
    readonly era: string;
    readonly year: number;
    readonly month?: number;
    readonly day?: number;
    private static separator;
    readonly precision: Precision;
    constructor(calendar: string, era: string, year: number, month?: number, day?: number);
    /**
     * Returns a string representation of the date without the calendar.
     *
     * @returns {string}
     */
    getDateAsStringWithoutCalendar(): string;
    /**
     * Returns a string representation of the date (with calendar).
     *
     * @returns {string}
     */
    getDateAsString(): string;
}
/**
 * Represents a period (with start date and end date).
 */
export declare class DateRangeSalsah {
    readonly start: DateSalsah;
    readonly end: DateSalsah;
    constructor(start: DateSalsah, end: DateSalsah);
    /**
     * Returns a string representation of the date range (with preceding calendar).
     *
     * @returns {string}
     */
    getDateAsString(): string;
}
