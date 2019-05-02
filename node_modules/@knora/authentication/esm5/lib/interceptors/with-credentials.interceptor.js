import { Injectable } from '@angular/core';
import { SessionService } from '../session/session.service';
var WithCredentialsInterceptor = /** @class */ (function () {
    function WithCredentialsInterceptor(_session) {
        this._session = _session;
    }
    WithCredentialsInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        // console.log('WithCredentialsInterceptor - intercept - request: ', request);
        request = request.clone({
            withCredentials: true
        });
        return next.handle(request);
    };
    WithCredentialsInterceptor.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    WithCredentialsInterceptor.ctorParameters = function () { return [
        { type: SessionService }
    ]; };
    return WithCredentialsInterceptor;
}());
export { WithCredentialsInterceptor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9hdXRoZW50aWNhdGlvbi8iLCJzb3VyY2VzIjpbImxpYi9pbnRlcmNlcHRvcnMvd2l0aC1jcmVkZW50aWFscy5pbnRlcmNlcHRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RDtJQUdJLG9DQUFvQixRQUF3QjtRQUF4QixhQUFRLEdBQVIsUUFBUSxDQUFnQjtJQUM1QyxDQUFDO0lBRUQsOENBQVMsR0FBVCxVQUFVLE9BQXlCLEVBQUUsSUFBaUI7UUFDbEQsdURBQXVEO1FBRXZELDhFQUE4RTtRQUU5RSxPQUFPLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQztZQUNwQixlQUFlLEVBQUUsSUFBSTtTQUN4QixDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsQ0FBQzs7Z0JBaEJKLFVBQVU7Ozs7Z0JBRkYsY0FBYzs7SUFtQnZCLGlDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEV2ZW50LCBIdHRwSGFuZGxlciwgSHR0cEludGVyY2VwdG9yLCBIdHRwUmVxdWVzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNlc3Npb25TZXJ2aWNlIH0gZnJvbSAnLi4vc2Vzc2lvbi9zZXNzaW9uLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgaW1wbGVtZW50cyBIdHRwSW50ZXJjZXB0b3Ige1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2Vzc2lvbjogU2Vzc2lvblNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBpbnRlcmNlcHQocmVxdWVzdDogSHR0cFJlcXVlc3Q8YW55PiwgbmV4dDogSHR0cEhhbmRsZXIpOiBPYnNlcnZhYmxlPEh0dHBFdmVudDxhbnk+PiB7XG4gICAgICAgIC8vIGFkZCBhdXRob3JpemF0aW9uIGhlYWRlciB3aXRoIGp3dCB0b2tlbiBpZiBhdmFpbGFibGVcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygnV2l0aENyZWRlbnRpYWxzSW50ZXJjZXB0b3IgLSBpbnRlcmNlcHQgLSByZXF1ZXN0OiAnLCByZXF1ZXN0KTtcblxuICAgICAgICByZXF1ZXN0ID0gcmVxdWVzdC5jbG9uZSh7XG4gICAgICAgICAgICB3aXRoQ3JlZGVudGlhbHM6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5leHQuaGFuZGxlKHJlcXVlc3QpO1xuICAgIH1cbn1cbiJdfQ==