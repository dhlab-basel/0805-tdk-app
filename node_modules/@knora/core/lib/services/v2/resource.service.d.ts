import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServiceError, ApiServiceResult, ReadResourcesSequence } from '../../declarations';
import { ApiService } from '../api.service';
import { OntologyCacheService } from './ontology-cache.service';
/**
 * Requests representation of resources from Knora.
 */
export declare class ResourceService extends ApiService {
    http: HttpClient;
    config: any;
    private _ontologyCacheService;
    constructor(http: HttpClient, config: any, _ontologyCacheService: OntologyCacheService);
    /**
     * Given the Iri, requests the representation of a resource.
     *
     * @param {string} iri Iri of the resource (not yet URL encoded).
     * @returns Observable<ApiServiceResult>
     */
    getResource(iri: any): Observable<ApiServiceResult | ApiServiceError>;
    /**
     * Given the Iri, requests the representation of a resource as a `ReadResourceSequence`.
     *
     * @param {string} iri Iri of the resource (not yet URL encoded).
     * @returns {Observable<ReadResourcesSequence>}
     */
    getReadResource(iri: string): Observable<ReadResourcesSequence | ApiServiceError>;
}
