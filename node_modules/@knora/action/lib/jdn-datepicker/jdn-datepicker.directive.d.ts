import { DateAdapter } from '@angular/material';
import { JDNConvertibleCalendar } from 'jdnconvertiblecalendar';
/**
* JdnDatepickerDirective creates a wrapper element that provides a new adapter with each instance of the datepicker.
*/
export declare class JdnDatepickerDirective {
    private adapter;
    constructor(adapter: DateAdapter<JDNConvertibleCalendar>);
}
