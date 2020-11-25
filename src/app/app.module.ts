import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  AppInitService,
  DspApiConfigToken,
  DspApiConnectionToken,
  DspActionModule,
  DspCoreModule,
  DspSearchModule,
  DspViewerModule
} from '@dasch-swiss/dsp-ui';
import {environment} from '../environments/environment';
import {KnoraApiConnection} from '@dasch-swiss/dsp-js';
import { PlaygroundComponent } from './playground/playground.component';
import { SearchComponent } from './search/search.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { ResourceComponent } from './resource/resource.component';
import { ResultsComponent } from './results/results.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaygroundComponent,
    SearchComponent,
    ResourceComponent,
    ResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DspCoreModule,
    DspViewerModule,
    DspSearchModule,
    DspActionModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER, // see https://angular.io/api/core/APP_INITIALIZER
      useFactory: (appInitService: AppInitService) =>
        (): Promise<any> => {
          return appInitService.Init('config', environment);
        },
      deps: [AppInitService], // depends on AppInitService
      multi: true
    },
    {
      provide: DspApiConfigToken,
      useFactory: (appInitService: AppInitService) => appInitService.dspApiConfig, // AppInitService is passed to the factory method
      deps: [AppInitService] // depends on AppInitService
    },
    {
      provide: DspApiConnectionToken,
      useFactory: (appInitService: AppInitService) => new KnoraApiConnection(appInitService.dspApiConfig), // AppInitService is passed to the factory method
      deps: [AppInitService] // depends on AppInitService
    },
    MatNativeDateModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
