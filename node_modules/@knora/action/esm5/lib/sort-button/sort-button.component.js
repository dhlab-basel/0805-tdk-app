import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * A component with a list of properties to sort a list by one of them.
 * It can be used together with the KuiSortBy pipe.
 */
var SortButtonComponent = /** @class */ (function () {
    function SortButtonComponent() {
        /**
         * @ignore {string} sortKeyChange
         * @emits TODO: this would be the correct syntax for Output eventEmitter
         *
         * EventEmitter when a user selected a sort property;
         * This is the selected key
         */
        this.sortKeyChange = new EventEmitter();
        this.menuXPos = 'after';
        /**
         * @param {string} [position='left']
         * Optional position of the sort menu: right or left
         */
        this.position = 'left';
        /**
         * @param  {string} [icon='sort']
         * Default icon is "sort" from material design.
         * But you can replace it with another one
         * e.g. sort_by_alpha
         */
        this.icon = 'sort';
    }
    /**
     * @param {string} sortKey
     * set and get (two-way data binding) of current sort key
     */
    SortButtonComponent.prototype.sortKey = function (sortKey) {
        this.activeKey = sortKey;
    };
    SortButtonComponent.prototype.ngOnInit = function () {
        if (this.position === 'right') {
            this.menuXPos = 'before';
        }
    };
    /**
     * @ignore
     *
     * @param {string} key
     */
    SortButtonComponent.prototype.sortBy = function (key) {
        this.sortKeyChange.emit(key);
    };
    SortButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-sort-button',
                    template: "<span class=\"sort-button\" [class]=\"position + ' ' + icon\">\n    <button mat-icon-button [matMenuTriggerFor]=\"sortSelection\">\n        <mat-icon>{{icon}}</mat-icon>\n    </button>\n    <mat-menu #sortSelection=\"matMenu\" [xPosition]=\"menuXPos\">\n        <button mat-menu-item\n                *ngFor=\"let item of sortProps\"\n                (click)=\"sortBy(item.key)\"\n                [class.active]=\"activeKey === item.key\">\n            {{item.label}}\n        </button>\n    </mat-menu>\n</span>\n",
                    styles: [".active{background:rgba(128,128,128,.8)}.right.sort{float:right}.right.sort .mat-icon{-webkit-transform:scale(-1,1);transform:scale(-1,1)}"]
                }] }
    ];
    /** @nocollapse */
    SortButtonComponent.ctorParameters = function () { return []; };
    SortButtonComponent.propDecorators = {
        sortKeyChange: [{ type: Output }],
        sortProps: [{ type: Input }],
        position: [{ type: Input }],
        icon: [{ type: Input }],
        sortKey: [{ type: Input }]
    };
    return SortButtonComponent;
}());
export { SortButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRTs7O0dBR0c7QUFDSDtJQW1ESTtRQTVDQTs7Ozs7O1dBTUc7UUFDTyxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzNFLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFXM0I7OztXQUdHO1FBQ00sYUFBUSxHQUFZLE1BQU0sQ0FBQztRQUdwQzs7Ozs7V0FLRztRQUNNLFNBQUksR0FBWSxNQUFNLENBQUM7SUFXaEMsQ0FBQztJQVREOzs7T0FHRztJQUNNLHFDQUFPLEdBQWhCLFVBQWlCLE9BQWU7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDN0IsQ0FBQztJQUtELHNDQUFRLEdBQVI7UUFDSSxJQUFJLElBQUksQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO1lBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1NBQzVCO0lBRUwsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxvQ0FBTSxHQUFOLFVBQU8sR0FBVztRQUNkLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7O2dCQXBFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsOGdCQUEyQzs7aUJBRTlDOzs7OztnQ0FVSSxNQUFNOzRCQVlOLEtBQUs7MkJBTUwsS0FBSzt1QkFTTCxLQUFLOzBCQU1MLEtBQUs7O0lBdUJWLDBCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FqRVksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNvcnRQcm9wIHtcbiAgICBrZXk6IHN0cmluZztcbiAgICBsYWJlbDogc3RyaW5nO1xufVxuXG4vKipcbiAqIEEgY29tcG9uZW50IHdpdGggYSBsaXN0IG9mIHByb3BlcnRpZXMgdG8gc29ydCBhIGxpc3QgYnkgb25lIG9mIHRoZW0uXG4gKiBJdCBjYW4gYmUgdXNlZCB0b2dldGhlciB3aXRoIHRoZSBLdWlTb3J0QnkgcGlwZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdrdWktc29ydC1idXR0b24nLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9zb3J0LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vc29ydC1idXR0b24uY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTb3J0QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmUge3N0cmluZ30gc29ydEtleUNoYW5nZVxuICAgICAqIEBlbWl0cyBUT0RPOiB0aGlzIHdvdWxkIGJlIHRoZSBjb3JyZWN0IHN5bnRheCBmb3IgT3V0cHV0IGV2ZW50RW1pdHRlclxuICAgICAqXG4gICAgICogRXZlbnRFbWl0dGVyIHdoZW4gYSB1c2VyIHNlbGVjdGVkIGEgc29ydCBwcm9wZXJ0eTtcbiAgICAgKiBUaGlzIGlzIHRoZSBzZWxlY3RlZCBrZXlcbiAgICAgKi9cbiAgICBAT3V0cHV0KCkgc29ydEtleUNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuXG4gICAgbWVudVhQb3M6IHN0cmluZyA9ICdhZnRlcic7XG5cbiAgICBhY3RpdmVLZXk6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7U29ydFByb3BbXX0gc29ydFByb3BzXG4gICAgICogQW4gYXJyYXkgb2YgU29ydFByb3Agb2JqZWN0cyBmb3IgdGhlIHNlbGVjdGlvbiBtZW51OlxuICAgICAqIFNvcnRQcm9wOiB7IGtleTogc3RyaW5nLCBsYWJlbDogc3RyaW5nIH1cbiAgICAgKi9cbiAgICBASW5wdXQoKSBzb3J0UHJvcHM6IFNvcnRQcm9wW107XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW3Bvc2l0aW9uPSdsZWZ0J11cbiAgICAgKiBPcHRpb25hbCBwb3NpdGlvbiBvZiB0aGUgc29ydCBtZW51OiByaWdodCBvciBsZWZ0XG4gICAgICovXG4gICAgQElucHV0KCkgcG9zaXRpb24/OiBzdHJpbmcgPSAnbGVmdCc7XG5cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSAge3N0cmluZ30gW2ljb249J3NvcnQnXVxuICAgICAqIERlZmF1bHQgaWNvbiBpcyBcInNvcnRcIiBmcm9tIG1hdGVyaWFsIGRlc2lnbi5cbiAgICAgKiBCdXQgeW91IGNhbiByZXBsYWNlIGl0IHdpdGggYW5vdGhlciBvbmVcbiAgICAgKiBlLmcuIHNvcnRfYnlfYWxwaGFcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpY29uPzogc3RyaW5nID0gJ3NvcnQnO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNvcnRLZXlcbiAgICAgKiBzZXQgYW5kIGdldCAodHdvLXdheSBkYXRhIGJpbmRpbmcpIG9mIGN1cnJlbnQgc29ydCBrZXlcbiAgICAgKi9cbiAgICBASW5wdXQoKSBzb3J0S2V5KHNvcnRLZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLmFjdGl2ZUtleSA9IHNvcnRLZXk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVYUG9zID0gJ2JlZm9yZSc7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAgICAgKi9cbiAgICBzb3J0Qnkoa2V5OiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5zb3J0S2V5Q2hhbmdlLmVtaXQoa2V5KTtcbiAgICB9XG5cbn1cbiJdfQ==