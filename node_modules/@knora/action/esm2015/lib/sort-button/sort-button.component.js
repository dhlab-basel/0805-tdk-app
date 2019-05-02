import { Component, EventEmitter, Input, Output } from '@angular/core';
/**
 * A component with a list of properties to sort a list by one of them.
 * It can be used together with the KuiSortBy pipe.
 */
export class SortButtonComponent {
    constructor() {
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
    sortKey(sortKey) {
        this.activeKey = sortKey;
    }
    ngOnInit() {
        if (this.position === 'right') {
            this.menuXPos = 'before';
        }
    }
    /**
     * @ignore
     *
     * @param {string} key
     */
    sortBy(key) {
        this.sortKeyChange.emit(key);
    }
}
SortButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'kui-sort-button',
                template: "<span class=\"sort-button\" [class]=\"position + ' ' + icon\">\n    <button mat-icon-button [matMenuTriggerFor]=\"sortSelection\">\n        <mat-icon>{{icon}}</mat-icon>\n    </button>\n    <mat-menu #sortSelection=\"matMenu\" [xPosition]=\"menuXPos\">\n        <button mat-menu-item\n                *ngFor=\"let item of sortProps\"\n                (click)=\"sortBy(item.key)\"\n                [class.active]=\"activeKey === item.key\">\n            {{item.label}}\n        </button>\n    </mat-menu>\n</span>\n",
                styles: [".active{background:rgba(128,128,128,.8)}.right.sort{float:right}.right.sort .mat-icon{-webkit-transform:scale(-1,1);transform:scale(-1,1)}"]
            }] }
];
/** @nocollapse */
SortButtonComponent.ctorParameters = () => [];
SortButtonComponent.propDecorators = {
    sortKeyChange: [{ type: Output }],
    sortProps: [{ type: Input }],
    position: [{ type: Input }],
    icon: [{ type: Input }],
    sortKey: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9zb3J0LWJ1dHRvbi9zb3J0LWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRTs7O0dBR0c7QUFNSCxNQUFNLE9BQU8sbUJBQW1CO0lBOEM1QjtRQTVDQTs7Ozs7O1dBTUc7UUFDTyxrQkFBYSxHQUF5QixJQUFJLFlBQVksRUFBVSxDQUFDO1FBRzNFLGFBQVEsR0FBVyxPQUFPLENBQUM7UUFXM0I7OztXQUdHO1FBQ00sYUFBUSxHQUFZLE1BQU0sQ0FBQztRQUdwQzs7Ozs7V0FLRztRQUNNLFNBQUksR0FBWSxNQUFNLENBQUM7SUFXaEMsQ0FBQztJQVREOzs7T0FHRztJQUNNLE9BQU8sQ0FBQyxPQUFlO1FBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFLRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLE9BQU8sRUFBRTtZQUMzQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUM1QjtJQUVMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLEdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7WUFwRUosU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDhnQkFBMkM7O2FBRTlDOzs7Ozs0QkFVSSxNQUFNO3dCQVlOLEtBQUs7dUJBTUwsS0FBSzttQkFTTCxLQUFLO3NCQU1MLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU29ydFByb3Age1xuICAgIGtleTogc3RyaW5nO1xuICAgIGxhYmVsOiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBjb21wb25lbnQgd2l0aCBhIGxpc3Qgb2YgcHJvcGVydGllcyB0byBzb3J0IGEgbGlzdCBieSBvbmUgb2YgdGhlbS5cbiAqIEl0IGNhbiBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggdGhlIEt1aVNvcnRCeSBwaXBlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2t1aS1zb3J0LWJ1dHRvbicsXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NvcnQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9zb3J0LWJ1dHRvbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNvcnRCdXR0b25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZSB7c3RyaW5nfSBzb3J0S2V5Q2hhbmdlXG4gICAgICogQGVtaXRzIFRPRE86IHRoaXMgd291bGQgYmUgdGhlIGNvcnJlY3Qgc3ludGF4IGZvciBPdXRwdXQgZXZlbnRFbWl0dGVyXG4gICAgICpcbiAgICAgKiBFdmVudEVtaXR0ZXIgd2hlbiBhIHVzZXIgc2VsZWN0ZWQgYSBzb3J0IHByb3BlcnR5O1xuICAgICAqIFRoaXMgaXMgdGhlIHNlbGVjdGVkIGtleVxuICAgICAqL1xuICAgIEBPdXRwdXQoKSBzb3J0S2V5Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xuXG5cbiAgICBtZW51WFBvczogc3RyaW5nID0gJ2FmdGVyJztcblxuICAgIGFjdGl2ZUtleTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtTb3J0UHJvcFtdfSBzb3J0UHJvcHNcbiAgICAgKiBBbiBhcnJheSBvZiBTb3J0UHJvcCBvYmplY3RzIGZvciB0aGUgc2VsZWN0aW9uIG1lbnU6XG4gICAgICogU29ydFByb3A6IHsga2V5OiBzdHJpbmcsIGxhYmVsOiBzdHJpbmcgfVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNvcnRQcm9wczogU29ydFByb3BbXTtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBbcG9zaXRpb249J2xlZnQnXVxuICAgICAqIE9wdGlvbmFsIHBvc2l0aW9uIG9mIHRoZSBzb3J0IG1lbnU6IHJpZ2h0IG9yIGxlZnRcbiAgICAgKi9cbiAgICBASW5wdXQoKSBwb3NpdGlvbj86IHN0cmluZyA9ICdsZWZ0JztcblxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBbaWNvbj0nc29ydCddXG4gICAgICogRGVmYXVsdCBpY29uIGlzIFwic29ydFwiIGZyb20gbWF0ZXJpYWwgZGVzaWduLlxuICAgICAqIEJ1dCB5b3UgY2FuIHJlcGxhY2UgaXQgd2l0aCBhbm90aGVyIG9uZVxuICAgICAqIGUuZy4gc29ydF9ieV9hbHBoYVxuICAgICAqL1xuICAgIEBJbnB1dCgpIGljb24/OiBzdHJpbmcgPSAnc29ydCc7XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc29ydEtleVxuICAgICAqIHNldCBhbmQgZ2V0ICh0d28td2F5IGRhdGEgYmluZGluZykgb2YgY3VycmVudCBzb3J0IGtleVxuICAgICAqL1xuICAgIEBJbnB1dCgpIHNvcnRLZXkoc29ydEtleTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlS2V5ID0gc29ydEtleTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgIHRoaXMubWVudVhQb3MgPSAnYmVmb3JlJztcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqL1xuICAgIHNvcnRCeShrZXk6IHN0cmluZykge1xuICAgICAgICB0aGlzLnNvcnRLZXlDaGFuZ2UuZW1pdChrZXkpO1xuICAgIH1cblxufVxuIl19