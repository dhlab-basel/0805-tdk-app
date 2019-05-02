import { Component, Input } from '@angular/core';
import { KnoraConstants, OntologyInformation } from '@knora/core';
import { Router } from '@angular/router';
var GridViewComponent = /** @class */ (function () {
    function GridViewComponent(_router) {
        this._router = _router;
        // @Input() isLoading: boolean;
        this.KnoraConstants = KnoraConstants;
    }
    GridViewComponent.prototype.ngOnInit = function () {
    };
    /**
     * Navigate to the resource viewer when clicking on one resource of the search result grid
     * @param {string} id
     */
    GridViewComponent.prototype.openResource = function (id) {
        var url = '/resource/' + encodeURIComponent(id);
        this._router.navigate([url]);
    };
    GridViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-grid-view',
                    template: "<div>\n  <!-- <kui-progress-indicator *ngIf=\"isLoading\" [color]=\"'#D88958'\"></kui-progress-indicator> -->\n\n  <div fxLayout=\"row wrap\" fxLayout.xs=\"column\" fxLayoutGap=\"grid\">\n\n    <div fxFlex.sm=\"50\" fxFlex.md=\"33.3\" fxFlex.lg=\"20\" fxFlex.xl=\"16.6\" fxFlex=\"16.6\" *ngFor=\"let res of result\" class=\"gv-preview\">\n      <mat-card class=\"link\" (click)=\"openResource(res.id)\">\n\n        <mat-card-subtitle>{{ontologyInfo?.getLabelForResourceClass(res.type)}}</mat-card-subtitle>\n        <mat-card-title>{{res.label}}</mat-card-title>\n\n\n        <mat-card-content *ngFor=\"let prop of res.properties | kuiKey\">\n          <!-- description -->\n          <div *ngFor=\"let val of prop.value | kuiKey\">\n            <div [ngSwitch]=\"val.value.getClassName()\">\n              <div class=\"lv-html-text\" *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\">\n                <kui-text-value-as-html [valueObject]=\"val.value\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"false\"></kui-text-value-as-html>\n                <p class=\"lv-read-more\"></p>\n              </div>\n              <div>\n                <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val.value\" [calendar]=\"true\" [era]=\"true\"></kui-date-value>\n                <span *ngSwitchDefault=\"\">{{val.value.getContent()}}</span>\n              </div>\n              <br>\n              <span *ngIf=\"ontologyInfo?.getLabelForProperty(prop.key) !== 'Text'\">\n                {{ontologyInfo?.getLabelForProperty(prop.key)}}\n              </span>\n            </div>\n          </div>\n        </mat-card-content>\n\n      </mat-card>\n    </div>\n  </div>\n\n\n</div>",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}.gv-preview{margin:6px 0;padding:24px;word-wrap:break-word;border-radius:5px}.gv-preview .mat-card{height:160px;color:rgba(0,0,0,.81);overflow:hidden;padding-bottom:25px}.gv-preview .mat-card:hover{background:rgba(0,105,92,.39);color:#000}.gv-preview .mat-card:active{background:rgba(0,105,92,.61)}.gv-preview .mat-card .mat-card-title{font-size:12pt;font-weight:600}"]
                }] }
    ];
    /** @nocollapse */
    GridViewComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    GridViewComponent.propDecorators = {
        result: [{ type: Input }],
        ontologyInfo: [{ type: Input }]
    };
    return GridViewComponent;
}());
export { GridViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JpZC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlldy9ncmlkLXZpZXcvZ3JpZC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxNQUFNLGVBQWUsQ0FBQztBQUN6RCxPQUFPLEVBQUUsY0FBYyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sYUFBYSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6QztJQXFCRSwyQkFDVSxPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUx6QiwrQkFBK0I7UUFFL0IsbUJBQWMsR0FBRyxjQUFjLENBQUM7SUFJNUIsQ0FBQztJQUVMLG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsd0NBQVksR0FBWixVQUFhLEVBQVU7UUFDckIsSUFBTSxHQUFHLEdBQVcsWUFBWSxHQUFHLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMvQixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix3ckRBQXlDOztpQkFFMUM7Ozs7Z0JBTlEsTUFBTTs7O3lCQVlaLEtBQUs7K0JBS0wsS0FBSzs7SUFxQlIsd0JBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtub3JhQ29uc3RhbnRzLCBPbnRvbG9neUluZm9ybWF0aW9uIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLWdyaWQtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9ncmlkLXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9ncmlkLXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBHcmlkVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSAge2FueX0gcmVzdWx0IFNlYXJjaCByZXN1bHQgcmVjZWl2ZWQgZnJvbSBTZWFyY2hSZXN1bHRzQ29tcG9uZW50XG4gICAqL1xuICBASW5wdXQoKSByZXN1bHQ6IGFueTtcblxuICAvKipcbiAgICogQHBhcmFtICB7T250b2xvZ3lJbmZvcm1hdGlvbn0gb250b2xvZ3lJbmZvIE9udG9sb2d5IGluZm9ybWF0aW9uIHJlY2VpdmVkIGZyb20gU2VhcmNoUmVzdWx0c0NvbXBvbmVudFxuICAgKi9cbiAgQElucHV0KCkgb250b2xvZ3lJbmZvOiBPbnRvbG9neUluZm9ybWF0aW9uO1xuXG4gIC8vIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICBLbm9yYUNvbnN0YW50cyA9IEtub3JhQ29uc3RhbnRzO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICAvKipcbiAgICogTmF2aWdhdGUgdG8gdGhlIHJlc291cmNlIHZpZXdlciB3aGVuIGNsaWNraW5nIG9uIG9uZSByZXNvdXJjZSBvZiB0aGUgc2VhcmNoIHJlc3VsdCBncmlkXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpZCBcbiAgICovXG4gIG9wZW5SZXNvdXJjZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSAnL3Jlc291cmNlLycgKyBlbmNvZGVVUklDb21wb25lbnQoaWQpO1xuICAgIHRoaXMuX3JvdXRlci5uYXZpZ2F0ZShbdXJsXSk7XG4gIH1cbn1cbiJdfQ==