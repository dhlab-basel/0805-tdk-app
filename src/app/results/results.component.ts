import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchParams} from '@dasch-swiss/dsp-ui';
import {StorageService} from '../storage.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  query: string;
  currentQuery: SearchParams;
  constructor(public router: Router, private storage: StorageService) { }

  ngOnInit(): void {
    this.currentQuery = {
      query: this.storage.currentQuery,
      mode: 'gravsearch'
    };
  }
  openResource(iri: string) {
    const url: string = 'resource/' + encodeURIComponent(iri);
    this.router.navigateByUrl(url).then(e => {
    });
  }

}
