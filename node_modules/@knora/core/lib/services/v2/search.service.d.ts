import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiServiceResult, CountQueryResult, ReadResourcesSequence } from '../../declarations';
import { ApiService } from '../api.service';
import { OntologyCacheService } from './ontology-cache.service';
/**
 * Performs searches (fulltext or extended) and search count queries into Knora.
 */
export declare class SearchService extends ApiService {
    http: HttpClient;
    config: any;
    private _ontologyCacheService;
    constructor(http: HttpClient, config: any, _ontologyCacheService: OntologyCacheService);
    /**
     * Converts a JSON-LD object to a `ReadResorceSequence`.
     * To be passed as a function pointer (arrow notation required).
     *
     * @param {Object} resourceResponse
     * @returns {Observable<ReadResourcesSequence>}
     */
    private convertJSONLDToReadResourceSequence;
    /**
     * Performs a fulltext search.
     * TODO: mark as deprecated, use of `doFullTextSearchReadResourceSequence` recommended
     *
     * @param {string} searchTerm the term to search for.
     * @param {number} offset the offset to be used (for paging, first offset is 0).
     * @returns Observable<ApiServiceResult>
     */
    doFulltextSearch(searchTerm: string, offset?: number): Observable<ApiServiceResult>;
    /**
     * Performs a fulltext search and turns the result into a `ReadResourceSequence`.
     *
     * @param {string} searchTerm the term to search for.
     * @param {number} offset the offset to be used (for paging, first offset is 0).
     * @returns Observable<ApiServiceResult>
     */
    doFullTextSearchReadResourceSequence(searchTerm: string, offset?: number): Observable<ReadResourcesSequence>;
    /**
     * Performs a fulltext search count query.
     * TODO: mark as deprecated, use of `doFullTextSearchCountQueryCountQueryResult` recommended
     *
     * @param searchTerm the term to search for.
     * @returns Observable<ApiServiceResult>
     */
    doFulltextSearchCountQuery(searchTerm: string): Observable<ApiServiceResult>;
    /**
     * Performs a fulltext search count query and turns the result into a `CountQueryResult`.
     *
     * @param {string} searchTerm the term to search for.
     * @returns Observable<CountQueryResult>
     */
    doFullTextSearchCountQueryCountQueryResult(searchTerm: string): Observable<CountQueryResult>;
    /**
     * Performs an extended search.
     * TODO: mark as deprecated, use of `doExtendedSearchReadResourceSequence` recommended
     *
     * @param gravsearchQuery the Sparql query string to be sent to Knora.
     * @returns Observable<ApiServiceResult>
     */
    doExtendedSearch(gravsearchQuery: string): Observable<ApiServiceResult>;
    /**
     * Performs an extended search and turns the result into a `ReadResourceSequence`.
     *
     * @param gravsearchQuery the Sparql query string to be sent to Knora.
     * @returns Observable<ApiServiceResult>
     */
    doExtendedSearchReadResourceSequence(gravsearchQuery: string): Observable<ReadResourcesSequence>;
    /**
     * Performs an extended search count query.
     * TODO: mark as deprecated, use of `doExtendedSearchReadResourceSequence` recommended
     *
     * @param {string} gravsearchQuery the Sparql query string to be sent to Knora.
     * @returns Observable<ApiServiceResult>
     */
    doExtendedSearchCountQuery(gravsearchQuery: string): Observable<ApiServiceResult>;
    /**
     * Performs an extended search count query and turns the result into a `CountQueryResult`.
     *
     * @param gravsearchQuery the Sparql query string to be sent to Knora.
     * @returns Observable<ApiServiceResult>
     */
    doExtendedSearchCountQueryCountQueryResult(gravsearchQuery: string): Observable<CountQueryResult>;
    /**
     * Perform a search by a resource's rdfs:label.
     * TODO: mark as deprecated, use of `searchByLabelReadResourceSequence` recommended
     *
     * @param {string} searchTerm the term to search for.
     * @param {string} [resourceClassIRI] restrict search to given resource class.
     * @param {string} [projectIri] restrict search to given project.
     * @returns Observable<ApiServiceResult>
     */
    searchByLabel(searchTerm: string, resourceClassIRI?: string, projectIri?: string): Observable<ApiServiceResult>;
    /**
     * Perform a search by a resource's rdfs:label and turns the results in a `ReadResourceSequence`.
     *
     * @param {string} searchTerm the term to search for.
     * @param {string} [resourceClassIRI] restrict search to given resource class.
     * @param {string} [projectIri] restrict search to given project.
     * @returns Observable<ApiServiceResult>
     */
    searchByLabelReadResourceSequence(searchTerm: string, resourceClassIRI?: string, projectIri?: string): Observable<ReadResourcesSequence>;
}
