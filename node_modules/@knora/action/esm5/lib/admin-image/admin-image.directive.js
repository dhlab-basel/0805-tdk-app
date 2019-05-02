import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AdminImageConfig } from './admin-image.config';
/**
 * You can use the admin image module for user avatar together with gravatar.com and for project logos.
 *
 * The feature of this module ist the error handling: In case of a 404 error of the image source (img src) the module shows a default image-not-found image. Or a default user profile icon (type=user), or a default project icon (type=project).
 *
 */
var AdminImageDirective = /** @class */ (function () {
    /**
     * @ignore
     */
    function AdminImageDirective(_renderer, _ele) {
        this._renderer = _renderer;
        this._ele = _ele;
        /**
         * @ignore
         */
        this.onError = AdminImageConfig.defaultNotFound;
    }
    /**
     * @ignore
     */
    AdminImageDirective.prototype.ngOnChanges = function () {
        this.source = this.image;
        switch (this.type) {
            case 'user':
                if (this.image === null || this.image === undefined) {
                    this.source = AdminImageConfig.defaultUser;
                }
                else {
                    this.source = 'http://www.gravatar.com/avatar/' + Md5.hashStr(this.image) + '?d=mp&s=256';
                }
                break;
            case 'project':
                if (this.image === null || this.image === undefined) {
                    this.source = AdminImageConfig.defaultProject;
                }
                break;
            default:
                this.source = this.image;
        }
        this._renderer.setAttribute(this._ele.nativeElement, 'src', this.source);
        this._renderer.setAttribute(this._ele.nativeElement, 'onError', 'this.src=\'' + this.onError + '\'');
    };
    AdminImageDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[kuiAdminImage]'
                },] }
    ];
    /** @nocollapse */
    AdminImageDirective.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    AdminImageDirective.propDecorators = {
        image: [{ type: Input }],
        type: [{ type: Input }]
    };
    return AdminImageDirective;
}());
export { AdminImageDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hZG1pbi1pbWFnZS9hZG1pbi1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7Ozs7O0dBS0c7QUFDSDtJQW9DSTs7T0FFRztJQUNILDZCQUFvQixTQUFvQixFQUNwQixJQUFnQjtRQURoQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFWcEM7O1dBRUc7UUFDSCxZQUFPLEdBQVcsZ0JBQWdCLENBQUMsZUFBZSxDQUFDO0lBUW5ELENBQUM7SUFFRDs7T0FFRztJQUNILHlDQUFXLEdBQVg7UUFFSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFekIsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBRWYsS0FBSyxNQUFNO2dCQUNQLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsV0FBVyxDQUFDO2lCQUM5QztxQkFBTTtvQkFDSCxJQUFJLENBQUMsTUFBTSxHQUFHLGlDQUFpQyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLGFBQWEsQ0FBQztpQkFDN0Y7Z0JBRUQsTUFBTTtZQUVWLEtBQUssU0FBUztnQkFFVixJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssU0FBUyxFQUFFO29CQUVqRCxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztpQkFDakQ7Z0JBRUQsTUFBTTtZQUVWO2dCQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUNoQztRQUVELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDekUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXpHLENBQUM7O2dCQTdFSixTQUFTLFNBQUM7b0JBQ1AsUUFBUSxFQUFFLGlCQUFpQjtpQkFDOUI7Ozs7Z0JBZGlELFNBQVM7Z0JBQXZDLFVBQVU7Ozt3QkF3QnpCLEtBQUs7dUJBU0wsS0FBSzs7SUEwRFYsMEJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQTVFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIElucHV0LCBPbkNoYW5nZXMsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZDUgfSBmcm9tICd0cy1tZDUvZGlzdC9tZDUnO1xuaW1wb3J0IHsgQWRtaW5JbWFnZUNvbmZpZyB9IGZyb20gJy4vYWRtaW4taW1hZ2UuY29uZmlnJztcblxuXG4vKipcbiAqIFlvdSBjYW4gdXNlIHRoZSBhZG1pbiBpbWFnZSBtb2R1bGUgZm9yIHVzZXIgYXZhdGFyIHRvZ2V0aGVyIHdpdGggZ3JhdmF0YXIuY29tIGFuZCBmb3IgcHJvamVjdCBsb2dvcy5cbiAqXG4gKiBUaGUgZmVhdHVyZSBvZiB0aGlzIG1vZHVsZSBpc3QgdGhlIGVycm9yIGhhbmRsaW5nOiBJbiBjYXNlIG9mIGEgNDA0IGVycm9yIG9mIHRoZSBpbWFnZSBzb3VyY2UgKGltZyBzcmMpIHRoZSBtb2R1bGUgc2hvd3MgYSBkZWZhdWx0IGltYWdlLW5vdC1mb3VuZCBpbWFnZS4gT3IgYSBkZWZhdWx0IHVzZXIgcHJvZmlsZSBpY29uICh0eXBlPXVzZXIpLCBvciBhIGRlZmF1bHQgcHJvamVjdCBpY29uICh0eXBlPXByb2plY3QpLlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdba3VpQWRtaW5JbWFnZV0nXG59KVxuZXhwb3J0IGNsYXNzIEFkbWluSW1hZ2VEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGltYWdlXG4gICAgICpcbiAgICAgKiBzb3VyY2Ugb2YgdGhlIGltYWdlO1xuICAgICAqIC0gaW4gY2FzZSBvZiB1c2VyIChncilhdmF0YXIgaXQncyB0aGUgZS1tYWlsIGFkZHJlc3MsXG4gICAgICogLSBpbiBjYXNlIG9mIHByb2plY3QgbG9nbyBpdCdzIHRoZSBpbWFnZSB1cmxcbiAgICAgKi9cbiAgICBASW5wdXQoKSBpbWFnZTogc3RyaW5nO1xuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKlxuICAgICAqIHR5cGUgb2YgaW1hZ2U7IHlvdSBjYW4gdXNlIGl0IHdpdGhcbiAgICAgKiAtIHByb2plY3RcbiAgICAgKiAtIHVzZXJcbiAgICAgKi9cbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XG5cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBzb3VyY2U6IHN0cmluZztcblxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIG9uRXJyb3I6IHN0cmluZyA9IEFkbWluSW1hZ2VDb25maWcuZGVmYXVsdE5vdEZvdW5kO1xuXG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9lbGU6IEVsZW1lbnRSZWYpIHtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgbmdPbkNoYW5nZXMoKSB7XG5cbiAgICAgICAgdGhpcy5zb3VyY2UgPSB0aGlzLmltYWdlO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ3VzZXInOlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlID09PSBudWxsIHx8IHRoaXMuaW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IEFkbWluSW1hZ2VDb25maWcuZGVmYXVsdFVzZXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSAnaHR0cDovL3d3dy5ncmF2YXRhci5jb20vYXZhdGFyLycgKyBNZDUuaGFzaFN0cih0aGlzLmltYWdlKSArICc/ZD1tcCZzPTI1Nic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgJ3Byb2plY3QnOlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2UgPT09IG51bGwgfHwgdGhpcy5pbWFnZSA9PT0gdW5kZWZpbmVkKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBBZG1pbkltYWdlQ29uZmlnLmRlZmF1bHRQcm9qZWN0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pbWFnZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGUubmF0aXZlRWxlbWVudCwgJ3NyYycsIHRoaXMuc291cmNlKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuX2VsZS5uYXRpdmVFbGVtZW50LCAnb25FcnJvcicsICd0aGlzLnNyYz1cXCcnICsgdGhpcy5vbkVycm9yICsgJ1xcJycpO1xuXG4gICAgfVxuXG59XG4iXX0=