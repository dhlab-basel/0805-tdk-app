import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TdkService } from '../../services/tdk.service';

@Component({
  selector: 'tdk-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  route: string;
  gravsearch: string;

  constructor(private _route: ActivatedRoute,
    private _tdk: TdkService,
    public location: Location) {
    this.route = this._route.pathFromRoot[1].snapshot.url[0].path;
  }

  ngOnInit() {
    switch (this.route) {
      case 'lage': {
        this.gravsearch = this._tdk.searchForLage(0);
        break;
      }
      case 'bild': {
        this.gravsearch = this._tdk.searchForBild(0);
        break;
      }

      case 'kamapgne': {
        this.gravsearch = this._tdk.searchForKampagne(0);
        break;
      }
    }
  }
}
