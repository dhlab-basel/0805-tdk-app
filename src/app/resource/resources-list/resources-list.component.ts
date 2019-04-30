import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MlsService } from '../../services/mls.service';

@Component({
  selector: 'mls-resources-list',
  templateUrl: './resources-list.component.html',
  styleUrls: ['./resources-list.component.scss']
})
export class ResourcesListComponent implements OnInit {
  route: string;
  gravsearch: string;

  constructor(private _route: ActivatedRoute,
    private _mls: MlsService,
    public location: Location) {
    this.route = this._route.pathFromRoot[1].snapshot.url[0].path;
  }

  ngOnInit() {
    switch (this.route) {
      case 'lemmata': {
        this.gravsearch = this._mls.searchForLemmata(0);
        break;
      }
      case 'lexika': {
        this.gravsearch = this._mls.searchForLexika(0);
        break;
      }
      case 'artikel': {
        this.gravsearch = this._mls.searchForArtikel(0);
        break;
      }
      case 'bibliothek': {
        this.gravsearch = this._mls.searchForBibliothek(0);
        break;
      }
      case 'ort': {
        this.gravsearch = this._mls.searchForOrt(0);
        break;
      }
      case 'taetigkeit': {
        this.gravsearch = this._mls.searchForTaetigkeit(0);
        break;
      }
    }
  }
}
