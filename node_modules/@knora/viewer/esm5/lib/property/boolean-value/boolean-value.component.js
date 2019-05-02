import { Component, Input } from '@angular/core';
import { ReadBooleanValue } from '@knora/core';
var BooleanValueComponent = /** @class */ (function () {
    function BooleanValueComponent() {
    }
    Object.defineProperty(BooleanValueComponent.prototype, "valueObject", {
        get: function () {
            return this._booleanValueObj;
        },
        set: function (value) {
            this._booleanValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    BooleanValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-boolean-value',
                    template: "<mat-checkbox [checked]=\"valueObject.bool\" disabled=\"true\"></mat-checkbox>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}"]
                }] }
    ];
    /** @nocollapse */
    BooleanValueComponent.ctorParameters = function () { return []; };
    BooleanValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return BooleanValueComponent;
}());
export { BooleanValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9vbGVhbi12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2Jvb2xlYW4tdmFsdWUvYm9vbGVhbi12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRS9DO0lBa0JFO0lBQWdCLENBQUM7SUFYakIsc0JBQ0ksOENBQVc7YUFJZjtZQUNJLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQ2pDLENBQUM7YUFQRCxVQUNnQixLQUF1QjtZQUNuQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2xDLENBQUM7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtvQkFDN0IsNEZBQTZDOztpQkFFOUM7Ozs7OzhCQUdFLEtBQUs7O0lBYVIsNEJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRCb29sZWFuVmFsdWUgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2t1aS1ib29sZWFuLXZhbHVlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Jvb2xlYW4tdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ib29sZWFuLXZhbHVlLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQm9vbGVhblZhbHVlQ29tcG9uZW50IHtcblxuICBASW5wdXQoKVxuICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRCb29sZWFuVmFsdWUpIHtcbiAgICAgIHRoaXMuX2Jvb2xlYW5WYWx1ZU9iaiA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IHZhbHVlT2JqZWN0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2Jvb2xlYW5WYWx1ZU9iajtcbiAgfVxuXG4gIHByaXZhdGUgX2Jvb2xlYW5WYWx1ZU9iajogUmVhZEJvb2xlYW5WYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=