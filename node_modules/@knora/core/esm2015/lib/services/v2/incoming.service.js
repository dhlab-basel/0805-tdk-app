import { Injectable } from '@angular/core';
import { SearchService } from './search.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../core.module";
import * as i3 from "./ontology-cache.service";
/**
 * Requests incoming information (regions, links, stillImageRepresentations) from Knora.
 */
export class IncomingService extends SearchService {
    /**
    * Returns all incoming regions for a particular resource.
    *
    * @param {string} resourceIRI the Iri of the resource whose Incoming regions should be returned.
    * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
    * @returns {Observable<any>}
    */
    getIncomingRegions(resourceIRI, offset) {
        const sparqlQueryStr = `
PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>

CONSTRUCT {
?region knora-api:isMainResource true .

?region knora-api:hasGeometry ?geom .

?region knora-api:hasComment ?comment .

?region knora-api:hasColor ?color .
} WHERE {
?region a knora-api:Region .
?region a knora-api:Resource .

?region knora-api:isRegionOf <${resourceIRI}> .
knora-api:isRegionOf knora-api:objectType knora-api:Resource .

<${resourceIRI}> a knora-api:Resource .

?region knora-api:hasGeometry ?geom .
knora-api:hasGeometry knora-api:objectType knora-api:Geom .

?geom a knora-api:Geom .

?region knora-api:hasComment ?comment .
knora-api:hasComment knora-api:objectType xsd:string .

?comment a xsd:string .

?region knora-api:hasColor ?color .
knora-api:hasColor knora-api:objectType knora-api:Color .

?color a knora-api:Color .
} OFFSET ${offset}
`;
        // console.log('sparqlQueryStr ', sparqlQueryStr);
        return this.doExtendedSearchReadResourceSequence(sparqlQueryStr);
    }
    /**
     * Returns all the StillImageRepresentations for the given resource, if any.
     * StillImageRepresentations link to the given resource via knora-base:isPartOf.
     *
     * @param {string} resourceIri the Iri of the resource whose StillImageRepresentations should be returned.
     * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
     * @returns {Observable<any>}
     */
    getStillImageRepresentationsForCompoundResource(resourceIri, offset) {
        const sparqlQueryStr = `
PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>

CONSTRUCT {
?page knora-api:isMainResource true .

?page knora-api:seqnum ?seqnum .

?page knora-api:hasStillImageFile ?file .
} WHERE {

?page a knora-api:StillImageRepresentation .
?page a knora-api:Resource .

?page knora-api:isPartOf <${resourceIri}> .
knora-api:isPartOf knora-api:objectType knora-api:Resource .

<${resourceIri}> a knora-api:Resource .

?page knora-api:seqnum ?seqnum .
knora-api:seqnum knora-api:objectType xsd:integer .

?seqnum a xsd:integer .

?page knora-api:hasStillImageFile ?file .
knora-api:hasStillImageFile knora-api:objectType knora-api:File .

?file a knora-api:File .

} ORDER BY ?seqnum
OFFSET ${offset}
`;
        return this.doExtendedSearchReadResourceSequence(sparqlQueryStr);
    }
    /**
     * Returns all incoming links for the given resource Iri but incoming regions and still image representations.
     *
     * @param {string} resourceIri the Iri of the resource whose incoming links should be returned.
     * @param {number} offset the offset to be used for paging. 0 is the default and is used to get the first page of results.
     * @returns {Observable<any>}
     */
    getIncomingLinksForResource(resourceIri, offset) {
        const sparqlQueryStr = `
PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>

CONSTRUCT {
?incomingRes knora-api:isMainResource true .

?incomingRes ?incomingProp <${resourceIri}> .

} WHERE {

?incomingRes a knora-api:Resource .

?incomingRes ?incomingProp <${resourceIri}> .

<${resourceIri}> a knora-api:Resource .

?incomingProp knora-api:objectType knora-api:Resource .

knora-api:isRegionOf knora-api:objectType knora-api:Resource .
knora-api:isPartOf knora-api:objectType knora-api:Resource .

FILTER NOT EXISTS {
 ?incomingRes  knora-api:isRegionOf <${resourceIri}> .
}

FILTER NOT EXISTS {
 ?incomingRes  knora-api:isPartOf <${resourceIri}> .
}

} OFFSET ${offset}
`;
        return this.doExtendedSearchReadResourceSequence(sparqlQueryStr);
    }
}
IncomingService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
IncomingService.ngInjectableDef = i0.defineInjectable({ factory: function IncomingService_Factory() { return new IncomingService(i0.inject(i1.HttpClient), i0.inject(i2.KuiCoreConfigToken), i0.inject(i3.OntologyCacheService)); }, token: IncomingService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5jb21pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0Brbm9yYS9jb3JlLyIsInNvdXJjZXMiOlsibGliL3NlcnZpY2VzL3YyL2luY29taW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7O0FBR2pEOztHQUVHO0FBSUgsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTtJQUU5Qzs7Ozs7O01BTUU7SUFDRixrQkFBa0IsQ0FBQyxXQUFtQixFQUFFLE1BQWM7UUFDbEQsTUFBTSxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7OztnQ0FlQyxXQUFXOzs7R0FHeEMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7OztXQWdCSCxNQUFNO0NBQ2hCLENBQUM7UUFDTSxrREFBa0Q7UUFDbEQsT0FBTyxJQUFJLENBQUMsb0NBQW9DLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSCwrQ0FBK0MsQ0FBQyxXQUFtQixFQUFFLE1BQWM7UUFDL0UsTUFBTSxjQUFjLEdBQUc7Ozs7Ozs7Ozs7Ozs7OzRCQWNILFdBQVc7OztHQUdwQyxXQUFXOzs7Ozs7Ozs7Ozs7O1NBYUwsTUFBTTtDQUNkLENBQUM7UUFFTSxPQUFPLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUVyRSxDQUFDO0lBR0Q7Ozs7OztPQU1HO0lBQ0gsMkJBQTJCLENBQUMsV0FBbUIsRUFBRSxNQUFjO1FBQzNELE1BQU0sY0FBYyxHQUFHOzs7Ozs7OEJBTUQsV0FBVzs7Ozs7OzhCQU1YLFdBQVc7O0dBRXRDLFdBQVc7Ozs7Ozs7O3VDQVF5QixXQUFXOzs7O3FDQUliLFdBQVc7OztXQUdyQyxNQUFNO0NBQ2hCLENBQUM7UUFFTSxPQUFPLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUNyRSxDQUFDOzs7WUE3SUosVUFBVSxTQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU2VhcmNoU2VydmljZSB9IGZyb20gJy4vc2VhcmNoLnNlcnZpY2UnO1xuaW1wb3J0IHsgUmVhZFJlc291cmNlc1NlcXVlbmNlIH0gZnJvbSAnLi4vLi4vZGVjbGFyYXRpb25zJztcblxuLyoqXG4gKiBSZXF1ZXN0cyBpbmNvbWluZyBpbmZvcm1hdGlvbiAocmVnaW9ucywgbGlua3MsIHN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMpIGZyb20gS25vcmEuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEluY29taW5nU2VydmljZSBleHRlbmRzIFNlYXJjaFNlcnZpY2Uge1xuXG4gICAgLyoqXG4gICAgKiBSZXR1cm5zIGFsbCBpbmNvbWluZyByZWdpb25zIGZvciBhIHBhcnRpY3VsYXIgcmVzb3VyY2UuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSVJJIHRoZSBJcmkgb2YgdGhlIHJlc291cmNlIHdob3NlIEluY29taW5nIHJlZ2lvbnMgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCB0aGUgb2Zmc2V0IHRvIGJlIHVzZWQgZm9yIHBhZ2luZy4gMCBpcyB0aGUgZGVmYXVsdCBhbmQgaXMgdXNlZCB0byBnZXQgdGhlIGZpcnN0IHBhZ2Ugb2YgcmVzdWx0cy5cbiAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAgKi9cbiAgICBnZXRJbmNvbWluZ1JlZ2lvbnMocmVzb3VyY2VJUkk6IHN0cmluZywgb2Zmc2V0OiBudW1iZXIpOiBPYnNlcnZhYmxlPFJlYWRSZXNvdXJjZXNTZXF1ZW5jZT4ge1xuICAgICAgICBjb25zdCBzcGFycWxRdWVyeVN0ciA9IGBcblBSRUZJWCBrbm9yYS1hcGk6IDxodHRwOi8vYXBpLmtub3JhLm9yZy9vbnRvbG9neS9rbm9yYS1hcGkvc2ltcGxlL3YyIz5cblxuQ09OU1RSVUNUIHtcbj9yZWdpb24ga25vcmEtYXBpOmlzTWFpblJlc291cmNlIHRydWUgLlxuXG4/cmVnaW9uIGtub3JhLWFwaTpoYXNHZW9tZXRyeSA/Z2VvbSAuXG5cbj9yZWdpb24ga25vcmEtYXBpOmhhc0NvbW1lbnQgP2NvbW1lbnQgLlxuXG4/cmVnaW9uIGtub3JhLWFwaTpoYXNDb2xvciA/Y29sb3IgLlxufSBXSEVSRSB7XG4/cmVnaW9uIGEga25vcmEtYXBpOlJlZ2lvbiAuXG4/cmVnaW9uIGEga25vcmEtYXBpOlJlc291cmNlIC5cblxuP3JlZ2lvbiBrbm9yYS1hcGk6aXNSZWdpb25PZiA8JHtyZXNvdXJjZUlSSX0+IC5cbmtub3JhLWFwaTppc1JlZ2lvbk9mIGtub3JhLWFwaTpvYmplY3RUeXBlIGtub3JhLWFwaTpSZXNvdXJjZSAuXG5cbjwke3Jlc291cmNlSVJJfT4gYSBrbm9yYS1hcGk6UmVzb3VyY2UgLlxuXG4/cmVnaW9uIGtub3JhLWFwaTpoYXNHZW9tZXRyeSA/Z2VvbSAuXG5rbm9yYS1hcGk6aGFzR2VvbWV0cnkga25vcmEtYXBpOm9iamVjdFR5cGUga25vcmEtYXBpOkdlb20gLlxuXG4/Z2VvbSBhIGtub3JhLWFwaTpHZW9tIC5cblxuP3JlZ2lvbiBrbm9yYS1hcGk6aGFzQ29tbWVudCA/Y29tbWVudCAuXG5rbm9yYS1hcGk6aGFzQ29tbWVudCBrbm9yYS1hcGk6b2JqZWN0VHlwZSB4c2Q6c3RyaW5nIC5cblxuP2NvbW1lbnQgYSB4c2Q6c3RyaW5nIC5cblxuP3JlZ2lvbiBrbm9yYS1hcGk6aGFzQ29sb3IgP2NvbG9yIC5cbmtub3JhLWFwaTpoYXNDb2xvciBrbm9yYS1hcGk6b2JqZWN0VHlwZSBrbm9yYS1hcGk6Q29sb3IgLlxuXG4/Y29sb3IgYSBrbm9yYS1hcGk6Q29sb3IgLlxufSBPRkZTRVQgJHtvZmZzZXR9XG5gO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3BhcnFsUXVlcnlTdHIgJywgc3BhcnFsUXVlcnlTdHIpO1xuICAgICAgICByZXR1cm4gdGhpcy5kb0V4dGVuZGVkU2VhcmNoUmVhZFJlc291cmNlU2VxdWVuY2Uoc3BhcnFsUXVlcnlTdHIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIHRoZSBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGZvciB0aGUgZ2l2ZW4gcmVzb3VyY2UsIGlmIGFueS5cbiAgICAgKiBTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zIGxpbmsgdG8gdGhlIGdpdmVuIHJlc291cmNlIHZpYSBrbm9yYS1iYXNlOmlzUGFydE9mLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSXJpIHRoZSBJcmkgb2YgdGhlIHJlc291cmNlIHdob3NlIFN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbnMgc2hvdWxkIGJlIHJldHVybmVkLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBvZmZzZXQgdGhlIG9mZnNldCB0byBiZSB1c2VkIGZvciBwYWdpbmcuIDAgaXMgdGhlIGRlZmF1bHQgYW5kIGlzIHVzZWQgdG8gZ2V0IHRoZSBmaXJzdCBwYWdlIG9mIHJlc3VsdHMuXG4gICAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cbiAgICAgKi9cbiAgICBnZXRTdGlsbEltYWdlUmVwcmVzZW50YXRpb25zRm9yQ29tcG91bmRSZXNvdXJjZShyZXNvdXJjZUlyaTogc3RyaW5nLCBvZmZzZXQ6IG51bWJlcik6IE9ic2VydmFibGU8UmVhZFJlc291cmNlc1NlcXVlbmNlPiB7XG4gICAgICAgIGNvbnN0IHNwYXJxbFF1ZXJ5U3RyID0gYFxuUFJFRklYIGtub3JhLWFwaTogPGh0dHA6Ly9hcGkua25vcmEub3JnL29udG9sb2d5L2tub3JhLWFwaS9zaW1wbGUvdjIjPlxuXG5DT05TVFJVQ1Qge1xuP3BhZ2Uga25vcmEtYXBpOmlzTWFpblJlc291cmNlIHRydWUgLlxuXG4/cGFnZSBrbm9yYS1hcGk6c2VxbnVtID9zZXFudW0gLlxuXG4/cGFnZSBrbm9yYS1hcGk6aGFzU3RpbGxJbWFnZUZpbGUgP2ZpbGUgLlxufSBXSEVSRSB7XG5cbj9wYWdlIGEga25vcmEtYXBpOlN0aWxsSW1hZ2VSZXByZXNlbnRhdGlvbiAuXG4/cGFnZSBhIGtub3JhLWFwaTpSZXNvdXJjZSAuXG5cbj9wYWdlIGtub3JhLWFwaTppc1BhcnRPZiA8JHtyZXNvdXJjZUlyaX0+IC5cbmtub3JhLWFwaTppc1BhcnRPZiBrbm9yYS1hcGk6b2JqZWN0VHlwZSBrbm9yYS1hcGk6UmVzb3VyY2UgLlxuXG48JHtyZXNvdXJjZUlyaX0+IGEga25vcmEtYXBpOlJlc291cmNlIC5cblxuP3BhZ2Uga25vcmEtYXBpOnNlcW51bSA/c2VxbnVtIC5cbmtub3JhLWFwaTpzZXFudW0ga25vcmEtYXBpOm9iamVjdFR5cGUgeHNkOmludGVnZXIgLlxuXG4/c2VxbnVtIGEgeHNkOmludGVnZXIgLlxuXG4/cGFnZSBrbm9yYS1hcGk6aGFzU3RpbGxJbWFnZUZpbGUgP2ZpbGUgLlxua25vcmEtYXBpOmhhc1N0aWxsSW1hZ2VGaWxlIGtub3JhLWFwaTpvYmplY3RUeXBlIGtub3JhLWFwaTpGaWxlIC5cblxuP2ZpbGUgYSBrbm9yYS1hcGk6RmlsZSAuXG5cbn0gT1JERVIgQlkgP3NlcW51bVxuT0ZGU0VUICR7b2Zmc2V0fVxuYDtcblxuICAgICAgICByZXR1cm4gdGhpcy5kb0V4dGVuZGVkU2VhcmNoUmVhZFJlc291cmNlU2VxdWVuY2Uoc3BhcnFsUXVlcnlTdHIpO1xuXG4gICAgfVxuXG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBpbmNvbWluZyBsaW5rcyBmb3IgdGhlIGdpdmVuIHJlc291cmNlIElyaSBidXQgaW5jb21pbmcgcmVnaW9ucyBhbmQgc3RpbGwgaW1hZ2UgcmVwcmVzZW50YXRpb25zLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlSXJpIHRoZSBJcmkgb2YgdGhlIHJlc291cmNlIHdob3NlIGluY29taW5nIGxpbmtzIHNob3VsZCBiZSByZXR1cm5lZC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IHRoZSBvZmZzZXQgdG8gYmUgdXNlZCBmb3IgcGFnaW5nLiAwIGlzIHRoZSBkZWZhdWx0IGFuZCBpcyB1c2VkIHRvIGdldCB0aGUgZmlyc3QgcGFnZSBvZiByZXN1bHRzLlxuICAgICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XG4gICAgICovXG4gICAgZ2V0SW5jb21pbmdMaW5rc0ZvclJlc291cmNlKHJlc291cmNlSXJpOiBzdHJpbmcsIG9mZnNldDogbnVtYmVyKTogT2JzZXJ2YWJsZTxSZWFkUmVzb3VyY2VzU2VxdWVuY2U+IHtcbiAgICAgICAgY29uc3Qgc3BhcnFsUXVlcnlTdHIgPSBgXG5QUkVGSVgga25vcmEtYXBpOiA8aHR0cDovL2FwaS5rbm9yYS5vcmcvb250b2xvZ3kva25vcmEtYXBpL3NpbXBsZS92MiM+XG5cbkNPTlNUUlVDVCB7XG4/aW5jb21pbmdSZXMga25vcmEtYXBpOmlzTWFpblJlc291cmNlIHRydWUgLlxuXG4/aW5jb21pbmdSZXMgP2luY29taW5nUHJvcCA8JHtyZXNvdXJjZUlyaX0+IC5cblxufSBXSEVSRSB7XG5cbj9pbmNvbWluZ1JlcyBhIGtub3JhLWFwaTpSZXNvdXJjZSAuXG5cbj9pbmNvbWluZ1JlcyA/aW5jb21pbmdQcm9wIDwke3Jlc291cmNlSXJpfT4gLlxuXG48JHtyZXNvdXJjZUlyaX0+IGEga25vcmEtYXBpOlJlc291cmNlIC5cblxuP2luY29taW5nUHJvcCBrbm9yYS1hcGk6b2JqZWN0VHlwZSBrbm9yYS1hcGk6UmVzb3VyY2UgLlxuXG5rbm9yYS1hcGk6aXNSZWdpb25PZiBrbm9yYS1hcGk6b2JqZWN0VHlwZSBrbm9yYS1hcGk6UmVzb3VyY2UgLlxua25vcmEtYXBpOmlzUGFydE9mIGtub3JhLWFwaTpvYmplY3RUeXBlIGtub3JhLWFwaTpSZXNvdXJjZSAuXG5cbkZJTFRFUiBOT1QgRVhJU1RTIHtcbiA/aW5jb21pbmdSZXMgIGtub3JhLWFwaTppc1JlZ2lvbk9mIDwke3Jlc291cmNlSXJpfT4gLlxufVxuXG5GSUxURVIgTk9UIEVYSVNUUyB7XG4gP2luY29taW5nUmVzICBrbm9yYS1hcGk6aXNQYXJ0T2YgPCR7cmVzb3VyY2VJcml9PiAuXG59XG5cbn0gT0ZGU0VUICR7b2Zmc2V0fVxuYDtcblxuICAgICAgICByZXR1cm4gdGhpcy5kb0V4dGVuZGVkU2VhcmNoUmVhZFJlc291cmNlU2VxdWVuY2Uoc3BhcnFsUXVlcnlTdHIpO1xuICAgIH1cblxufVxuIl19