import { Component, Input } from '@angular/core';
import { KnoraConstants, OntologyInformation } from '@knora/core';
import { Router } from '@angular/router';
var ListViewComponent = /** @class */ (function () {
    function ListViewComponent(_router) {
        this._router = _router;
        // @Input() isLoading: boolean;
        this.KnoraConstants = KnoraConstants;
    }
    /**
     * Navigate to the resource viewer when clicking on one resource of the search result list
     * @param {string} id
     */
    ListViewComponent.prototype.openResource = function (id) {
        var url = '/resource/' + encodeURIComponent(id);
        this._router.navigate([url]);
    };
    ListViewComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-list-view',
                    template: "<div>\n    <!-- <kui-progress-indicator *ngIf=\"isLoading\" [color]=\"'#D88958'\"></kui-progress-indicator> -->\n\n    <mat-list class=\"list-view lv-items\" *ngFor=\"let res of result; let i = index; let last = last;\">\n        <mat-list-item class=\"link\" (click)=\"openResource(res.id)\">\n            <mat-icon matListIcon>image_search</mat-icon>\n            <p matLine class=\"lv-res-label\">{{ontologyInfo?.getLabelForResourceClass(res.type)}}</p>\n            <h3 matLine class=\"lv-label\">{{res.label}}</h3>\n\n            <div matLine *ngFor=\"let prop of res.properties | kuiKey\">\n\n                <div matLine *ngFor=\"let val of prop.value | kuiKey\">\n\n                    <div [ngSwitch]=\"val.value.getClassName()\">\n                        <span *ngIf=\"ontologyInfo?.getLabelForProperty(prop.key) !== 'Text'\" class=\"lv-prop-label\">\n                            {{ontologyInfo?.getLabelForProperty(prop.key)}}:&nbsp;\n                        </span>\n\n                        <div class=\"lv-html-text\">\n\n                            <div *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\">\n                                <kui-text-value-as-html [valueObject]=\"val.value\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"false\"></kui-text-value-as-html>\n                            </div>\n\n                            <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val.value\" [calendar]=\"true\" [era]=\"true\"></kui-date-value>\n\n                            <span *ngSwitchDefault=\"\">{{val.value.getContent()}}</span>\n\n                            <!-- slice the end of long texts -->\n                            <p class=\"lv-read-more\"></p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </mat-list-item>\n\n        <mat-divider *ngIf=\"!last\"></mat-divider>\n\n    </mat-list>\n</div>\n",
                    styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}.mat-list .mat-list-item .mat-line{white-space:normal!important}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-label{font-weight:700!important;font-size:16px!important;line-height:1.5}.lv-res-label{color:rgba(0,0,0,.54);font-size:14px!important}.lv-prop-label{font-style:italic}"]
                }] }
    ];
    /** @nocollapse */
    ListViewComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    ListViewComponent.propDecorators = {
        result: [{ type: Input }],
        ontologyInfo: [{ type: Input }]
    };
    return ListViewComponent;
}());
export { ListViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFekM7SUFxQkksMkJBQ1ksT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFMM0IsK0JBQStCO1FBRS9CLG1CQUFjLEdBQUcsY0FBYyxDQUFDO0lBSTVCLENBQUM7SUFFTDs7O09BR0c7SUFDSCx3Q0FBWSxHQUFaLFVBQWEsRUFBVTtRQUNuQixJQUFNLEdBQUcsR0FBVyxZQUFZLEdBQUcsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQWhDSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLHE2REFBeUM7O2lCQUU1Qzs7OztnQkFOUSxNQUFNOzs7eUJBWVYsS0FBSzsrQkFLTCxLQUFLOztJQW1CVix3QkFBQztDQUFBLEFBbENELElBa0NDO1NBN0JZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBLbm9yYUNvbnN0YW50cywgT250b2xvZ3lJbmZvcm1hdGlvbiB9IGZyb20gJ0Brbm9yYS9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAna3VpLWxpc3QtdmlldycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2xpc3Qtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbGlzdC12aWV3LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdFZpZXdDb21wb25lbnQge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7YW55fSByZXN1bHQgU2VhcmNoIHJlc3VsdCByZWNlaXZlZCBmcm9tIFNlYXJjaFJlc3VsdHNDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSByZXN1bHQ6IGFueTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge09udG9sb2d5SW5mb3JtYXRpb259IG9udG9sb2d5SW5mbyBPbnRvbG9neSBpbmZvcm1hdGlvbiByZWNlaXZlZCBmcm9tIFNlYXJjaFJlc3VsdHNDb21wb25lbnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBvbnRvbG9neUluZm86IE9udG9sb2d5SW5mb3JtYXRpb247XG5cbiAgICAvLyBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XG5cbiAgICBLbm9yYUNvbnN0YW50cyA9IEtub3JhQ29uc3RhbnRzO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3JvdXRlcjogUm91dGVyXG4gICAgKSB7IH1cblxuICAgIC8qKlxuICAgICAqIE5hdmlnYXRlIHRvIHRoZSByZXNvdXJjZSB2aWV3ZXIgd2hlbiBjbGlja2luZyBvbiBvbmUgcmVzb3VyY2Ugb2YgdGhlIHNlYXJjaCByZXN1bHQgbGlzdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpZFxuICAgICAqL1xuICAgIG9wZW5SZXNvdXJjZShpZDogc3RyaW5nKSB7XG4gICAgICAgIGNvbnN0IHVybDogc3RyaW5nID0gJy9yZXNvdXJjZS8nICsgZW5jb2RlVVJJQ29tcG9uZW50KGlkKTtcbiAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFt1cmxdKTtcbiAgICB9XG5cbn1cbiJdfQ==