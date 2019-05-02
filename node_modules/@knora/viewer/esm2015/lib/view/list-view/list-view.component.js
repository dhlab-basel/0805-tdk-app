import { Component, Input } from '@angular/core';
import { KnoraConstants, OntologyInformation } from '@knora/core';
import { Router } from '@angular/router';
export class ListViewComponent {
    constructor(_router) {
        this._router = _router;
        // @Input() isLoading: boolean;
        this.KnoraConstants = KnoraConstants;
    }
    /**
     * Navigate to the resource viewer when clicking on one resource of the search result list
     * @param {string} id
     */
    openResource(id) {
        const url = '/resource/' + encodeURIComponent(id);
        this._router.navigate([url]);
    }
}
ListViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-list-view',
                template: "<div>\n    <!-- <kui-progress-indicator *ngIf=\"isLoading\" [color]=\"'#D88958'\"></kui-progress-indicator> -->\n\n    <mat-list class=\"list-view lv-items\" *ngFor=\"let res of result; let i = index; let last = last;\">\n        <mat-list-item class=\"link\" (click)=\"openResource(res.id)\">\n            <mat-icon matListIcon>image_search</mat-icon>\n            <p matLine class=\"lv-res-label\">{{ontologyInfo?.getLabelForResourceClass(res.type)}}</p>\n            <h3 matLine class=\"lv-label\">{{res.label}}</h3>\n\n            <div matLine *ngFor=\"let prop of res.properties | kuiKey\">\n\n                <div matLine *ngFor=\"let val of prop.value | kuiKey\">\n\n                    <div [ngSwitch]=\"val.value.getClassName()\">\n                        <span *ngIf=\"ontologyInfo?.getLabelForProperty(prop.key) !== 'Text'\" class=\"lv-prop-label\">\n                            {{ontologyInfo?.getLabelForProperty(prop.key)}}:&nbsp;\n                        </span>\n\n                        <div class=\"lv-html-text\">\n\n                            <div *ngSwitchCase=\"KnoraConstants.ReadTextValueAsHtml\">\n                                <kui-text-value-as-html [valueObject]=\"val.value\" [ontologyInfo]=\"ontologyInfo\" [bindEvents]=\"false\"></kui-text-value-as-html>\n                            </div>\n\n                            <kui-date-value *ngSwitchCase=\"KnoraConstants.ReadDateValue\" [valueObject]=\"val.value\" [calendar]=\"true\" [era]=\"true\"></kui-date-value>\n\n                            <span *ngSwitchDefault=\"\">{{val.value.getContent()}}</span>\n\n                            <!-- slice the end of long texts -->\n                            <p class=\"lv-read-more\"></p>\n\n                        </div>\n\n                    </div>\n\n                </div>\n\n            </div>\n\n        </mat-list-item>\n\n        <mat-divider *ngIf=\"!last\"></mat-divider>\n\n    </mat-list>\n</div>\n",
                styles: [".mat-form-field{width:320px}.fill-remaining-space{flex:1 1 auto}.center{text-align:center}.link{cursor:pointer}.lv-html-text{max-height:60px;position:relative;overflow:hidden}.lv-read-more{position:absolute;bottom:0;left:0;width:100%;text-align:center;margin:0;padding:30px 0;border-radius:3px}.mat-list .mat-list-item .mat-line{white-space:normal!important}.list-view .mat-list-item{height:auto;min-height:40px;padding:8px 0}.lv-label{font-weight:700!important;font-size:16px!important;line-height:1.5}.lv-res-label{color:rgba(0,0,0,.54);font-size:14px!important}.lv-prop-label{font-style:italic}"]
            }] }
];
/** @nocollapse */
ListViewComponent.ctorParameters = () => [
    { type: Router }
];
ListViewComponent.propDecorators = {
    result: [{ type: Input }],
    ontologyInfo: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS92aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlldy9saXN0LXZpZXcvbGlzdC12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUNsRSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFPekMsTUFBTSxPQUFPLGlCQUFpQjtJQWdCMUIsWUFDWSxPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUwzQiwrQkFBK0I7UUFFL0IsbUJBQWMsR0FBRyxjQUFjLENBQUM7SUFJNUIsQ0FBQztJQUVMOzs7T0FHRztJQUNILFlBQVksQ0FBQyxFQUFVO1FBQ25CLE1BQU0sR0FBRyxHQUFXLFlBQVksR0FBRyxrQkFBa0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQzs7O1lBaENKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsZUFBZTtnQkFDekIscTZEQUF5Qzs7YUFFNUM7Ozs7WUFOUSxNQUFNOzs7cUJBWVYsS0FBSzsyQkFLTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtub3JhQ29uc3RhbnRzLCBPbnRvbG9neUluZm9ybWF0aW9uIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktbGlzdC12aWV3JyxcbiAgICB0ZW1wbGF0ZVVybDogJy4vbGlzdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9saXN0LXZpZXcuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Vmlld0NvbXBvbmVudCB7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gIHthbnl9IHJlc3VsdCBTZWFyY2ggcmVzdWx0IHJlY2VpdmVkIGZyb20gU2VhcmNoUmVzdWx0c0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIHJlc3VsdDogYW55O1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7T250b2xvZ3lJbmZvcm1hdGlvbn0gb250b2xvZ3lJbmZvIE9udG9sb2d5IGluZm9ybWF0aW9uIHJlY2VpdmVkIGZyb20gU2VhcmNoUmVzdWx0c0NvbXBvbmVudFxuICAgICAqL1xuICAgIEBJbnB1dCgpIG9udG9sb2d5SW5mbzogT250b2xvZ3lJbmZvcm1hdGlvbjtcblxuICAgIC8vIEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbjtcblxuICAgIEtub3JhQ29uc3RhbnRzID0gS25vcmFDb25zdGFudHM7XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXJcbiAgICApIHsgfVxuXG4gICAgLyoqXG4gICAgICogTmF2aWdhdGUgdG8gdGhlIHJlc291cmNlIHZpZXdlciB3aGVuIGNsaWNraW5nIG9uIG9uZSByZXNvdXJjZSBvZiB0aGUgc2VhcmNoIHJlc3VsdCBsaXN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGlkXG4gICAgICovXG4gICAgb3BlblJlc291cmNlKGlkOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgdXJsOiBzdHJpbmcgPSAnL3Jlc291cmNlLycgKyBlbmNvZGVVUklDb21wb25lbnQoaWQpO1xuICAgICAgICB0aGlzLl9yb3V0ZXIubmF2aWdhdGUoW3VybF0pO1xuICAgIH1cblxufVxuIl19