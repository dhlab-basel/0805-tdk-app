import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {KnoraApiConnection, ReadResource, ReadStillImageFileValue} from '@dasch-swiss/dsp-js';
import {DspApiConnectionToken, Region, StillImageRepresentation} from '@dasch-swiss/dsp-ui';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {
  iri: string;
  isStillImage: boolean;
  stillImageRepresentation: StillImageRepresentation;
  constructor(@Inject(DspApiConnectionToken) private dspApiConnection: KnoraApiConnection, private route: ActivatedRoute, public router: Router) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.iri = params.iri;
    });
    this.isStillImage = false;
    this.dspApiConnection.v2.res.getResource(this.iri).subscribe(
      (res: ReadResource) => {
        console.log(res);
        if ('http://api.knora.org/ontology/knora-api/v2#hasStillImageFileValue' in res.properties) {
          this.isStillImage = true;
        }
        if (this.isStillImage) {
          this.stillImageRepresentation
            = new StillImageRepresentation(res.getValuesAs('http://api.knora.org/ontology/knora-api/v2#hasStillImageFileValue', ReadStillImageFileValue)[0], []);
        }
      });
  }

}
