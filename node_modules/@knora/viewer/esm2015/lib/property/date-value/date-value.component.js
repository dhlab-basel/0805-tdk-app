import { Component, Input } from '@angular/core';
import { DateRangeSalsah, Precision, ReadDateValue } from '@knora/core';
export class DateValueComponent {
    constructor() { }
    set calendar(value) {
        this._calendar = value;
    }
    get calendar() {
        return this._calendar;
    }
    set era(value) {
        this._era = value;
    }
    get era() {
        return this._era;
    }
    set valueObject(value) {
        this._dateValueObj = value;
        const dateOrRange = this.valueObject.getDateSalsah();
        if (dateOrRange instanceof DateRangeSalsah) {
            // period (start and end dates)
            this.period = true;
            this.dates = [this.getJSDate(dateOrRange.start), this.getJSDate(dateOrRange.end)];
        }
        else {
            // single date
            this.period = false;
            this.dates = [this.getJSDate(dateOrRange)];
        }
    }
    get valueObject() {
        return this._dateValueObj;
    }
    /**
     * Converts a `DateSalsah` to a JS Date, providing necessary formatting information.
     * JULIAN and GREGORIAN calendar are the only available for the moment.
     *
     * @param date the date to be converted.
     * @return DateFormatter.
     */
    getJSDate(date) {
        if (date.precision === Precision.yearPrecision) {
            return {
                format: 'yyyy',
                date: new Date(date.year.toString()),
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.monthPrecision) {
            return {
                format: 'MMMM ' + 'yyyy',
                date: new Date(date.year, date.month - 1, 1),
                era: date.era,
                calendar: date.calendar
            };
        }
        else if (date.precision === Precision.dayPrecision) {
            return {
                format: 'longDate',
                date: new Date(date.year, date.month - 1, date.day),
                era: date.era,
                calendar: date.calendar
            };
        }
        else {
            console.error('Error: incorrect precision for date');
        }
    }
}
DateValueComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-date-value',
                template: "<span *ngIf=\"period; else preciseDate\">\n    {{dates[0].date | date: dates[0].format}}\n    <span *ngIf=\"era\">\n        {{dates[0].era}}\n    </span>\n    - {{dates[1].date | date: dates[1].format}}\n    <span *ngIf=\"era\">\n        {{dates[1].era}}\n    </span>\n\n    <span *ngIf=\"calendar\">\n        ({{dates[0].calendar}})\n    </span>\n</span>\n\n<ng-template #preciseDate>\n\n    <span>\n        {{dates[0].date | date: dates[0].format}}\n        <span *ngIf=\"era\">\n            {{dates[0].era}}\n        </span>\n        <span *ngIf=\"calendar\">\n            ({{dates[0].calendar}})\n        </span>\n    </span>\n\n</ng-template>\n",
                styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}"]
            }] }
];
/** @nocollapse */
DateValueComponent.ctorParameters = () => [];
DateValueComponent.propDecorators = {
    calendar: [{ type: Input }],
    era: [{ type: Input }],
    valueObject: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2RhdGUtdmFsdWUvZGF0ZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGVBQWUsRUFBYyxTQUFTLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBT3BGLE1BQU0sT0FBTyxrQkFBa0I7SUErQzdCLGdCQUFnQixDQUFDO0lBN0NqQixJQUNJLFFBQVEsQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDeEIsQ0FBQztJQUVELElBQ0ksR0FBRyxDQUFDLEtBQWM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQUksR0FBRztRQUNMLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFDSSxXQUFXLENBQUMsS0FBb0I7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFFM0IsTUFBTSxXQUFXLEdBQWlDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbkYsSUFBSSxXQUFXLFlBQVksZUFBZSxFQUFFO1lBQzFDLCtCQUErQjtZQUMvQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRjthQUFNO1lBQ0wsY0FBYztZQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDNUM7SUFFSCxDQUFDO0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFVRDs7Ozs7O09BTUc7SUFDSCxTQUFTLENBQUMsSUFBZ0I7UUFFeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsQ0FBQyxhQUFhLEVBQUU7WUFDOUMsT0FBTztnQkFDTCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDcEMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO2dCQUNiLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUTthQUN4QixDQUFDO1NBQ0g7YUFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLGNBQWMsRUFBRTtZQUN0RCxPQUFPO2dCQUNMLE1BQU0sRUFBRSxPQUFPLEdBQUcsTUFBTTtnQkFDeEIsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUM1QyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQ3hCLENBQUM7U0FDSDthQUFNLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLENBQUMsWUFBWSxFQUFFO1lBQ3BELE9BQU87Z0JBQ0wsTUFBTSxFQUFFLFVBQVU7Z0JBQ2xCLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUM7Z0JBQ25ELEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRztnQkFDYixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7YUFDeEIsQ0FBQztTQUNIO2FBQU07WUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDdEQ7SUFFSCxDQUFDOzs7WUF4RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLHFwQkFBMEM7O2FBRTNDOzs7Ozt1QkFHRSxLQUFLO2tCQVNMLEtBQUs7MEJBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERhdGVSYW5nZVNhbHNhaCwgRGF0ZVNhbHNhaCwgUHJlY2lzaW9uLCBSZWFkRGF0ZVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktZGF0ZS12YWx1ZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXRlLXZhbHVlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZS12YWx1ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIERhdGVWYWx1ZUNvbXBvbmVudCB7XG5cbiAgQElucHV0KClcbiAgc2V0IGNhbGVuZGFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fY2FsZW5kYXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBjYWxlbmRhcigpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FsZW5kYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZXJhKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZXJhID0gdmFsdWU7XG4gIH1cblxuICBnZXQgZXJhKCkge1xuICAgIHJldHVybiB0aGlzLl9lcmE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWREYXRlVmFsdWUpIHtcbiAgICB0aGlzLl9kYXRlVmFsdWVPYmogPSB2YWx1ZTtcblxuICAgIGNvbnN0IGRhdGVPclJhbmdlOiBEYXRlU2Fsc2FoIHwgRGF0ZVJhbmdlU2Fsc2FoID0gdGhpcy52YWx1ZU9iamVjdC5nZXREYXRlU2Fsc2FoKCk7XG4gICAgaWYgKGRhdGVPclJhbmdlIGluc3RhbmNlb2YgRGF0ZVJhbmdlU2Fsc2FoKSB7XG4gICAgICAvLyBwZXJpb2QgKHN0YXJ0IGFuZCBlbmQgZGF0ZXMpXG4gICAgICB0aGlzLnBlcmlvZCA9IHRydWU7XG4gICAgICB0aGlzLmRhdGVzID0gW3RoaXMuZ2V0SlNEYXRlKGRhdGVPclJhbmdlLnN0YXJ0KSwgdGhpcy5nZXRKU0RhdGUoZGF0ZU9yUmFuZ2UuZW5kKV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIHNpbmdsZSBkYXRlXG4gICAgICB0aGlzLnBlcmlvZCA9IGZhbHNlO1xuICAgICAgdGhpcy5kYXRlcyA9IFt0aGlzLmdldEpTRGF0ZShkYXRlT3JSYW5nZSldO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlVmFsdWVPYmo7XG4gIH1cblxuICBkYXRlczogRGF0ZUZvcm1hdHRlcltdO1xuICBwZXJpb2Q6IGJvb2xlYW47XG4gIHByaXZhdGUgX2NhbGVuZGFyOiBib29sZWFuO1xuICBwcml2YXRlIF9lcmE6IGJvb2xlYW47XG4gIHByaXZhdGUgX2RhdGVWYWx1ZU9iajogUmVhZERhdGVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIGBEYXRlU2Fsc2FoYCB0byBhIEpTIERhdGUsIHByb3ZpZGluZyBuZWNlc3NhcnkgZm9ybWF0dGluZyBpbmZvcm1hdGlvbi5cbiAgICogSlVMSUFOIGFuZCBHUkVHT1JJQU4gY2FsZW5kYXIgYXJlIHRoZSBvbmx5IGF2YWlsYWJsZSBmb3IgdGhlIG1vbWVudC5cbiAgICpcbiAgICogQHBhcmFtIGRhdGUgdGhlIGRhdGUgdG8gYmUgY29udmVydGVkLlxuICAgKiBAcmV0dXJuIERhdGVGb3JtYXR0ZXIuXG4gICAqL1xuICBnZXRKU0RhdGUoZGF0ZTogRGF0ZVNhbHNhaCk6IERhdGVGb3JtYXR0ZXIge1xuXG4gICAgaWYgKGRhdGUucHJlY2lzaW9uID09PSBQcmVjaXNpb24ueWVhclByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAneXl5eScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhci50b1N0cmluZygpKSxcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLm1vbnRoUHJlY2lzaW9uKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICdNTU1NICcgKyAneXl5eScsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGUueWVhciwgZGF0ZS5tb250aCAtIDEsIDEpLCAvLyAwIGJhc2UgbW9udGhcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRlLnByZWNpc2lvbiA9PT0gUHJlY2lzaW9uLmRheVByZWNpc2lvbikge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAnbG9uZ0RhdGUnLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlLnllYXIsIGRhdGUubW9udGggLSAxLCBkYXRlLmRheSksICAvLyAwIGJhc2UgbW9udGhcbiAgICAgICAgZXJhOiBkYXRlLmVyYSxcbiAgICAgICAgY2FsZW5kYXI6IGRhdGUuY2FsZW5kYXJcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOiBpbmNvcnJlY3QgcHJlY2lzaW9uIGZvciBkYXRlJyk7XG4gICAgfVxuXG4gIH1cblxufVxuXG4vKipcbiAqIERhdGUgc3RydWN0dXJlIGZvciB0aGUgdGVtcGxhdGVcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBEYXRlRm9ybWF0dGVyIHtcbiAgZm9ybWF0OiBzdHJpbmc7XG4gIGRhdGU6IERhdGU7XG4gIGVyYTogc3RyaW5nO1xuICBjYWxlbmRhcjogc3RyaW5nO1xufVxuIl19