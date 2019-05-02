import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OntologyInformation, ReadLinkValue } from '@knora/core';
var LinkValueComponent = /** @class */ (function () {
    function LinkValueComponent() {
        this.referredResourceClicked = new EventEmitter();
    }
    Object.defineProperty(LinkValueComponent.prototype, "ontologyInfo", {
        get: function () {
            return this._ontoInfo;
        },
        set: function (value) {
            this._ontoInfo = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LinkValueComponent.prototype, "valueObject", {
        get: function () {
            return this._linkValueObj;
        },
        set: function (value) {
            this._linkValueObj = value;
            if (this.valueObject.referredResource !== undefined) {
                this.referredResource = this.valueObject.referredResource.label;
            }
            else {
                this.referredResource = this.valueObject.referredResourceIri;
            }
        },
        enumerable: true,
        configurable: true
    });
    LinkValueComponent.prototype.refResClicked = function () {
        this.referredResourceClicked.emit(this._linkValueObj);
    };
    LinkValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-link-value',
                    template: "<a class=\"salsah-link\" (click)=\"refResClicked()\">{{referredResource}}</a>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}"]
                }] }
    ];
    /** @nocollapse */
    LinkValueComponent.ctorParameters = function () { return []; };
    LinkValueComponent.propDecorators = {
        ontologyInfo: [{ type: Input }],
        valueObject: [{ type: Input }],
        referredResourceClicked: [{ type: Output }]
    };
    return LinkValueComponent;
}());
export { LinkValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluay12YWx1ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3Byb3BlcnR5L2xpbmstdmFsdWUvbGluay12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMvRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsYUFBYSxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWpFO0lBc0NJO1FBTkEsNEJBQXVCLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUM7SUFNMUQsQ0FBQztJQS9CakIsc0JBQ0ksNENBQVk7YUFJaEI7WUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDMUIsQ0FBQzthQVBELFVBQ2lCLEtBQTBCO1lBQ3ZDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBTUQsc0JBQ0ksMkNBQVc7YUFVZjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBYkQsVUFDZ0IsS0FBb0I7WUFDaEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7WUFFM0IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixLQUFLLFNBQVMsRUFBRTtnQkFDakQsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDO2FBQ25FO2lCQUFNO2dCQUNILElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDO2FBQ2hFO1FBQ0wsQ0FBQzs7O09BQUE7SUFlRCwwQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDMUQsQ0FBQzs7Z0JBMUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQix5RkFBMEM7O2lCQUU3Qzs7Ozs7K0JBR0ksS0FBSzs4QkFTTCxLQUFLOzBDQWVMLE1BQU07O0lBWVgseUJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQXRDWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5qZWN0LCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPbnRvbG9neUluZm9ybWF0aW9uLCBSZWFkTGlua1ZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1saW5rLXZhbHVlJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGluay12YWx1ZS5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGluay12YWx1ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpbmtWYWx1ZUNvbXBvbmVudCB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBvbnRvbG9neUluZm8odmFsdWU6IE9udG9sb2d5SW5mb3JtYXRpb24pIHtcbiAgICAgICAgdGhpcy5fb250b0luZm8gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgb250b2xvZ3lJbmZvKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fb250b0luZm87XG4gICAgfVxuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRMaW5rVmFsdWUpIHtcbiAgICAgICAgdGhpcy5fbGlua1ZhbHVlT2JqID0gdmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWVPYmplY3QucmVmZXJyZWRSZXNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2UubGFiZWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnJlZmVycmVkUmVzb3VyY2UgPSB0aGlzLnZhbHVlT2JqZWN0LnJlZmVycmVkUmVzb3VyY2VJcmk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9saW5rVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcmVmZXJyZWRSZXNvdXJjZUNsaWNrZWQ6IEV2ZW50RW1pdHRlcjxSZWFkTGlua1ZhbHVlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIHByaXZhdGUgX2xpbmtWYWx1ZU9iajogUmVhZExpbmtWYWx1ZTtcbiAgICBwcml2YXRlIF9vbnRvSW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcbiAgICByZWZlcnJlZFJlc291cmNlOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gICAgcmVmUmVzQ2xpY2tlZCgpIHtcbiAgICAgICAgdGhpcy5yZWZlcnJlZFJlc291cmNlQ2xpY2tlZC5lbWl0KHRoaXMuX2xpbmtWYWx1ZU9iaik7XG4gICAgfVxufVxuIl19