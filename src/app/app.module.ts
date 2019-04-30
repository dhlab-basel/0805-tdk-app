import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

// style / design
import { MaterialModule } from './material-module';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// knora-ui modules
import { KuiCoreConfig, KuiCoreModule, KuiCoreConfigToken } from '@knora/core';
import { KuiActionModule } from '@knora/action';
import { KuiSearchModule } from '@knora/search';
import { KuiViewerModule } from '@knora/viewer';
import { KuiAuthenticationModule } from '@knora/authentication';

// routing
import { AppRoutingModule } from './app-routing.module';

// Components, Services, Directives and Pipes
import { AppComponent } from './app.component';
import { ResourceComponent } from './resource/resource.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AppInitService } from './app-init.service';
import { ResourcesListComponent } from './resource/resources-list/resources-list.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { ErrorComponent } from './error/error.component';

export function initializeApp(appInitService: AppInitService) {
  return (): Promise<any> => {
    return appInitService.Init();
  };
}

@NgModule({
  declarations: [
    AppComponent,
    ResourceComponent,
    HomepageComponent,
    ResourcesListComponent,
    SearchResultsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MaterialModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    KuiCoreModule,
    KuiAuthenticationModule,
    KuiActionModule,
    KuiSearchModule,
    KuiViewerModule
  ],
  providers: [
    AppInitService,
    {
      provide: APP_INITIALIZER, useFactory: initializeApp, deps: [AppInitService], multi: true
    },
    {
      provide: KuiCoreConfigToken, useFactory: () => AppInitService.coreConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
