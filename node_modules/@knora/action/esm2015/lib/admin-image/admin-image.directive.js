import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';
import { AdminImageConfig } from './admin-image.config';
/**
 * You can use the admin image module for user avatar together with gravatar.com and for project logos.
 *
 * The feature of this module ist the error handling: In case of a 404 error of the image source (img src) the module shows a default image-not-found image. Or a default user profile icon (type=user), or a default project icon (type=project).
 *
 */
export class AdminImageDirective {
    /**
     * @ignore
     */
    constructor(_renderer, _ele) {
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
    ngOnChanges() {
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
    }
}
AdminImageDirective.decorators = [
    { type: Directive, args: [{
                selector: '[kuiAdminImage]'
            },] }
];
/** @nocollapse */
AdminImageDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
AdminImageDirective.propDecorators = {
    image: [{ type: Input }],
    type: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRtaW4taW1hZ2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2FjdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9hZG1pbi1pbWFnZS9hZG1pbi1pbWFnZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVuRixPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHeEQ7Ozs7O0dBS0c7QUFJSCxNQUFNLE9BQU8sbUJBQW1CO0lBaUM1Qjs7T0FFRztJQUNILFlBQW9CLFNBQW9CLEVBQ3BCLElBQWdCO1FBRGhCLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQVZwQzs7V0FFRztRQUNILFlBQU8sR0FBVyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUM7SUFRbkQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVztRQUVQLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUV6QixRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFFZixLQUFLLE1BQU07Z0JBQ1AsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtvQkFDakQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7aUJBQzlDO3FCQUFNO29CQUNILElBQUksQ0FBQyxNQUFNLEdBQUcsaUNBQWlDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsYUFBYSxDQUFDO2lCQUM3RjtnQkFFRCxNQUFNO1lBRVYsS0FBSyxTQUFTO2dCQUVWLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBRWpELElBQUksQ0FBQyxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsY0FBYyxDQUFDO2lCQUNqRDtnQkFFRCxNQUFNO1lBRVY7Z0JBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFekcsQ0FBQzs7O1lBN0VKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2FBQzlCOzs7O1lBZGlELFNBQVM7WUFBdkMsVUFBVTs7O29CQXdCekIsS0FBSzttQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgT25DaGFuZ2VzLCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWQ1IH0gZnJvbSAndHMtbWQ1L2Rpc3QvbWQ1JztcbmltcG9ydCB7IEFkbWluSW1hZ2VDb25maWcgfSBmcm9tICcuL2FkbWluLWltYWdlLmNvbmZpZyc7XG5cblxuLyoqXG4gKiBZb3UgY2FuIHVzZSB0aGUgYWRtaW4gaW1hZ2UgbW9kdWxlIGZvciB1c2VyIGF2YXRhciB0b2dldGhlciB3aXRoIGdyYXZhdGFyLmNvbSBhbmQgZm9yIHByb2plY3QgbG9nb3MuXG4gKlxuICogVGhlIGZlYXR1cmUgb2YgdGhpcyBtb2R1bGUgaXN0IHRoZSBlcnJvciBoYW5kbGluZzogSW4gY2FzZSBvZiBhIDQwNCBlcnJvciBvZiB0aGUgaW1hZ2Ugc291cmNlIChpbWcgc3JjKSB0aGUgbW9kdWxlIHNob3dzIGEgZGVmYXVsdCBpbWFnZS1ub3QtZm91bmQgaW1hZ2UuIE9yIGEgZGVmYXVsdCB1c2VyIHByb2ZpbGUgaWNvbiAodHlwZT11c2VyKSwgb3IgYSBkZWZhdWx0IHByb2plY3QgaWNvbiAodHlwZT1wcm9qZWN0KS5cbiAqXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW2t1aUFkbWluSW1hZ2VdJ1xufSlcbmV4cG9ydCBjbGFzcyBBZG1pbkltYWdlRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBpbWFnZVxuICAgICAqXG4gICAgICogc291cmNlIG9mIHRoZSBpbWFnZTtcbiAgICAgKiAtIGluIGNhc2Ugb2YgdXNlciAoZ3IpYXZhdGFyIGl0J3MgdGhlIGUtbWFpbCBhZGRyZXNzLFxuICAgICAqIC0gaW4gY2FzZSBvZiBwcm9qZWN0IGxvZ28gaXQncyB0aGUgaW1hZ2UgdXJsXG4gICAgICovXG4gICAgQElucHV0KCkgaW1hZ2U6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAgICpcbiAgICAgKiB0eXBlIG9mIGltYWdlOyB5b3UgY2FuIHVzZSBpdCB3aXRoXG4gICAgICogLSBwcm9qZWN0XG4gICAgICogLSB1c2VyXG4gICAgICovXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xuXG5cbiAgICAvKipcbiAgICAgKiBAaWdub3JlXG4gICAgICovXG4gICAgc291cmNlOiBzdHJpbmc7XG5cblxuICAgIC8qKlxuICAgICAqIEBpZ25vcmVcbiAgICAgKi9cbiAgICBvbkVycm9yOiBzdHJpbmcgPSBBZG1pbkltYWdlQ29uZmlnLmRlZmF1bHROb3RGb3VuZDtcblxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfZWxlOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQGlnbm9yZVxuICAgICAqL1xuICAgIG5nT25DaGFuZ2VzKCkge1xuXG4gICAgICAgIHRoaXMuc291cmNlID0gdGhpcy5pbWFnZTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICd1c2VyJzpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbWFnZSA9PT0gbnVsbCB8fCB0aGlzLmltYWdlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3VyY2UgPSBBZG1pbkltYWdlQ29uZmlnLmRlZmF1bHRVc2VyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gJ2h0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci8nICsgTWQ1Lmhhc2hTdHIodGhpcy5pbWFnZSkgKyAnP2Q9bXAmcz0yNTYnO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlICdwcm9qZWN0JzpcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmltYWdlID09PSBudWxsIHx8IHRoaXMuaW1hZ2UgPT09IHVuZGVmaW5lZCkge1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc291cmNlID0gQWRtaW5JbWFnZUNvbmZpZy5kZWZhdWx0UHJvamVjdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnNvdXJjZSA9IHRoaXMuaW1hZ2U7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5fZWxlLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB0aGlzLnNvdXJjZSk7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLl9lbGUubmF0aXZlRWxlbWVudCwgJ29uRXJyb3InLCAndGhpcy5zcmM9XFwnJyArIHRoaXMub25FcnJvciArICdcXCcnKTtcblxuICAgIH1cblxufVxuIl19