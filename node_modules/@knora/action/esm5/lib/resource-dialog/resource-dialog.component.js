import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef } from '@angular/material';
var ResourceDialogComponent = /** @class */ (function () {
    function ResourceDialogComponent(_dialogRef, data) {
        this._dialogRef = _dialogRef;
        this.data = data;
        this.fullSize = false;
    }
    /**
     * Creates a configuration object for `MatDialog`.
     *
     * @param resourceIri the Iri of the resource to be displayed in a dialog.
     * @param widthPct width of the dialog in percentage.
     * @param heightPct height of the dialog in percentage.
     * @returns
     */
    ResourceDialogComponent.createConfiguration = function (resourceIri, widthPct, heightPct) {
        if (widthPct === void 0) { widthPct = 60; }
        if (heightPct === void 0) { heightPct = 60; }
        var config = new MatDialogConfig();
        config.height = widthPct + "%";
        config.width = heightPct + "%";
        config.data = {
            iri: resourceIri
        };
        config.panelClass = 'resizable';
        return config;
    };
    ResourceDialogComponent.prototype.ngOnInit = function () {
        this.fullSize = (!this.data.fullSize);
        // start in full size
        if (this._dialogRef) {
            this.toggleFullSize();
        }
    };
    ResourceDialogComponent.prototype.toggleFullSize = function () {
        this.fullSize = (!this.fullSize);
        if (this.fullSize) {
            this._dialogRef.updateSize('100vw', '100vh');
            this._dialogRef.updatePosition();
        }
        else {
            this._dialogRef.updateSize('80vw', 'auto');
            this._dialogRef.updatePosition();
        }
    };
    ResourceDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'kui-resource-dialog',
                    template: "<div class=\"object-dialog\">\n  <!-- header with close (on the left hand side) and resize (on the right hand side) button\n      and with the title in the center -->\n  <div class=\"dialog-header\">\n    <span class=\"dialog-action-button\">\n      <button mat-icon-button class=\"resize-button\" (click)=\"toggleFullSize()\">\n        <mat-icon class=\"optimize-direction\" [innerHtml]=\"fullSize ? 'call_received' :'call_made'\"></mat-icon>\n      </button>\n    </span>\n    <span class=\"fill-remaining-space\"></span>\n    <span>\n      <h3 class=\"dialog-title\" mat-dialog-title>\n        Resource\n        <!--'salsahLabels.frameworkForListings.add.title' | translate -->\n      </h3>\n    </span>\n    <span class=\"fill-remaining-space\"></span>\n    <span class=\"dialog-action-button\">\n      <button mat-icon-button class=\"close-button\" (click)=\"_dialogRef.close()\">\n        <mat-icon>close</mat-icon>\n      </button>\n    </span>\n  </div>\n\n  <!-- <mat-dialog-content class=\"dialog-content\" [class.fullsize]=\"fullSize\">\n\n      <salsah-resource-object [iri]=\"data.iri\"></salsah-resource-object>\n\n  </mat-dialog-content> -->\n\n</div>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    ResourceDialogComponent.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ResourceDialogComponent;
}());
export { ResourceDialogComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UtZGlhbG9nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hY3Rpb24vIiwic291cmNlcyI6WyJsaWIvcmVzb3VyY2UtZGlhbG9nL3Jlc291cmNlLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFbkY7SUFpQ0UsaUNBQW1CLFVBQWlELEVBQ2xDLElBQVM7UUFEeEIsZUFBVSxHQUFWLFVBQVUsQ0FBdUM7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBSztRQTNCM0MsYUFBUSxHQUFZLEtBQUssQ0FBQztJQTRCMUIsQ0FBQztJQTFCRDs7Ozs7OztPQU9HO0lBQ0ksMkNBQW1CLEdBQTFCLFVBQTJCLFdBQW1CLEVBQUUsUUFBcUIsRUFBRSxTQUFzQjtRQUE3Qyx5QkFBQSxFQUFBLGFBQXFCO1FBQUUsMEJBQUEsRUFBQSxjQUFzQjtRQUUzRixJQUFNLE1BQU0sR0FBb0IsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUV0RCxNQUFNLENBQUMsTUFBTSxHQUFNLFFBQVEsTUFBRyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLEdBQU0sU0FBUyxNQUFHLENBQUM7UUFFL0IsTUFBTSxDQUFDLElBQUksR0FBRztZQUNaLEdBQUcsRUFBRSxXQUFXO1NBQ2pCLENBQUM7UUFFRixNQUFNLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQztRQUVoQyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBTUQsMENBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFdEMscUJBQXFCO1FBQ3JCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDdkI7SUFDSCxDQUFDO0lBRUQsZ0RBQWMsR0FBZDtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVqQyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDbEM7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ2xDO0lBQ0gsQ0FBQzs7Z0JBeERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUscUJBQXFCO29CQUMvQiwwcENBQStDOztpQkFFaEQ7Ozs7Z0JBTjBDLFlBQVk7Z0RBb0NsRCxNQUFNLFNBQUMsZUFBZTs7SUF3QjNCLDhCQUFDO0NBQUEsQUExREQsSUEwREM7U0FyRFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTUFUX0RJQUxPR19EQVRBLCBNYXREaWFsb2dDb25maWcsIE1hdERpYWxvZ1JlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAna3VpLXJlc291cmNlLWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9yZXNvdXJjZS1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZXNvdXJjZS1kaWFsb2cuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZURpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgZnVsbFNpemU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IGZvciBgTWF0RGlhbG9nYC5cbiAgICpcbiAgICogQHBhcmFtIHJlc291cmNlSXJpIHRoZSBJcmkgb2YgdGhlIHJlc291cmNlIHRvIGJlIGRpc3BsYXllZCBpbiBhIGRpYWxvZy5cbiAgICogQHBhcmFtIHdpZHRoUGN0IHdpZHRoIG9mIHRoZSBkaWFsb2cgaW4gcGVyY2VudGFnZS5cbiAgICogQHBhcmFtIGhlaWdodFBjdCBoZWlnaHQgb2YgdGhlIGRpYWxvZyBpbiBwZXJjZW50YWdlLlxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgc3RhdGljIGNyZWF0ZUNvbmZpZ3VyYXRpb24ocmVzb3VyY2VJcmk6IHN0cmluZywgd2lkdGhQY3Q6IG51bWJlciA9IDYwLCBoZWlnaHRQY3Q6IG51bWJlciA9IDYwKSB7XG5cbiAgICBjb25zdCBjb25maWc6IE1hdERpYWxvZ0NvbmZpZyA9IG5ldyBNYXREaWFsb2dDb25maWcoKTtcblxuICAgIGNvbmZpZy5oZWlnaHQgPSBgJHt3aWR0aFBjdH0lYDtcbiAgICBjb25maWcud2lkdGggPSBgJHtoZWlnaHRQY3R9JWA7XG5cbiAgICBjb25maWcuZGF0YSA9IHtcbiAgICAgIGlyaTogcmVzb3VyY2VJcmlcbiAgICB9O1xuXG4gICAgY29uZmlnLnBhbmVsQ2xhc3MgPSAncmVzaXphYmxlJztcblxuICAgIHJldHVybiBjb25maWc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2RpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFJlc291cmNlRGlhbG9nQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5mdWxsU2l6ZSA9ICghdGhpcy5kYXRhLmZ1bGxTaXplKTtcblxuICAgIC8vIHN0YXJ0IGluIGZ1bGwgc2l6ZVxuICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcbiAgICAgIHRoaXMudG9nZ2xlRnVsbFNpemUoKTtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVGdWxsU2l6ZSgpIHtcbiAgICB0aGlzLmZ1bGxTaXplID0gKCF0aGlzLmZ1bGxTaXplKTtcblxuICAgIGlmICh0aGlzLmZ1bGxTaXplKSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlU2l6ZSgnMTAwdncnLCAnMTAwdmgnKTtcbiAgICAgIHRoaXMuX2RpYWxvZ1JlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlU2l6ZSgnODB2dycsICdhdXRvJyk7XG4gICAgICB0aGlzLl9kaWFsb2dSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxufVxuIl19