import { Injectable } from '@angular/core';
import { AppInitService } from '../app-init.service';
import { SearchParamsService, ExtendedSearchParams } from '@knora/core';

@Injectable({
    providedIn: 'root'
})
export class TdkService {

    constructor(
        private _appInitService: AppInitService,
        private _searchParamsService: SearchParamsService) { }

    /**
     * Gravsearch query to search for lemma data and associated data: location and occupation
     */
    searchForLage(offset: number = 0): string {
        const lageTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX tdk: <${this._appInitService.getSettings().ontologyIRI}/ontology/0805/tdk_onto/simple/v2#>

        CONSTRUCT {
            ?lage knora-api:isMainResource true .

            ?lage tdk:lageNr ?text .



        } WHERE {
            ?lage a knora-api:Resource .
            ?lage a tdk:Lage .

            ?lage lage:lageNr ?text .        
        }
      `;

        // offset component of the Gravsearch query
        const offsetTemplate = `
        OFFSET ${offset}
        `;

        // function that generates the same Gravsearch query with the given offset
        const generateGravsearchWithCustomOffset = (localOffset: number): string => {
            const offsetCustomTemplate = `
            OFFSET ${localOffset}
            `;

            return lageTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return lageTemplate + offsetTemplate;
    }
    

    /**
     * Gravsearch query to search for artikel data
     */
    searchForBild(offset: number = 0): string {

        const bildTemplate = `
     PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
     PREFIX tdk: <${this._appInitService.getSettings().ontologyIRI}/ontology/0805/tdk_onto/simple/v2#>

         CONSTRUCT {
            ?bild knora-api:isMainResource true .
            ?bild knora-api:hasStillImageFileValue ?file .

         } WHERE {
            ?bild a knora-api:Resource .
            ?bild a tdk:Bild .
            ?bild knora-api:hasStillImageFileValue ?file .

         }
       `;
        // offset component of the Gravsearch query
        const offsetTemplate = `
         OFFSET ${offset}
         `;

        // function that generates the same Gravsearch query with the given offset
        const generateGravsearchWithCustomOffset = (localOffset: number): string => {
            const offsetCustomTemplate = `
             OFFSET ${localOffset}
             `;

            return bildTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return bildTemplate + offsetTemplate;
    }



    /**
     * Gravsearch query to search for kampagne data
     */
    searchForKampagne(offset: number = 0): string {

        const kampagneTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX tdk: <${this._appInitService.getSettings().ontologyIRI}/ontology/0805/tdk_onto/simple/v2#>

        CONSTRUCT {
            ?kampagne knora-api:isMainResource true .
            ?kampagne tdk:kampagne ?text .

        } WHERE {
 
            ?kampagne a knora-api:Resource .
            ?kampagne a tdk:Kamapgne .
            ?kampagne tdk:kampagne ?text .
            
        }
      `;
        // offset component of the Gravsearch query
        const offsetTemplate = `
        OFFSET ${offset}
        `;

        // function that generates the same Gravsearch query with the given offset
        const generateGravsearchWithCustomOffset = (localOffset: number): string => {
            const offsetCustomTemplate = `
            OFFSET ${localOffset}
            `;

            return kampagneTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return kampagneTemplate + offsetTemplate;

    }

    /********* TESTING *********/

    /** FOR testing only!!!
     * Gravsearch query to search for artikel data
     */
    searchForDing() {

        const artikelTemplate = `PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
        CONSTRUCT {

        ?mainRes knora-api:isMainResource true .



        } WHERE {

        ?mainRes a knora-api:Resource .

        ?mainRes a <http://0.0.0.0:3333/ontology/0803/incunabula/simple/v2#page> .



        }

        OFFSET 0
       `;
        return artikelTemplate;

    }


}
