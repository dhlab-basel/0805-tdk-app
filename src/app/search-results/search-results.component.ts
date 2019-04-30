import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mls-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  projectIri = 'http://rdfh.ch/projects/0807';  // mls project iri

  constructor() { }

  ngOnInit() {
  }

}
