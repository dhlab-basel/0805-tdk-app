import { Observable } from 'rxjs';
import { SearchService } from './search.service';
import { ReadResourcesSequence } from '../../declarations';
/**
 * Requests incoming information (regions, links, stillImageRepresentations) from Knora.
 */
export declare class IncomingService extends SearchService {
    /**
    * Returns all incoming regions for a particular resource.
    *
    * @param {string} resourceIRI the Iri of the resource whose Incoming regions should be returned.
    * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
    * @returns {Observable<any>}
    */
    getIncomingRegions(resourceIRI: string, offset: number): Observable<ReadResourcesSequence>;
    /**
     * Returns all the StillImageRepresentations for the given resource, if any.
     * StillImageRepresentations link to the given resource via knora-base:isPartOf.
     *
     * @param {string} resourceIri the Iri of the resource whose StillImageRepresentations should be returned.
     * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
     * @returns {Observable<any>}
     */
    getStillImageRepresentationsForCompoundResource(resourceIri: string, offset: number): Observable<ReadResourcesSequence>;
    /**
     * Returns all incoming links for the given resource Iri but incoming regions and still image representations.
     *
     * @param {string} resourceIri the Iri of the resource whose incoming links should be returned.
     * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
     * @returns {Observable<any>}
     */
    getIncomingLinksForResource(resourceIri: string, offset: number): Observable<ReadResourcesSequence>;
}
