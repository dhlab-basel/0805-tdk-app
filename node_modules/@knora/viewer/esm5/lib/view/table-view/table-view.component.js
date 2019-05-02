import { Component, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
var TableViewComponent = /** @class */ (function () {
    function TableViewComponent() {
        this.KnoraConstants = KnoraConstants;
    }
    TableViewComponent.prototype.ngOnInit = function () {
    };
    TableViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-table-view',
                    template: "<p>\n  table-view works!\n</p>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    TableViewComponent.ctorParameters = function () { return []; };
    TableViewComponent.propDecorators = {
        result: [{ type: Input }],
        ontologyInfo: [{ type: Input }],
        isLoading: [{ type: Input }]
    };
    return TableViewComponent;
}());
export { TableViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFibGUtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Aa25vcmEvdmlld2VyLyIsInNvdXJjZXMiOlsibGliL3ZpZXcvdGFibGUtdmlldy90YWJsZS12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDO0lBYUU7UUFGQSxtQkFBYyxHQUFHLGNBQWMsQ0FBQztJQUVoQixDQUFDO0lBRWpCLHFDQUFRLEdBQVI7SUFDQSxDQUFDOztnQkFoQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLDRDQUEwQzs7aUJBRTNDOzs7Ozt5QkFHRSxLQUFLOytCQUNMLEtBQUs7NEJBQ0wsS0FBSzs7SUFTUix5QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbm9yYUNvbnN0YW50cyB9IGZyb20gJ0Brbm9yYS9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXRhYmxlLXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFibGUtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3RhYmxlLXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBUYWJsZVZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIEBJbnB1dCgpIHJlc3VsdDtcbiAgQElucHV0KCkgb250b2xvZ3lJbmZvO1xuICBASW5wdXQoKSBpc0xvYWRpbmc7XG5cbiAgS25vcmFDb25zdGFudHMgPSBLbm9yYUNvbnN0YW50cztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiJdfQ==