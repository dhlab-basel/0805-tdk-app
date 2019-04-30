import { Component, OnInit } from '@angular/core';
import { ReadResourcesSequence, OntologyInformation, KnoraConstants, ResourceService, ApiServiceError, IncomingService, ReadResource, ReadLinkValue } from '@knora/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
    selector: 'mls-resource',
    templateUrl: './resource.component.html',
    styleUrls: ['./resource.component.scss']
})
export class ResourceComponent implements OnInit {

    iri: string;
    resource: ReadResource;
    ontologyInfo: OntologyInformation;
    loading = true;
    errorMessage: any;
    KnoraConstants = KnoraConstants;

    constructor(protected _route: ActivatedRoute,
                protected _router: Router,
                protected _resourceService: ResourceService,
                protected _incomingService: IncomingService,
                public location: Location
    ) {
        const routeParams = this._route.snapshot.params;
        this.iri = routeParams.id;
    }

    ngOnInit() {
        this.loading = true;

        this._route.paramMap.subscribe((params: ParamMap) => {
            this.getResource(params.get('id'));
        });
    }

    /**
     * Get a resource by id with the ontology information and the incoming links
     *
     * @param id resource id - get from the url parameters
     */
    getResource(id: string) {
        this._resourceService.getReadResource(decodeURIComponent(id)).subscribe(
            (result: ReadResourcesSequence) => {

                // make sure that exactly one resource is returned
                if (result.resources.length === 1) {

                    // initialize ontology information
                    this.ontologyInfo = result.ontologyInformation;
                    // console.log('ontologyInfo: ', this.ontologyInfo);

                    // initialize resource
                    this.resource = result.resources[0];
                    // console.log('resource: ', this.resource);

                    this.getIncomingLinks(0);

                } else {
                    // exactly one resource was expected, but resourceSeq.resources.length != 1
                    this.errorMessage = `Exactly one resource was expected, but ${result.resources.length} resource(s) given.`;

                }

                // wait until the resource is ready
                setTimeout(() => {
                    this.loading = false;
                }, 3000);
            },
            (error: ApiServiceError) => {
                console.error(error);
            }
        );
    }

    /**
     * Get resources pointing to [[this.resource]] with properties other than knora-api:isPartOf and knora-api:isRegionOf.
     *
     * @param offset the offset to be used (needed for paging). First request uses an offset of 0.
     * It takes the number of images returned as an argument.
     */
    private getIncomingLinks(offset: number): void {

        this._incomingService.getIncomingLinksForResource(this.resource.id, offset).subscribe(
            (incomingResources: ReadResourcesSequence) => {

                // update ontology information
                this.ontologyInfo.updateOntologyInformation(incomingResources.ontologyInformation);

                // Append elements incomingResources to this.resource.incomingLinks
                Array.prototype.push.apply(this.resource.incomingLinks, incomingResources.resources);
            },
            (error: any) => {
                this.errorMessage = <any>error;
                this.loading = false;
            }
        );
    }

    /**
     * Display incoming links as clickable links
     *
     * @param resIri IRI of the resource
     */
    showIncomingRes(resIri: string) {

        this._router.navigateByUrl('resource/' + encodeURIComponent(resIri));

    }

    /**
     * The user clicked on an internal link.
     *
     * @param linkVal the value representing the referred resource.
     */
    openLink(linkVal: ReadLinkValue) {

        this._router.navigateByUrl('resource/' + encodeURIComponent(linkVal.referredResourceIri));

    }

}
