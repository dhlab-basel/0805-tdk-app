import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { KuiCoreConfigToken } from '../../core.module';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core.module";
export class StoreService {
    constructor(http, config) {
        this.http = http;
        this.config = config;
    }
    /**
       * Resets the content of the triplestore.
       *
       * @param rdfDataObjects
       * @returns Observable<string>
       */
    resetTriplestoreContent(rdfDataObjects) {
        return this.http.post(this.config.api + '/admin/store/ResetTriplestoreContent', rdfDataObjects)
            .pipe(map((data) => {
            const result = data;
            // console.log('StoreService - resetTriplestoreContent: ', result);
            return result.message;
        }, (error) => {
            if (error.error instanceof Error) {
                console.log('StoreService - resetTriplestoreContent - Client-side error occurred.', error);
            }
            else {
                console.log('StoreService - resetTriplestoreContent - Server-side error occurred.', error);
            }
            throw error;
        }));
    }
}
StoreService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
StoreService.ctorParameters = () => [
    { type: HttpClient },
    { type: undefined, decorators: [{ type: Inject, args: [KuiCoreConfigToken,] }] }
];
StoreService.ngInjectableDef = i0.defineInjectable({ factory: function StoreService_Factory() { return new StoreService(i0.inject(i1.HttpClient), i0.inject(i2.KuiCoreConfigToken)); }, token: StoreService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RvcmUuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3YyL3N0b3JlLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBcUIsTUFBTSxzQkFBc0IsQ0FBQztBQUVyRSxPQUFPLEVBQWMsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7Ozs7QUFNdkQsTUFBTSxPQUFPLFlBQVk7SUFFdkIsWUFBb0IsSUFBZ0IsRUFBcUMsTUFBTTtRQUEzRCxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQXFDLFdBQU0sR0FBTixNQUFNLENBQUE7SUFBSSxDQUFDO0lBRXBGOzs7OztTQUtLO0lBQ0wsdUJBQXVCLENBQUMsY0FBK0I7UUFFckQsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBa0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsc0NBQXNDLEVBQUUsY0FBYyxDQUFDO2FBQzdILElBQUksQ0FDSCxHQUFHLENBQ0QsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNQLE1BQU0sTUFBTSxHQUFvQyxJQUFJLENBQUM7WUFDckQsbUVBQW1FO1lBQ25FLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDLEVBQ0QsQ0FBQyxLQUF3QixFQUFFLEVBQUU7WUFDM0IsSUFBSSxLQUFLLENBQUMsS0FBSyxZQUFZLEtBQUssRUFBRTtnQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzRUFBc0UsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM1RjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLHNFQUFzRSxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQzVGO1lBQ0QsTUFBTSxLQUFLLENBQUM7UUFDZCxDQUFDLENBQ0YsQ0FBQyxDQUFDO0lBRVQsQ0FBQzs7O1lBakNGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVRRLFVBQVU7NENBWXNCLE1BQU0sU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBFcnJvclJlc3BvbnNlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgS3VpQ29yZUNvbmZpZywgUmRmRGF0YU9iamVjdCwgUmVzZXRUcmlwbGVzdG9yZUNvbnRlbnRSZXNwb25zZSB9IGZyb20gJy4uLy4uL2RlY2xhcmF0aW9ucyc7XG5pbXBvcnQgeyBLdWlDb3JlQ29uZmlnVG9rZW4gfSBmcm9tICcuLi8uLi9jb3JlLm1vZHVsZSc7XG5cblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgU3RvcmVTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsIEBJbmplY3QoS3VpQ29yZUNvbmZpZ1Rva2VuKSBwdWJsaWMgY29uZmlnKSB7IH1cblxuICAvKipcbiAgICAgKiBSZXNldHMgdGhlIGNvbnRlbnQgb2YgdGhlIHRyaXBsZXN0b3JlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHJkZkRhdGFPYmplY3RzXG4gICAgICogQHJldHVybnMgT2JzZXJ2YWJsZTxzdHJpbmc+XG4gICAgICovXG4gIHJlc2V0VHJpcGxlc3RvcmVDb250ZW50KHJkZkRhdGFPYmplY3RzOiBSZGZEYXRhT2JqZWN0W10pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0PFJlc2V0VHJpcGxlc3RvcmVDb250ZW50UmVzcG9uc2U+KHRoaXMuY29uZmlnLmFwaSArICcvYWRtaW4vc3RvcmUvUmVzZXRUcmlwbGVzdG9yZUNvbnRlbnQnLCByZGZEYXRhT2JqZWN0cylcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoXG4gICAgICAgICAgKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogUmVzZXRUcmlwbGVzdG9yZUNvbnRlbnRSZXNwb25zZSA9IGRhdGE7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnU3RvcmVTZXJ2aWNlIC0gcmVzZXRUcmlwbGVzdG9yZUNvbnRlbnQ6ICcsIHJlc3VsdCk7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Lm1lc3NhZ2U7XG4gICAgICAgICAgfSxcbiAgICAgICAgICAoZXJyb3I6IEh0dHBFcnJvclJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IuZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RvcmVTZXJ2aWNlIC0gcmVzZXRUcmlwbGVzdG9yZUNvbnRlbnQgLSBDbGllbnQtc2lkZSBlcnJvciBvY2N1cnJlZC4nLCBlcnJvcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnU3RvcmVTZXJ2aWNlIC0gcmVzZXRUcmlwbGVzdG9yZUNvbnRlbnQgLSBTZXJ2ZXItc2lkZSBlcnJvciBvY2N1cnJlZC4nLCBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICB9XG4gICAgICAgICkpO1xuXG4gIH1cbn1cbiJdfQ==