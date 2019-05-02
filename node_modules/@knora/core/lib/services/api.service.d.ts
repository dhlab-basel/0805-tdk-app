import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ApiServiceError } from '../declarations/api-service-error';
import { ApiServiceResult } from '../declarations/api-service-result';
export declare abstract class ApiService {
    http: HttpClient;
    config: any;
    loading: boolean;
    protected constructor(http: HttpClient, config: any);
    /**
     * GET
     *
     * @param {string} path the URL for the GET request.
     * @param {HttpParams} params the parameters for the GET request.
     * @returns Observable of any
     */
    httpGet(path: string, params?: HttpParams): Observable<any>;
    /**
     * Processes JSON-LD returned by Knora.
     * Expands Iris and creates an empty context object.
     *
     * @param {ApiServiceResult} resourceResponse
     */
    protected processJSONLD(resourceResponse: ApiServiceResult): Observable<object>;
    /**
     * POST
     *
     * @param {string} path
     * @param {any} body
     * @returns Observable of any
     */
    httpPost(path: string, body?: any): Observable<any>;
    /**
     * PUT
     *
     * @param {string} path
     * @param {any} body
     * @returns Observable of any
     */
    httpPut(path: string, body?: any): Observable<any>;
    /**
     * DELETE
     *
     * @param {string} path
     * @returns Observable of any
     */
    httpDelete(path: string): Observable<any>;
    /**
     * handle request error in case of server error
     *
     * @param {HttpErrorResponse} error
     * @returns Observable of ApiServiceError
     */
    protected handleRequestError(error: HttpErrorResponse): Observable<ApiServiceError>;
    /**
     * handle json error in case of type error in json response (json2typescript)
     *
     * @param {any} error
     * @returns Observable of ApiServiceError
     */
    protected handleJsonError(error: any): Observable<ApiServiceError>;
}
