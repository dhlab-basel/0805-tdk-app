import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tdk-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  projectIri = 'http://rdfh.ch/projects/0805';  // tdk project iri

  constructor() { }

  ngOnInit() {
  }

}
