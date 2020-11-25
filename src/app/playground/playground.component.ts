import { Component, Inject, OnInit } from '@angular/core';
import {
  ApiResponseData, ApiResponseError, Constants,
  KnoraApiConnection,
  LogoutResponse, ReadGeomValue,
  ReadResource,
  ReadStillImageFileValue, ReadValue
} from '@dasch-swiss/dsp-js';
import {DspApiConnectionToken, Region, SearchParams, StillImageRepresentation} from '@dasch-swiss/dsp-ui';
import { mergeMap } from 'rxjs/operators';
class Geom extends ReadValue {
  geometryString: string;
}

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  resourceIri = 'http://rdfh.ch/0805/-280OTrsR_2b-N1KADTNZg';
  loading: boolean;
  public searchParams: SearchParams = {
    query : 'PREFIX knora-api: <http://api.knora.org/ontology/knora-api/v2#>\nPREFIX tdk: <http://api.tdk.test.dasch.swiss/ontology/0805/tdk_onto/v2#>\nPREFIX knora-api-simple: <http://api.knora.org/ontology/knora-api/simple/v2#>\nCONSTRUCT {\n?mainres knora-api:isMainResource true .\n?mainres tdk:bildAutor ?bildAutor .} WHERE {\n?mainres a knora-api:Resource .\n?mainres a tdk:Bild .\n?mainres tdk:bildAutor ?bildAutor .\n?bildAutor knora-api:listValueAsListNode <http://rdfh.ch/lists/0805/EwsJoIRTSauit48NyNh_iA> .}',
    mode : 'gravsearch'
  };
  stillImageRepresentations: StillImageRepresentation[];
  caption = 'test image';

  actReg: string;
  constructor(@Inject(DspApiConnectionToken) private _dspApiConnection: KnoraApiConnection) {
  }
  openResource(event: any) {
    return;
  }

  ngOnInit(): void {
    console.log(this.searchParams.query);
  }
}


