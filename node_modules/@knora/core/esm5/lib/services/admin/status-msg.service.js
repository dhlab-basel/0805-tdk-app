import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { KuiCoreConfigToken } from '../../core.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core.module";
var StatusMsgService = /** @class */ (function () {
    function StatusMsgService(_http, config) {
        this._http = _http;
        this.config = config;
    }
    /**
    * this method get the status messages from the statusMsg.json file
    * which are defined here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
    * and here: http://www.w3schools.com/tags/ref_httpmessages.asp
    *
    */
    StatusMsgService.prototype.getStatusMsg = function () {
        return this._http.get(this.config.app + '/assets/i18n/statusMsg.json')
            .pipe(map(function (res) {
            return res;
        }, function (err) {
            console.error(err);
        }));
    };
    StatusMsgService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    StatusMsgService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: undefined, decorators: [{ type: Inject, args: [KuiCoreConfigToken,] }] }
    ]; };
    StatusMsgService.ngInjectableDef = i0.defineInjectable({ factory: function StatusMsgService_Factory() { return new StatusMsgService(i0.inject(i1.HttpClient), i0.inject(i2.KuiCoreConfigToken)); }, token: StatusMsgService, providedIn: "root" });
    return StatusMsgService;
}());
export { StatusMsgService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdHVzLW1zZy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGtub3JhL2NvcmUvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvYWRtaW4vc3RhdHVzLW1zZy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUdsRCxPQUFPLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFckMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFFdkQ7SUFLRSwwQkFBb0IsS0FBaUIsRUFDQSxNQUFNO1FBRHZCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDQSxXQUFNLEdBQU4sTUFBTSxDQUFBO0lBQzNDLENBQUM7SUFFRDs7Ozs7TUFLRTtJQUNGLHVDQUFZLEdBQVo7UUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLDZCQUE2QixDQUFDO2FBQ25FLElBQUksQ0FBQyxHQUFHLENBQ1AsVUFBQyxHQUFRO1lBQ1AsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDLEVBQ0QsVUFBQSxHQUFHO1lBQ0QsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQ0YsQ0FDQSxDQUFDO0lBRU4sQ0FBQzs7Z0JBNUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBVFEsVUFBVTtnREFhZCxNQUFNLFNBQUMsa0JBQWtCOzs7MkJBZDlCO0NBcUNDLEFBN0JELElBNkJDO1NBMUJZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgS3VpQ29yZUNvbmZpZyB9IGZyb20gJy4uLy4uL2RlY2xhcmF0aW9ucyc7XG5pbXBvcnQgeyBLdWlDb3JlQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi9jb3JlLm1vZHVsZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFN0YXR1c01zZ1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgQEluamVjdChLdWlDb3JlQ29uZmlnVG9rZW4pIHB1YmxpYyBjb25maWcpIHtcbiAgfVxuXG4gIC8qKlxuICAqIHRoaXMgbWV0aG9kIGdldCB0aGUgc3RhdHVzIG1lc3NhZ2VzIGZyb20gdGhlIHN0YXR1c01zZy5qc29uIGZpbGVcbiAgKiB3aGljaCBhcmUgZGVmaW5lZCBoZXJlOiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MaXN0X29mX0hUVFBfc3RhdHVzX2NvZGVzXG4gICogYW5kIGhlcmU6IGh0dHA6Ly93d3cudzNzY2hvb2xzLmNvbS90YWdzL3JlZl9odHRwbWVzc2FnZXMuYXNwXG4gICpcbiAgKi9cbiAgZ2V0U3RhdHVzTXNnKCk6IE9ic2VydmFibGU8YW55PiB7XG5cbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQodGhpcy5jb25maWcuYXBwICsgJy9hc3NldHMvaTE4bi9zdGF0dXNNc2cuanNvbicpXG4gICAgICAucGlwZShtYXAoXG4gICAgICAgIChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sXG4gICAgICAgIGVyciA9PiB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICB9XG4gICAgICApXG4gICAgICApO1xuXG4gIH1cbn1cbiJdfQ==