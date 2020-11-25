import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {DspApiConnectionToken, SearchParams} from '@dasch-swiss/dsp-ui';
import {
  ClassDefinition,
  IHasProperty,
  KnoraApiConnection, ListNodeV2,
  OntologiesMetadata, PropertyDefinition,
  ReadOntology,
  ResourceClassDefinition, ResourcePropertyDefinition
} from '@dasch-swiss/dsp-js';
import {MatDatepicker, MatDatepickerInputEvent} from '@angular/material/datepicker';
import {Router} from '@angular/router';
import {query} from '@angular/animations';
import {StorageService} from '../storage.service';
import {Form, FormControl} from '@angular/forms';

class Property {
  data: string;
  value: string;
  operator: string;

  constructor(data?: string, operator?: string, value?: string) {
    if (data) {
      this.data = data;
    }
    if (operator) {
      this.operator = operator;
    }
    if (value) {
      this.value = value;
    }
  }
}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {
  public classes: ResourceClassDefinition[] = [];
  public selectedResourceType: string = '';
  public ontoIri: string = 'http://api.tdk.test.dasch.swiss/ontology/0805/tdk_onto/v2';
  public propertiesChosen: Property[][] = [[new Property()]];
  public properties = {};
  public lists = {};
  public formQueryString = '';

  constructor(@Inject(DspApiConnectionToken) private dspApiConnection: KnoraApiConnection, private router: Router, public storage: StorageService) {
  }

  ngOnInit(): void {
    this.getOnto();
    if (this.storage.resChosen) {
      this.selectedResourceType = this.storage.resChosen;
      this.createFormQuery();
    }
    if (this.storage.propertiesChosen) {
      this.propertiesChosen = this.storage.propertiesChosen;
      this.createFormQuery();
    }
    console.log(this.selectedResourceType);
  }

  getOnto(): void {
    this.dspApiConnection.v2.onto.getOntology(this.ontoIri).subscribe(
      (r: ReadOntology) => {
        console.log(r);
        for (const key in r.classes) {
          this.classes.push(r.classes[key] as ResourceClassDefinition);
        }
        this.properties = r.properties;
        this.getLists();
      }
    );
  }

  getLists() {
    for (const propIri in this.properties) {
      const prop = this.properties[propIri];
      if (this.getTypeOfProp(propIri) === 'ListValue') {
        const listIri = this.properties[propIri].guiAttributes[0].split('=')[1].slice(1, -1);
        this.dspApiConnection.v2.list.getList(listIri).subscribe(
          (l) => {
            this.lists[propIri] = l as ListNodeV2;
          }
        );
      }
    }
  }

  getPropsOfResclass(resClass: string): IHasProperty[] {
    const toReturn: IHasProperty[] = [];
    for (const res of this.classes) {
      if (res.id === resClass) {
        for (const prop of res.propertiesList) {
          if (!prop.isInherited && !(prop.propertyIndex.substr(-5) === 'Value')) {
            toReturn.push(prop);
          }
        }
      }
    }
    return toReturn;
  }

  getTypeOfProp(iri: string): string {
    return this.properties[iri].objectType.substr(this.properties[iri].objectType.lastIndexOf('#') + 1);
  }

  getObjectOfProp(iri: string): string {
    return this.properties[iri].objectType;
  }

  changeProp(id: number, level: number, property: string) {
    if (this.propertiesChosen[id].length < level + 1) {
      this.propertiesChosen[id].push(new Property());
    }
    this.propertiesChosen[id][level].data = property;
    this.createFormQuery();
  }

  setOperator(id: number, level: number, operator: string) {
    if (this.propertiesChosen[id].length < level + 1) {
      this.propertiesChosen[id].push(new Property());
    }
    this.propertiesChosen[id][level].operator = operator;
    console.log(this.propertiesChosen);
  }

  removeProperty(id: number) {
    this.propertiesChosen.splice(id, 1);
    this.createFormQuery();
  }

  addProperty() {
    this.propertiesChosen.push([new Property()]);
  }

  deleteAllProps() {
    this.propertiesChosen = [[new Property()]];
    this.createFormQuery();
  }

  changeValue(id: number, level: number, value: string) {
    if (this.propertiesChosen[id].length < level + 1) {
      this.propertiesChosen[id].push(new Property());
    }
    this.propertiesChosen[id][level].value = value;
    this.createFormQuery();
  }

  dateValueChange(id: number, level: number, isItYear: boolean, $event: MatDatepickerInputEvent<unknown>) {
    const value: Date = $event.value as Date;
    const dateStr = this.getDateStr(value, isItYear);
    this.changeValue(id, level, dateStr);
  }

  dateSelected(elem: MatDatepicker<any>, event: Date) {
    elem.close();
    elem.select(event);
  }

  getDateStr(value: Date, isItYear: boolean): string {
    const dateBeforeAsDate = new Date(value.getTime());
    dateBeforeAsDate.setDate(value.getDate() - 1);
    const dateBefore = 'GREGORIAN:' + dateBeforeAsDate.getFullYear().toString() + '-' + (dateBeforeAsDate.getMonth() + 1).toString() + '-' + dateBeforeAsDate.getDate().toString();
    let dateAfter = '';
    if (isItYear) {
      dateAfter = 'GREGORIAN:' + (value.getFullYear()).toString() + '-12-31';
    } else {
      const dateConst = new Date(value.getFullYear(), value.getMonth() + 1, 0); // set to last date of month
      dateAfter = 'GREGORIAN:' + (dateConst.getFullYear()).toString() + '-' + (dateConst.getMonth() + 1).toString() + '-' + dateConst.getDate().toString();
    }
    return dateBefore + '|' + dateAfter;
  }
  parseBackDateStr(dateStr: string): Date {
    if (!dateStr) {
      return new Date();
    }
    const dateBefore = dateStr.substring(10, dateStr.indexOf('|'));
    const dates = dateBefore.split('-');
    const toReturn = new Date(dates[0] + '-'  + dates[1] + '-' + dates[2]);
    toReturn.setDate(toReturn.getDate() + 1);
    return toReturn;
  }
  parseBackIsItYear(dateStr: string): string {
    const dates = dateStr.split('-');
    return dates[1] === '12' && dates[3] === '12' ? 'year' : 'month';
  }

  createFormQuery() {
    let query = '';
    for (const propArr of this.propertiesChosen) {
      let parentName = 'mainres';
      let i = 0;
      while (i < propArr.length) {
        try {
          const childName = this.getPropName(propArr[i]);
          query += '?' + parentName + ' tdk:' + childName + ' ?' + childName + ' .\n';
          parentName = childName;
        } catch (e) {
          if (e instanceof TypeError) {
            console.log('Missing prop found');
          } else {
            console.error(e);
          }
        }
        i++;
      }
      const lastProp: Property = propArr[propArr.length - 1];
      if (lastProp.value) {
        query += this.getFilterString(lastProp);
      }
    }
    this.formQueryString = query;
  }

  getPropName(prop: Property): string {
    return prop.data.substr(prop.data.lastIndexOf('#') + 1);
  }

  getFilterString(prop: Property): string {
    switch (this.getTypeOfProp(prop.data)) {
      case 'TextValue':
        return '?' + this.getPropName(prop) + ' knora-api:valueAsString ?' + this.getPropName(prop) + 'Str .\n' +
          'FILTER regex(?' + this.getPropName(prop) + 'Str, "' + prop.value + '", "i") .\n';
      case 'ListValue':
        return '?' + this.getPropName(prop) + ' knora-api:listValueAsListNode <' + prop.value + '> .';
      case 'DateValue':
        const dates = prop.value.split('|');
        return 'FILTER (knora-api:toSimpleDate(?' + this.getPropName(prop) + ') <= "' + dates[1] + '"^^knora-api-simple:Date && knora-api:toSimpleDate(?' + this.getPropName(prop) + ') > "' + dates[0] + '"^^knora-api-simple:Date) .\n';
      case 'IntValue':
        return '?' + this.getPropName(prop) + 'knora-api:intValueAsInt ?' + this.getPropName(prop) + 'Int .\n' +
          'FILTER(?' + this.getPropName(prop) + ' == ' + prop.value + ') .\n';
      default:
        console.log('Illegal value type: ' + this.getTypeOfProp(prop.data) + ' ' + prop.value);
    }
    return '';
  }

  createGravfieldQuery(enteredString: string) {
    if (this.formQueryString) {
      enteredString = this.formQueryString + enteredString;
    }
    let queryString = 'PREFIX knora-api: <http://api.knora.org/ontology/knora-api/v2#>\nPREFIX tdk: <' + this.ontoIri + '#>\nPREFIX knora-api-simple: <http://api.knora.org/ontology/knora-api/simple/v2#>\nCONSTRUCT {\n';
    if (enteredString === '') {
      queryString += '?mainres knora-api:isMainResource true .} WHERE {\n ?mainres a knora-api:Resource .\n?mainres a tdk:' + this.selectedResourceType.substr(this.selectedResourceType.lastIndexOf('#') + 1) + ' .}'; // TODO selected resource type probably wrong.
    } else {
      const mainres = enteredString.substring(0, enteredString.indexOf(' '));
      const lines = enteredString.split('\n');
      queryString += mainres + ' knora-api:isMainResource true .';
      for (let line of lines) {
        if (line.startsWith('FILTER')) {
          continue;
        }
        if (line.indexOf('knora-api:valueAsString') !== -1) {
          continue;
        }
        const arr = line.split(' ');
        if (arr.length === 4) {
          if (!(arr[2].startsWith('?'))) { // found listnode filter
            continue;
          }
          if (arr[1].indexOf(':') === -1) { // tdk: missing
            line = arr[0] + ' tdk:' + arr[1] + ' ' + arr[2] + ' ' + arr[3];
          }
        }
        queryString += '\n' + line;
      }
      queryString += '} WHERE {\n' + mainres + ' a knora-api:Resource .\n' + mainres + ' a tdk:' + this.selectedResourceType.substr(this.selectedResourceType.lastIndexOf('#') + 1) + ' .';
      for (let line of lines) {
        const arr = line.split(' ');
        if (arr.length === 4) {
          if (arr[1].indexOf(':') === -1) { // tdk: missing
            line = arr[0] + ' tdk:' + arr[1] + ' ' + arr[2] + ' ' + arr[3];
          }
        }
        queryString += '\n' + line;
      }
      queryString += '}';
    }
    const url: string = 'results/' + encodeURIComponent(queryString);
    this.router.navigateByUrl(url).then(e => {
    });
  }

  ngOnDestroy(): void {
    this.storage.resChosen = this.selectedResourceType;
    this.storage.propertiesChosen = this.propertiesChosen;
  }
}
