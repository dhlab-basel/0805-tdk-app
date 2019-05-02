import { Component, Input } from '@angular/core';
import { ReadTextFileValue } from '@knora/core';
var TextfileValueComponent = /** @class */ (function () {
    function TextfileValueComponent() {
    }
    Object.defineProperty(TextfileValueComponent.prototype, "valueObject", {
        get: function () {
            return this._textfileValueObj;
        },
        set: function (value) {
            this._textfileValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    TextfileValueComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-textfile-value',
                    template: "<a target=\"_blank\" href=\"{{valueObject.textFileURL}}\">{{valueObject.textFilename}}</a>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextfileValueComponent.ctorParameters = function () { return []; };
    TextfileValueComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return TextfileValueComponent;
}());
export { TextfileValueComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGZpbGUtdmFsdWUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0ZmlsZS12YWx1ZS90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRWhEO0lBa0JFO0lBQWdCLENBQUM7SUFYakIsc0JBQ0ksK0NBQVc7YUFJZjtZQUNFLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hDLENBQUM7YUFQRCxVQUNnQixLQUF3QjtZQUN0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQ2pDLENBQUM7OztPQUFBOztnQkFWRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtvQkFDOUIsc0dBQThDOztpQkFFL0M7Ozs7OzhCQUdFLEtBQUs7O0lBYVIsNkJBQUM7Q0FBQSxBQXBCRCxJQW9CQztTQWZZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJlYWRUZXh0RmlsZVZhbHVlIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdrdWktdGV4dGZpbGUtdmFsdWUnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGV4dGZpbGUtdmFsdWUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi90ZXh0ZmlsZS12YWx1ZS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFRleHRmaWxlVmFsdWVDb21wb25lbnQge1xuXG4gIEBJbnB1dCgpXG4gIHNldCB2YWx1ZU9iamVjdCh2YWx1ZTogUmVhZFRleHRGaWxlVmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ZmlsZVZhbHVlT2JqID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHRmaWxlVmFsdWVPYmo7XG4gIH1cblxuICBwcml2YXRlIF90ZXh0ZmlsZVZhbHVlT2JqOiBSZWFkVGV4dEZpbGVWYWx1ZTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG59XG4iXX0=