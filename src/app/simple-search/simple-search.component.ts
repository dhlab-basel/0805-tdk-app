import {Component, Inject, OnInit} from '@angular/core';
import {DspApiConnectionToken, StillImageRepresentation} from '@dasch-swiss/dsp-ui';
import {
  ApiResponseData,
  KnoraApiConnection,
  ListResponse,
  ReadOntology,
  ReadResourceSequence,
  ReadStillImageFileValue,
  ResourcePropertyDefinition
} from '@dasch-swiss/dsp-js';
import {Router} from '@angular/router';
import {Languages, StorageService} from "../storage.service";

class StillImageWithIri {
    image: StillImageRepresentation;
    iri: string;
    constructor(img: StillImageRepresentation, i: string) {
        this.image = img;
        this.iri = i;
    }
}
class StillImageWithIriSequence {
    images: StillImageWithIri[];
    mayContainMore: boolean;
    query: string;
    currentOffset = 0;
    constructor(img: StillImageWithIri[], may: boolean, query: string) {
        this.images = img;
        this.mayContainMore = may;
        this.query = query;
    }
}
class Node {
  labels: any[];
  id: string;
  constructor(labels: any[], id: string) {
    this.labels = labels;
    this.id = id;
  }
}
export enum SearchOptions {
  OBJECT_CATERGORY,
  CATALOG_NUMBER,
  ILLUSTRATION_NUMBER,
  FIND_NUMBER,
  STUDY_MATERIAL_NUMBER,
  VESSEL_NUMBER,
  LOCATION,
  PERSON
}
@Component({
    selector: 'app-simple-search',
    templateUrl: './simple-search.component.html',
    styleUrls: ['./simple-search.component.css']
})
export class SimpleSearchComponent implements OnInit {
    public ontoIri = 'http://api.0805-test-server.dasch.swiss/ontology/0805/tdk_onto/v2';
    public baseQuery = 'PREFIX knora-api: <http://api.knora.org/ontology/knora-api/v2#>\nPREFIX tdk: <' + this.ontoIri + '#>\nPREFIX knora-api-simple: <http://api.knora.org/ontology/knora-api/simple/v2#>\nCONSTRUCT {\n?mainres knora-api:isMainResource true .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n';
    public objectList: Node[];
    public results: StillImageWithIriSequence[] = [];
    public noResults: boolean = false;
    public searchOptionsStrings = [{en: 'Object Category', de: 'Objektkategorie'},
    {en: 'Catalog Number', de: 'Katalognummer'},
    {en: 'Illustration Number', de: 'Abbildungsnummer'},
    {en: 'Find number', de: 'Fundnummer'},
    {en: 'Study Material Number', de: 'Study-Material-Nummer'},
    {en: 'Vessel Number', de: 'Gefässnummer'},
    {en: 'Location', de: 'Lage'},
    {en: 'Person', de: 'Person'}];
    constructor(@Inject(DspApiConnectionToken) private dspApiConnection: KnoraApiConnection, private router: Router, public storage: StorageService) {
    }

    ngOnInit(): void {
        this.getObjectList();
    }

    getObjectList(): void {
        this.objectList = [];
        this.dspApiConnection.v2.onto.getOntology(this.ontoIri).subscribe(
            (r: ReadOntology) => {
                for (const i in r.properties) {
                    const prop = r.properties[i] as ResourcePropertyDefinition;
                    if (prop.guiAttributes.length > 0 && prop.label === 'Object type') {
                        const listIri = prop.guiAttributes[0].split('=')[1].slice(1, -1);

                        this.dspApiConnection.admin.listsEndpoint.getList(listIri).subscribe(
                        (l) => {
                          l = l as ApiResponseData<ListResponse>;
                          for (const node of l.response.response.list.children){
                            this.objectList.push(new Node(node.labels, node.id));
                          }
                        }
                      );
                    }
                }
                console.log(this.objectList);
            }
        );

    }
    getObjectLabel(node: Node){
      for (const label of node.labels){
        if (label.language === 'en' && this.storage.selectedLanguage === Languages.English) {
          return label.value;
        }
        if (label.language === 'de' && this.storage.selectedLanguage === Languages.Deutsch) {
          return label.value;
        }
      }
      return '';
    }
    getFilter(value: string, tag: string): string {
        const re = /\*/gi;
        const cleanVal = value.replace(re, '');
        if (value.trim().indexOf('*') === 0){
            if (value.trim()[value.trim().length - 1] === '*') { // complete at beginning and at end
                return tag + ' knora-api:valueAsString ' + tag + 'Str .\n' + 'FILTER regex(' + tag + 'Str, "' + cleanVal + '", "i") .';
            }
            /* complete only at beginning */
            return tag + ' knora-api:valueAsString ' + tag + 'Str .\n' + 'FILTER regex(' + tag + 'Str, "' + cleanVal + '$", "") .';
        } else if (value.trim().indexOf('*') === value.trim().length - 1) { // complete only at end
            return tag + ' knora-api:valueAsString ' + tag + 'Str .\n' + 'FILTER regex(' + tag + 'Str, "^' + cleanVal + '", "") .';
        }
        else {
            return  tag + ' knora-api:valueAsString "' + cleanVal + '" .';
        }
    }
    searchRequested(id: number, value: string){
      switch (id){
        case SearchOptions.OBJECT_CATERGORY:
          this.objectSearch(value);
          break;
        case SearchOptions.CATALOG_NUMBER:
          this.catalogSearch(value);
          break;
        case SearchOptions.ILLUSTRATION_NUMBER:
          this.figureSearch(value);
          break;
        case SearchOptions.STUDY_MATERIAL_NUMBER:
          this.smSearch(value);
          break;
        case SearchOptions.VESSEL_NUMBER:
          this.potSearch(value);
          break;
        case SearchOptions.LOCATION:
          break; // handled by map
        case SearchOptions.PERSON:
          this.personSearch(value);
          break;
        default:
          break;
      }
    }

    objectSearch(value: string): void {
        let query1 = this.baseQuery;
        query1 += '?sm tdk:smZeichnung ?mainres .\n?sm tdk:smObjekttyp ?smObjekttyp .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Zeichnung .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?sm tdk:smZeichnung ?mainres .\n?sm tdk:smObjekttyp ?smObjekttyp .\n' +
            '?smObjekttyp knora-api:listValueAsListNode <' + value + '> .}';
        let query2 = this.baseQuery;
        query2 += '?mainres tdk:bildSMFund ?sm .\n?sm tdk:smObjekttyp ?smObjekttyp .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Bild .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?mainres tdk:bildSMFund ?sm .\n?sm tdk:smObjekttyp ?smObjekttyp .\n' +
            '?smObjekttyp knora-api:listValueAsListNode <' + value + '> .}';
        this.search([query1, query2]);
    }

    catalogSearch(value: string): void {
        /* TODO: will be implemented when data is available */
    }

    figureSearch(value: string): void {
        /* TODO: will be implemented when data is available */
    }

    findSearch(value: string): void {
        let query1 = this.baseQuery;
        query1 += '?sm tdk:smZeichnung ?mainres .\n?sm tdk:fundNr ?fundNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Zeichnung .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?sm tdk:smZeichnung ?mainres .\n?sm tdk:fundNr ?fundNr .\n' +
            this.getFilter(value, '?fundNr') + '}';
        let query2 = this.baseQuery;
        query2 += '?mainres tdk:bildSMFund ?sm .\n?sm tdk:fundNr ?fundNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Bild .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?mainres tdk:bildSMFund ?sm .\n?sm tdk:fundNr ?fundNr .\n' +
            this.getFilter(value, '?fundNr') + '}';
        this.search([query1, query2]);
    }

    smSearch(value: string): void {
        let query1 = this.baseQuery;
        query1 += '?sm tdk:smZeichnung ?mainres .\n?sm tdk:smNr ?smNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Zeichnung .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?sm tdk:smZeichnung ?mainres .\n?sm tdk:smNr ?smNr .\n' +
            this.getFilter(value, '?smNr') + '}';
        let query2 = this.baseQuery;
        query2 += '?mainres tdk:bildSMFund ?sm .\n?sm tdk:smNr ?smNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Bild .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?mainres tdk:bildSMFund ?sm .\n?sm tdk:smNr ?smNr .\n' +
            this.getFilter(value, '?smNr') + '}';
        this.search([query1, query2]);
    }

    potSearch(value: string): void {
        let query1 = this.baseQuery;
        query1 += '?sm tdk:smZeichnung ?mainres .\n?sm tdk:smGefaessNr ?gNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Zeichnung .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?sm tdk:smZeichnung ?mainres .\n?sm tdk:smGefaessNr ?gNr .\n' +
            this.getFilter(value, '?gNr') + '}';
        let query2 = this.baseQuery;
        query2 += '?mainres tdk:bildSMFund ?sm .\n?sm tdk:smGefaessNr ?smGefaessNr .} WHERE {\n?mainres a knora-api:Resource .\n' +
            '?mainres a tdk:Bild .\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n?mainres tdk:bildSMFund ?sm .\n?sm tdk:smGefaessNr ?smGefaessNr .\n' +
            this.getFilter(value, '?smGefaessNr') + '}';
        this.search([query1, query2]);
    }

    locationSearch(graveValue: string, roomValue: string, sectionValue:string): void {
        /*
        ?mainres tdk:bildGrab ?bildGrab .
        ?bildGrabknora-api:intValueAsInt ?bildGrabInt .
        FILTER(?bildGrab == 40) .
        ?mainres tdk:bildRaum ?bildRaum .
        ?bildRaum knora-api:valueAsString ?bildRaumStr .
        FILTER regex(?bildRaumStr, "Raumfilter", "i") .
        ?mainres tdk:bildSchnitt ?bildSchnitt .
        ?bildSchnitt knora-api:valueAsString ?bildSchnittStr .
        FILTER regex(?bildSchnittStr, "Schnittfilter", "i") .

         */
        let query1 = this.baseQuery;
        query1 += '} WHERE {\n?mainres knora-api:hasStillImageFileValue ?stillImage .\n';
        if (graveValue !== ''){
            query1 += '?mainres tdk:bildGrab ?bildGrab .\n?bildGrab knora-api:intValueAsInt ?bildGrabInt .\n FILTER(?bildGrabInt = ' + graveValue + ') .';
            query1 += '\n';
        }
        if (roomValue !== ''){
            query1 += '?mainres tdk:bildRaum ?bildRaum .\n' + this.getFilter(roomValue, '?bildRaum');
        }
        if (sectionValue !== '') {
            query1 += '?mainres tdk:bildSchnitt ?bildSchnitt .\n' + this.getFilter(sectionValue, '?bildSchnitt');
        }
        query1 += '}';
        this.search([query1]);
    }

    personSearch(value: string): void {
        /* TODO: will be implemented when data is available */
    }

    search(queries: string[]): void {
        this.results = [];
        for (let query of queries) {
          console.log(query);
        }
        this.noResults = false;
        for (const query of queries) {
            this.dspApiConnection.v2.search.doExtendedSearch(query).subscribe((r) => {
                r = r as ReadResourceSequence;
                const toPush = [];
                if (r.resources.length === 0) {
                    this.noResults = true;
                }
                else {
                    this.noResults = false;
                    for (const res of r.resources) {
                        toPush.push(new StillImageWithIri(new StillImageRepresentation(res.getValuesAs('http://api.knora.org/ontology/knora-api/v2#hasStillImageFileValue', ReadStillImageFileValue)[0], []), res.id));
                    }
                    this.results.push(new StillImageWithIriSequence(toPush, r.mayHaveMoreResults, query));
                }
            });
        }
    }
    openResource(iri: string): void {
        this.router.navigateByUrl('resource/' + encodeURIComponent(iri)).then(e => {
        });
    }
    moreToLoad(): boolean {
        for (const res of this.results){
            if (res.mayContainMore){
                return true;
            }
        }
        return false;
    }
    loadMore(): void {
        for (const res of this.results){
            if (res.mayContainMore){
                res.currentOffset++;
                this.dspApiConnection.v2.search.doExtendedSearch(res.query + '\nOFFSET ' + res.currentOffset.toString()).subscribe(
                    (r) => {
                        r = r as ReadResourceSequence;
                        for (const resource of r.resources) {
                            res.images.push(new StillImageWithIri(new StillImageRepresentation(resource.getValuesAs('http://api.knora.org/ontology/knora-api/v2#hasStillImageFileValue', ReadStillImageFileValue)[0], []), resource.id));
                        }
                        res.mayContainMore = r.mayHaveMoreResults;
                    }
                );
            }
        }
    }
}
