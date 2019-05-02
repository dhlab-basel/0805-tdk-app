import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RdfDataObject } from '../../declarations';
export declare class StoreService {
    private http;
    config: any;
    constructor(http: HttpClient, config: any);
    /**
       * Resets the content of the triplestore.
       *
       * @param rdfDataObjects
       * @returns Observable<string>
       */
    resetTriplestoreContent(rdfDataObjects: RdfDataObject[]): Observable<string>;
}
