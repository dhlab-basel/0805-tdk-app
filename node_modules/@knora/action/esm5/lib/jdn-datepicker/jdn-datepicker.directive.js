import { Directive } from '@angular/core';
import { JDNConvertibleCalendarDateAdapter } from 'jdnconvertiblecalendardateadapter';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
/**
* JdnDatepickerDirective creates a wrapper element that provides a new adapter with each instance of the datepicker.
*/
var JdnDatepickerDirective = /** @class */ (function () {
    function JdnDatepickerDirective(adapter) {
        this.adapter = adapter;
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
    JdnDatepickerDirective.ctorParameters = function () { return [
        { type: DateAdapter }
    ]; };
    return JdnDatepickerDirective;
}());
export { JdnDatepickerDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamRuLWRhdGVwaWNrZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9qZG4tZGF0ZXBpY2tlci9qZG4tZGF0ZXBpY2tlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsaUNBQWlDLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN0RixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR2pFOztFQUVFO0FBQ0Y7SUFPSSxnQ0FBb0IsT0FBNEM7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBcUM7SUFBSSxDQUFDOztnQkFQeEUsU0FBUyxTQUFDO29CQUNQLFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFNBQVMsRUFBRTt3QkFDUCxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLGlDQUFpQyxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFO3FCQUNqRztpQkFDSjs7OztnQkFYUSxXQUFXOztJQWNwQiw2QkFBQztDQUFBLEFBUkQsSUFRQztTQUZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSkROQ29udmVydGlibGVDYWxlbmRhckRhdGVBZGFwdGVyIH0gZnJvbSAnamRuY29udmVydGlibGVjYWxlbmRhcmRhdGVhZGFwdGVyJztcbmltcG9ydCB7IERhdGVBZGFwdGVyLCBNQVRfREFURV9MT0NBTEUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBKRE5Db252ZXJ0aWJsZUNhbGVuZGFyIH0gZnJvbSAnamRuY29udmVydGlibGVjYWxlbmRhcic7XG5cbi8qKlxuKiBKZG5EYXRlcGlja2VyRGlyZWN0aXZlIGNyZWF0ZXMgYSB3cmFwcGVyIGVsZW1lbnQgdGhhdCBwcm92aWRlcyBhIG5ldyBhZGFwdGVyIHdpdGggZWFjaCBpbnN0YW5jZSBvZiB0aGUgZGF0ZXBpY2tlci5cbiovXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ2t1aUpkbkRhdGVwaWNrZXInLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IERhdGVBZGFwdGVyLCB1c2VDbGFzczogSkROQ29udmVydGlibGVDYWxlbmRhckRhdGVBZGFwdGVyLCBkZXBzOiBbTUFUX0RBVEVfTE9DQUxFXSB9XG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBKZG5EYXRlcGlja2VyRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkYXB0ZXI6IERhdGVBZGFwdGVyPEpETkNvbnZlcnRpYmxlQ2FsZW5kYXI+KSB7IH1cbn1cbiJdfQ==