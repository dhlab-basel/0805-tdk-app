import * as tslib_1 from "tslib";
import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';
var ExistingNameDirective = /** @class */ (function () {
    function ExistingNameDirective() {
        /**
         * @ignore
         */
        this.valFn = Validators.nullValidator;
    }
    /**
     * @ignore
     * @param changes
     */
    ExistingNameDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['existingName'];
        if (change) {
            var val = change.currentValue;
            var re = val instanceof RegExp ? val : new RegExp(val);
            this.valFn = existingNameValidator(re);
        }
        else {
            this.valFn = Validators.nullValidator;
        }
    };
    /**
     * @ignore
     * @param control
     */
    ExistingNameDirective.prototype.validate = function (control) {
        return this.valFn(control);
    };
    ExistingNameDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kuiExistingName]',
                    providers: [{ provide: NG_VALIDATORS, useExisting: ExistingNameDirective, multi: true }]
                },] }
    ];
    ExistingNameDirective.propDecorators = {
        existingName: [{ type: Input }]
    };
    return ExistingNameDirective;
}());
export { ExistingNameDirective };
/**
 * Validation of existing name value. String method (only one value);
 * Use it in a "formbuilder" group as a validator property
 *
 * @param {RegExp} valRegexp Only one regular expression value
 * @returns ValidatorFn
 */
export function existingNameValidator(valRegexp) {
    return function (control) {
        var name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        var no = valRegexp.test(name);
        return no ? { 'existingName': { name: name } } : null;
    };
}
/**
 * Validation of existing name values. Array method (list of values)
 * Use it in a "formbuilder" group as a validator property
 *
 *
 * @param {RegExp} valArrayRegexp List of regular expression values
 * @returns ValidatorFn
 */
export function existingNamesValidator(valArrayRegexp) {
    return function (control) {
        var e_1, _a;
        var name;
        if (control.value) {
            name = control.value.toLowerCase();
        }
        var no;
        try {
            for (var valArrayRegexp_1 = tslib_1.__values(valArrayRegexp), valArrayRegexp_1_1 = valArrayRegexp_1.next(); !valArrayRegexp_1_1.done; valArrayRegexp_1_1 = valArrayRegexp_1.next()) {
                var existing = valArrayRegexp_1_1.value;
                no = existing.test(name);
                if (no) {
                    // console.log(no);
                    return no ? { 'existingName': { name: name } } : null;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (valArrayRegexp_1_1 && !valArrayRegexp_1_1.done && (_a = valArrayRegexp_1.return)) _a.call(valArrayRegexp_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return no ? { 'existingName': { name: name } } : null;
    };
}
/**
 * @ignore
 *
 * @param {RegExp} pattern
 * @param {string} regType
 * @returns ValidatorFn
 */
export function notAllowed(pattern, regType) {
    return function (control) {
        var name;
        // console.log(regType);
        if (control.value) {
            name = control.value.toLowerCase();
        }
        // console.log(name);
        var no = pattern.test(name);
        return no ? { regType: { name: name } } : null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvYWN0aW9uLyIsInNvdXJjZXMiOlsibGliL2V4aXN0aW5nLW5hbWUvZXhpc3RpbmctbmFtZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUMzRSxPQUFPLEVBQW1CLGFBQWEsRUFBZSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RjtJQUFBO1FBZ0JJOztXQUVHO1FBQ0ssVUFBSyxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUM7SUF3QjdDLENBQUM7SUF0Qkc7OztPQUdHO0lBQ0gsMkNBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQU0sTUFBTSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUN2QyxJQUFJLE1BQU0sRUFBRTtZQUNSLElBQU0sR0FBRyxHQUFvQixNQUFNLENBQUMsWUFBWSxDQUFDO1lBQ2pELElBQU0sRUFBRSxHQUFHLEdBQUcsWUFBWSxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0gsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsYUFBYSxDQUFDO1NBQ3pDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNILHdDQUFRLEdBQVIsVUFBUyxPQUF3QjtRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Z0JBMUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsbUJBQW1CO29CQUM3QixTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztpQkFDM0Y7OzsrQkFXSSxLQUFLOztJQTZCViw0QkFBQztDQUFBLEFBM0NELElBMkNDO1NBbENZLHFCQUFxQjtBQW9DbEM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFNBQWlCO0lBQ25ELE9BQU8sVUFBQyxPQUF3QjtRQUM1QixJQUFJLElBQUksQ0FBQztRQUVULElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3RDO1FBRUQsSUFBTSxFQUFFLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sVUFBVSxzQkFBc0IsQ0FBQyxjQUF3QjtJQUUzRCxPQUFPLFVBQUMsT0FBd0I7O1FBRTVCLElBQUksSUFBSSxDQUFDO1FBRVQsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFFRCxJQUFJLEVBQUUsQ0FBQzs7WUFDUCxLQUF1QixJQUFBLG1CQUFBLGlCQUFBLGNBQWMsQ0FBQSw4Q0FBQSwwRUFBRTtnQkFBbEMsSUFBTSxRQUFRLDJCQUFBO2dCQUNmLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixJQUFJLEVBQUUsRUFBRTtvQkFDSixtQkFBbUI7b0JBQ25CLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLGNBQWMsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO2lCQUNuRDthQUNKOzs7Ozs7Ozs7UUFDRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRCxDQUFDLENBQUM7QUFDTixDQUFDO0FBRUQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxVQUFVLFVBQVUsQ0FBQyxPQUFlLEVBQUUsT0FBZTtJQUN2RCxPQUFPLFVBQUMsT0FBd0I7UUFDNUIsSUFBSSxJQUFJLENBQUM7UUFFVCx3QkFBd0I7UUFFeEIsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2YsSUFBSSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7UUFFRCxxQkFBcUI7UUFFckIsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUM3QyxDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBYnN0cmFjdENvbnRyb2wsIE5HX1ZBTElEQVRPUlMsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1trdWlFeGlzdGluZ05hbWVdJyxcbiAgICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTElEQVRPUlMsIHVzZUV4aXN0aW5nOiBFeGlzdGluZ05hbWVEaXJlY3RpdmUsIG11bHRpOiB0cnVlIH1dXG59KVxuLyoqXG4gKiBXaXRoIHRoZSBFeGlzdGluZ05hbWVEaXJlY3RpdmUgd2UgY291bGQgcHJldmVudCB0byB1c2UgYSBuYW1lIHdoaWNoIGhhcyB0byBiZSB1bmlxdWUgYnV0IGFscmVhZHkgZXhpc3RzXG4gKiBlLmcuIGdldCBhIGxpc3Qgb2YgYWxsIHByb2plY3Qgc2hvcnRuYW1lcywgdGhlbiB3ZSBjYW4gdXNlIHRoaXMgbGlzdCBhcyBleGlzdGluZyBuYW1lcztcbiAqIHlvdSBjYW4gYWxzbyB1c2UgaXQgZm9yIGEgbGlzdCBvZiBibGFja2xpc3RlZCAobm90IGFsbG93ZWQpIHdvcmRzXG4gKi9cbmV4cG9ydCBjbGFzcyBFeGlzdGluZ05hbWVEaXJlY3RpdmUgaW1wbGVtZW50cyBWYWxpZGF0b3JzLCBPbkNoYW5nZXMge1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIEBJbnB1dCgpIGV4aXN0aW5nTmFtZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIHByaXZhdGUgdmFsRm4gPSBWYWxpZGF0b3JzLm51bGxWYWxpZGF0b3I7XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICogQHBhcmFtIGNoYW5nZXNcbiAgICAgKi9cbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNoYW5nZSA9IGNoYW5nZXNbJ2V4aXN0aW5nTmFtZSddO1xuICAgICAgICBpZiAoY2hhbmdlKSB7XG4gICAgICAgICAgICBjb25zdCB2YWw6IHN0cmluZyB8IFJlZ0V4cCA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBjb25zdCByZSA9IHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCA/IHZhbCA6IG5ldyBSZWdFeHAodmFsKTtcbiAgICAgICAgICAgIHRoaXMudmFsRm4gPSBleGlzdGluZ05hbWVWYWxpZGF0b3IocmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YWxGbiA9IFZhbGlkYXRvcnMubnVsbFZhbGlkYXRvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKiBAcGFyYW0gY29udHJvbFxuICAgICAqL1xuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxGbihjb250cm9sKTtcbiAgICB9XG59XG5cbi8qKlxuICogVmFsaWRhdGlvbiBvZiBleGlzdGluZyBuYW1lIHZhbHVlLiBTdHJpbmcgbWV0aG9kIChvbmx5IG9uZSB2YWx1ZSk7XG4gKiBVc2UgaXQgaW4gYSBcImZvcm1idWlsZGVyXCIgZ3JvdXAgYXMgYSB2YWxpZGF0b3IgcHJvcGVydHlcbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gdmFsUmVnZXhwIE9ubHkgb25lIHJlZ3VsYXIgZXhwcmVzc2lvbiB2YWx1ZVxuICogQHJldHVybnMgVmFsaWRhdG9yRm5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4aXN0aW5nTmFtZVZhbGlkYXRvcih2YWxSZWdleHA6IFJlZ0V4cCk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuICAgICAgICBsZXQgbmFtZTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG5vID0gdmFsUmVnZXhwLnRlc3QobmFtZSk7XG4gICAgICAgIHJldHVybiBubyA/IHsgJ2V4aXN0aW5nTmFtZSc6IHsgbmFtZSB9IH0gOiBudWxsO1xuICAgIH07XG59XG5cbi8qKlxuICogVmFsaWRhdGlvbiBvZiBleGlzdGluZyBuYW1lIHZhbHVlcy4gQXJyYXkgbWV0aG9kIChsaXN0IG9mIHZhbHVlcylcbiAqIFVzZSBpdCBpbiBhIFwiZm9ybWJ1aWxkZXJcIiBncm91cCBhcyBhIHZhbGlkYXRvciBwcm9wZXJ0eVxuICpcbiAqXG4gKiBAcGFyYW0ge1JlZ0V4cH0gdmFsQXJyYXlSZWdleHAgTGlzdCBvZiByZWd1bGFyIGV4cHJlc3Npb24gdmFsdWVzXG4gKiBAcmV0dXJucyBWYWxpZGF0b3JGblxuICovXG5leHBvcnQgZnVuY3Rpb24gZXhpc3RpbmdOYW1lc1ZhbGlkYXRvcih2YWxBcnJheVJlZ2V4cDogW1JlZ0V4cF0pOiBWYWxpZGF0b3JGbiB7XG5cbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuXG4gICAgICAgIGxldCBuYW1lO1xuXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlKSB7XG4gICAgICAgICAgICBuYW1lID0gY29udHJvbC52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG5vO1xuICAgICAgICBmb3IgKGNvbnN0IGV4aXN0aW5nIG9mIHZhbEFycmF5UmVnZXhwKSB7XG4gICAgICAgICAgICBubyA9IGV4aXN0aW5nLnRlc3QobmFtZSk7XG4gICAgICAgICAgICBpZiAobm8pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhubyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5vID8geyAnZXhpc3RpbmdOYW1lJzogeyBuYW1lIH0gfSA6IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vID8geyAnZXhpc3RpbmdOYW1lJzogeyBuYW1lIH0gfSA6IG51bGw7XG4gICAgfTtcbn1cblxuLyoqXG4gKiBAaWdub3JlXG4gKlxuICogQHBhcmFtIHtSZWdFeHB9IHBhdHRlcm5cbiAqIEBwYXJhbSB7c3RyaW5nfSByZWdUeXBlXG4gKiBAcmV0dXJucyBWYWxpZGF0b3JGblxuICovXG5leHBvcnQgZnVuY3Rpb24gbm90QWxsb3dlZChwYXR0ZXJuOiBSZWdFeHAsIHJlZ1R5cGU6IHN0cmluZyk6IFZhbGlkYXRvckZuIHtcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPT4ge1xuICAgICAgICBsZXQgbmFtZTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWdUeXBlKTtcblxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSkge1xuICAgICAgICAgICAgbmFtZSA9IGNvbnRyb2wudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKG5hbWUpO1xuXG4gICAgICAgIGNvbnN0IG5vID0gcGF0dGVybi50ZXN0KG5hbWUpO1xuICAgICAgICByZXR1cm4gbm8gPyB7IHJlZ1R5cGU6IHsgbmFtZSB9IH0gOiBudWxsO1xuICAgIH07XG59XG4iXX0=