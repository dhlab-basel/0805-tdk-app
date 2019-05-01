import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourceComponent } from './resource/resource.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ResourcesListComponent } from './resource/resources-list/resources-list.component';
import { ErrorComponent } from './error/error.component';
import { SearchResultsComponent } from './search-results/search-results.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'resource/:id',
    component: ResourceComponent
  },
  {
    path: 'search',
    children: [
      {
        path: ':mode/:q',
        component: SearchResultsComponent
      }
    ]
  },
  {
    path: 'lage',
    component: ResourcesListComponent
  },
  {
    path: 'kampagne',
    component: ResourcesListComponent
  },
  {
    path: 'bild',
    component: ResourcesListComponent
  },

  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
