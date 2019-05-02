import { Directive } from '@angular/core';
import { JDNConvertibleCalendarDateAdapter } from 'jdnconvertiblecalendardateadapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
/**
* JdnDatepickerDirective creates a wrapper element that provides a new adapter with each instance of the datepicker.
*/
export class JdnDatepickerDirective {
    constructor(adapter) {
        this.adapter = adapter;
    }
}
JdnDatepickerDirective.decorators = [
    { type: Directive, args: [{
                selector: 'kuiJdnDatepicker',
                providers: [
                    { provide: DateAdapter, useClass: JDNConvertibleCalendarDateAdapter, deps: [MAT_DATE_LOCALE] }
                ]
            },] }
];
/** @nocollapse */
JdnDatepickerDirective.ctorParameters = () => [
    { type: DateAdapter }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRuLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9qZG4tZGF0ZXBpY2tlci9qZG4tZGF0ZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pFOztFQUVFO0FBT0YsTUFBTSxPQUFPLHNCQUFzQjtJQUMvQixZQUFvQixPQUE0QztRQUE1QyxZQUFPLEdBQVAsT0FBTyxDQUFxQztJQUFJLENBQUM7OztZQVB4RSxTQUFTLFNBQUM7Z0JBQ1AsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsU0FBUyxFQUFFO29CQUNQLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsaUNBQWlDLEVBQUUsSUFBSSxFQUFFLENBQUMsZUFBZSxDQUFDLEVBQUU7aUJBQ2pHO2FBQ0o7Ozs7WUFYUSxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBKRE5Db252ZXJ0aWJsZUNhbGVuZGFyRGF0ZUFkYXB0ZXIgfSBmcm9tICdqZG5jb252ZXJ0aWJsZWNhbGVuZGFyZGF0ZWFkYXB0ZXInO1xuaW1wb3J0IHsgRGF0ZUFkYXB0ZXIsIE1BVF9EQVRFX0xPQ0FMRSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEpETkNvbnZlcnRpYmxlQ2FsZW5kYXIgfSBmcm9tICdqZG5jb252ZXJ0aWJsZWNhbGVuZGFyJztcblxuLyoqXG4qIEpkbkRhdGVwaWNrZXJEaXJlY3RpdmUgY3JlYXRlcyBhIHdyYXBwZXIgZWxlbWVudCB0aGF0IHByb3ZpZGVzIGEgbmV3IGFkYXB0ZXIgd2l0aCBlYWNoIGluc3RhbmNlIG9mIHRoZSBkYXRlcGlja2VyLlxuKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAna3VpSmRuRGF0ZXBpY2tlcicsXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogRGF0ZUFkYXB0ZXIsIHVzZUNsYXNzOiBKRE5Db252ZXJ0aWJsZUNhbGVuZGFyRGF0ZUFkYXB0ZXIsIGRlcHM6IFtNQVRfREFURV9MT0NBTEVdIH1cbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEpkbkRhdGVwaWNrZXJEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRhcHRlcjogRGF0ZUFkYXB0ZXI8SkROQ29udmVydGlibGVDYWxlbmRhcj4pIHsgfVxufVxuIl19