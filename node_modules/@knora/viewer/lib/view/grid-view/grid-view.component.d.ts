import { OnInit } from '@angular/core';
import { KnoraConstants, OntologyInformation } from '@knora/core';
import { Router } from '@angular/router';
export declare class GridViewComponent implements OnInit {
    private _router;
    /**
     * @param  {any} result Search result received from SearchResultsComponent
     */
    result: any;
    /**
     * @param  {OntologyInformation} ontologyInfo Ontology information received from SearchResultsComponent
     */
    ontologyInfo: OntologyInformation;
    KnoraConstants: typeof KnoraConstants;
    constructor(_router: Router);
    ngOnInit(): void;
    /**
     * Navigate to the resource viewer when clicking on one resource of the search result grid
     * @param {string} id
     */
    openResource(id: string): void;
}
