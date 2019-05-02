import { OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GuiOrder, IncomingService, KnoraConstants, OntologyInformation, ReadResource, ReadResourcesSequence, ResourceService } from '@knora/core';
export declare class ResourceViewComponent implements OnInit, OnChanges {
    protected _route: ActivatedRoute;
    protected _router: Router;
    protected _resourceService: ResourceService;
    protected _incomingService: IncomingService;
    /**
     * @param {string} [iri] Resource iri
     */
    iri?: string;
    sequence: ReadResourcesSequence;
    ontologyInfo: OntologyInformation;
    guiOrder: GuiOrder[];
    loading: boolean;
    error: any;
    KnoraConstants: typeof KnoraConstants;
    fileRepresentation: boolean;
    constructor(_route: ActivatedRoute, _router: Router, _resourceService: ResourceService, _incomingService: IncomingService);
    ngOnInit(): void;
    ngOnChanges(): void;
    /**
     * Get a read resource sequence with ontology information and incoming resources.
     *
     * @param {string} id Resource iri
     */
    getResource(id: string): void;
    /**
     * Collect all file representations (stillImage, movingImage, audio etc.) and annotations (region, sequence etc.)
     *
     * @param resource
     */
    collectFileRepresentationsAndFileAnnotations(resource: ReadResource): void;
    collectImagesAndRegionsForResource(resource: ReadResource): void;
    /**
     * Get incoming resources: incoming links, incoming regions, incoming still image representations.
     */
    requestIncomingResources(): void;
    /**
     * Get incoming regions for the resource.
     *
     * @param offset
     * @param callback
     */
    getIncomingRegions(offset: number, callback?: (numberOfResources: number) => void): void;
    /**
     * Get incoming links for a resource.
     *
     * @param offset
     * @param callback
     */
    getIncomingLinks(offset: number, callback?: (numberOfResources: number) => void): void;
    /**
     * Navigate to the incoming resource view.
     *
     * @param {string} id Incoming resource iri
     */
    openLink(id: string): void;
}
