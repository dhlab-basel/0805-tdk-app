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
    searchForLemmata(offset: number = 0): string {
        const lemmataTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

        CONSTRUCT {
            ?lemma knora-api:isMainResource true .

            ?lemma mls:hasLemmaText ?text .

            #?lemmaLocation mls:hasLLLinkToLemma ?lemma .

            #?lemmaLocation mls:hasLLLinkToLocation ?location .

        } WHERE {
            ?lemma a knora-api:Resource .
            ?lemma a mls:Lemma .

            ?lemma mls:hasLemmaText ?text .

            #OPTIONAL { ?lemmaLocation mls:hasLLLinkToLemma ?lemma . }

            #OPTIONAL { ?lemmaLocation mls:hasLLLinkToLocation ?location . }
            
            #?location a mls:Location .

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

            return lemmataTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return lemmataTemplate + offsetTemplate;
    }

    /**
     * Gravsearch query to search for lexika data
     */
    searchForLexika(offset: number = 0): string {

        const lexikaTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

        CONSTRUCT {
            ?lexicon knora-api:isMainResource true .


        } WHERE {
            ?lexicon a knora-api:Resource .
            ?lexicon a mls:Lexicon .

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

            return lexikaTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return lexikaTemplate + offsetTemplate;
    }

    /**
     * Gravsearch query to search for artikel data
     */
    searchForArtikel(offset: number = 0): string {

        const artikelTemplate = `
     PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
     PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

         CONSTRUCT {
            ?article knora-api:isMainResource true .

         } WHERE {
            ?article a knora-api:Resource .
            ?article a mls:Article .

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

            return artikelTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return artikelTemplate + offsetTemplate;
    }

    /**
     * Gravsearch query to search for bibliothek data
     */
    searchForBibliothek(offset: number = 0): string {

        const bibliothekTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

        CONSTRUCT {
            ?bibliothek knora-api:isMainResource true .

        } WHERE {
            ?bibliothek a knora-api:Resource .
            ?bibliothek a mls:Library .
            
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

            return bibliothekTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return bibliothekTemplate + offsetTemplate;
    }

    /**
     * Gravsearch query to search for location data
     */
    searchForOrt(offset: number = 0): string {

        const ortTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

        CONSTRUCT {
            ?ort knora-api:isMainResource true .
            

        } WHERE {

            ?ort a knora-api:Resource .
            ?ort a mls:Location .
            
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

            return ortTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return ortTemplate + offsetTemplate;

    }

    /**
     * Gravsearch query to search for occupation data
     */
    searchForTaetigkeit(offset: number = 0): string {

        const taetigkeitTemplate = `
    PREFIX knora-api: <http://api.knora.org/ontology/knora-api/simple/v2#>
    PREFIX mls: <${this._appInitService.getSettings().ontologyIRI}/ontology/0807/mls/simple/v2#>

        CONSTRUCT {
            ?taetigkeit knora-api:isMainResource true .
            

        } WHERE {

            ?taetigkeit a knora-api:Resource .
            ?taetigkeit a mls:Occupation .
            
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

            return taetigkeitTemplate + offsetCustomTemplate;
        };

        if (offset === 0) {
            // store the function so another Gravsearch query can be created with an increased offset
            this._searchParamsService.changeSearchParamsMsg(new ExtendedSearchParams(generateGravsearchWithCustomOffset));
        }
        return taetigkeitTemplate + offsetTemplate;

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
