import { DateSalsah, ReadDateValue } from '@knora/core';
export declare class DateValueComponent {
    calendar: boolean;
    era: boolean;
    valueObject: ReadDateValue;
    dates: DateFormatter[];
    period: boolean;
    private _calendar;
    private _era;
    private _dateValueObj;
    constructor();
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param date the date to be converted.
     * @return DateFormatter.
     */
    getJSDate(date: DateSalsah): DateFormatter;
}
/**
 * Date structure for the template
 */
export interface DateFormatter {
    format: string;
    date: Date;
    era: string;
    calendar: string;
}
