import { Directive, ElementRef, Input } from '@angular/core';
import { KnoraConstants } from '@knora/core';
/**
 * This directive renders a GND/IAF or a VIAF identifier as a link to the respective resolver.
 */
export class GndDirective {
    constructor(el) {
        this.el = el;
    }
    set kuiGnd(value) {
        this._gnd = value;
    }
    get kuiGnd() {
        return this._gnd;
    }
    ngOnChanges() {
        if (this._gnd.length < 30) {
            if (this._gnd.indexOf(KnoraConstants.GNDPrefix) === 0) {
                // GND/IAF identifier
                this.el.nativeElement.innerHTML = `<a href="${KnoraConstants.GNDResolver + this._gnd.replace(KnoraConstants.GNDPrefix, '')}" target="_blank">${this._gnd}</a>`;
            }
            else if (this._gnd.indexOf(KnoraConstants.VIAFPrefix) === 0) {
                // VIAF identifier
                this.el.nativeElement.innerHTML = `<a href="${KnoraConstants.VIAFResolver + this._gnd.replace(KnoraConstants.VIAFPrefix, '')}" target="_blank">${this._gnd}</a>`;
            }
            else {
                // no identifier, leave unchanged
                this.el.nativeElement.innerHTML = this._gnd;
            }
        }
        else {
            // no identifier, leave unchanged
            this.el.nativeElement.innerHTML = this._gnd;
        }
    }
}
GndDirective.decorators = [
    { type: Directive, args: [{
                // tslint:disable-next-line:directive-selector
                selector: '[kuiGnd]'
            },] }
];
/** @nocollapse */
GndDirective.ctorParameters = () => [
    { type: ElementRef }
];
GndDirective.propDecorators = {
    kuiGnd: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ25kLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvZ25kL2duZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sYUFBYSxDQUFDO0FBRTdDOztHQUVHO0FBS0gsTUFBTSxPQUFPLFlBQVk7SUFlckIsWUFBb0IsRUFBYztRQUFkLE9BQUUsR0FBRixFQUFFLENBQVk7SUFFbEMsQ0FBQztJQWZELElBQ0ksTUFBTSxDQUFDLEtBQWE7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTTtRQUNOLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBVUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBRXZCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbkQscUJBQXFCO2dCQUNyQixJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsWUFBWSxjQUFjLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLHFCQUFxQixJQUFJLENBQUMsSUFBSSxNQUFNLENBQUM7YUFDbEs7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMzRCxrQkFBa0I7Z0JBQ2xCLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxZQUFZLGNBQWMsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMscUJBQXFCLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQzthQUNwSztpQkFBTTtnQkFDSCxpQ0FBaUM7Z0JBQ2pDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQy9DO1NBRUo7YUFBTTtZQUNILGlDQUFpQztZQUNqQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztTQUMvQztJQUVMLENBQUM7OztZQTFDSixTQUFTLFNBQUM7Z0JBQ1AsOENBQThDO2dCQUM5QyxRQUFRLEVBQUUsVUFBVTthQUN2Qjs7OztZQVRrQyxVQUFVOzs7cUJBWXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEtub3JhQ29uc3RhbnRzIH0gZnJvbSAnQGtub3JhL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgZGlyZWN0aXZlIHJlbmRlcnMgYSBHTkQvSUFGIG9yIGEgVklBRiBpZGVudGlmaWVyIGFzIGEgbGluayB0byB0aGUgcmVzcGVjdGl2ZSByZXNvbHZlci5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1zZWxlY3RvclxuICAgIHNlbGVjdG9yOiAnW2t1aUduZF0nXG59KVxuZXhwb3J0IGNsYXNzIEduZERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoKVxuICAgIHNldCBrdWlHbmQodmFsdWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLl9nbmQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBnZXQga3VpR25kKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZ25kO1xuICAgIH1cblxuXG4gICAgLy8gdGhlIEdORCBpZGVudGlmaWVyIHRvIGJlIHJlbmRlcmVkXG4gICAgcHJpdmF0ZSBfZ25kOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmKSB7XG5cbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX2duZC5sZW5ndGggPCAzMCkge1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fZ25kLmluZGV4T2YoS25vcmFDb25zdGFudHMuR05EUHJlZml4KSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIEdORC9JQUYgaWRlbnRpZmllclxuICAgICAgICAgICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5pbm5lckhUTUwgPSBgPGEgaHJlZj1cIiR7S25vcmFDb25zdGFudHMuR05EUmVzb2x2ZXIgKyB0aGlzLl9nbmQucmVwbGFjZShLbm9yYUNvbnN0YW50cy5HTkRQcmVmaXgsICcnKX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuX2duZH08L2E+YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fZ25kLmluZGV4T2YoS25vcmFDb25zdGFudHMuVklBRlByZWZpeCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyBWSUFGIGlkZW50aWZpZXJcbiAgICAgICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gYDxhIGhyZWY9XCIke0tub3JhQ29uc3RhbnRzLlZJQUZSZXNvbHZlciArIHRoaXMuX2duZC5yZXBsYWNlKEtub3JhQ29uc3RhbnRzLlZJQUZQcmVmaXgsICcnKX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke3RoaXMuX2duZH08L2E+YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gbm8gaWRlbnRpZmllciwgbGVhdmUgdW5jaGFuZ2VkXG4gICAgICAgICAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LmlubmVySFRNTCA9IHRoaXMuX2duZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm8gaWRlbnRpZmllciwgbGVhdmUgdW5jaGFuZ2VkXG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdGhpcy5fZ25kO1xuICAgICAgICB9XG5cbiAgICB9XG5cblxufVxuIl19