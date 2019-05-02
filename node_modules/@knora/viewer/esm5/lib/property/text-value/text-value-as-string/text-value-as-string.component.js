import { Component, Input } from '@angular/core';
import { ReadTextValueAsString } from '@knora/core';
var TextValueAsStringComponent = /** @class */ (function () {
    function TextValueAsStringComponent() {
    }
    Object.defineProperty(TextValueAsStringComponent.prototype, "valueObject", {
        get: function () {
            return this._textStringValueObj;
        },
        set: function (value) {
            this._textStringValueObj = value;
        },
        enumerable: true,
        configurable: true
    });
    TextValueAsStringComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-text-value-as-string',
                    template: "<span>{{valueObject.str}}</span>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TextValueAsStringComponent.ctorParameters = function () { return []; };
    TextValueAsStringComponent.propDecorators = {
        valueObject: [{ type: Input }]
    };
    return TextValueAsStringComponent;
}());
export { TextValueAsStringComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL3ZpZXdlci8iLCJzb3VyY2VzIjpbImxpYi9wcm9wZXJ0eS90ZXh0LXZhbHVlL3RleHQtdmFsdWUtYXMtc3RyaW5nL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFcEQ7SUFrQkk7SUFDQSxDQUFDO0lBWkQsc0JBQ0ksbURBQVc7YUFJZjtZQUNJLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLENBQUM7YUFQRCxVQUNnQixLQUE0QjtZQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBOztnQkFWSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLDBCQUEwQjtvQkFDcEMsOENBQW9EOztpQkFFdkQ7Ozs7OzhCQUdJLEtBQUs7O0lBY1YsaUNBQUM7Q0FBQSxBQXJCRCxJQXFCQztTQWhCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSZWFkVGV4dFZhbHVlQXNTdHJpbmcgfSBmcm9tICdAa25vcmEvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLXRleHQtdmFsdWUtYXMtc3RyaW5nJyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGV4dC12YWx1ZS1hcy1zdHJpbmcuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWycuL3RleHQtdmFsdWUtYXMtc3RyaW5nLmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVGV4dFZhbHVlQXNTdHJpbmdDb21wb25lbnQge1xuXG4gICAgQElucHV0KClcbiAgICBzZXQgdmFsdWVPYmplY3QodmFsdWU6IFJlYWRUZXh0VmFsdWVBc1N0cmluZykge1xuICAgICAgICB0aGlzLl90ZXh0U3RyaW5nVmFsdWVPYmogPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWVPYmplY3QoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl90ZXh0U3RyaW5nVmFsdWVPYmo7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfdGV4dFN0cmluZ1ZhbHVlT2JqOiBSZWFkVGV4dFZhbHVlQXNTdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbn1cbiJdfQ==