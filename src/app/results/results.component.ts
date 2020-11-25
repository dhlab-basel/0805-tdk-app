import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SearchParams} from '@dasch-swiss/dsp-ui';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  query: string;
  currentQuery: SearchParams;
  constructor(private route: ActivatedRoute, public router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.query = decodeURIComponent(params.query);
      this.currentQuery = {
        query: this.query,
        mode: 'gravsearch'
      };
    });
  }
  openResource(iri: string) {
    const url: string = 'resource/' + encodeURIComponent(iri);
    this.router.navigateByUrl(url).then(e => {
    });
  }

}
