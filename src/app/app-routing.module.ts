import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchComponent} from './search/search.component';
import {ResourceComponent} from './resource/resource.component';
import {ResultsComponent} from './results/results.component';
import {SimpleSearchComponent} from './simple-search/simple-search.component';


const routes: Routes = [
  {
    path: 'resource/:iri',
    component: ResourceComponent
  },
  {
    path: 'results',
    component: ResultsComponent
  },
  {
    path: 'simple',
    component: SimpleSearchComponent
  },
  {
    path: '**',
    component: SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
