import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { AppInitService } from '../app-init.service';
import { MatCheckboxModule, MatDividerModule, MatIconModule, MatTabsModule, MatToolbarModule, MatListModule } from '@angular/material';
import { ResourceComponent } from './resource.component';
import { ProgressIndicatorComponent, KeyPipe } from '@knora/action';
import { KuiCoreConfigToken, KuiCoreConfig } from '@knora/core';
import {
  BooleanValueComponent,
  ColorValueComponent,
  DateValueComponent,
  DecimalValueComponent,
  GeometryValueComponent,
  IntegerValueComponent,
  IntervalValueComponent,
  LinkValueComponent,
  ListValueComponent,
  TextValueAsStringComponent,
  TextValueAsHtmlComponent,
  TextValueAsXmlComponent,
  TextfileValueComponent,
  UriValueComponent,
  StillImageComponent
} from '@knora/viewer';

describe('ResourceComponent', () => {
  let component: ResourceComponent;
  let fixture: ComponentFixture<ResourceComponent>;

  //const iri = 'http%3A%2F%2Frdfh.ch%2F0801%2FJth8ORQUR0aTOpuNHaIUzA';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MatCheckboxModule,
        MatDividerModule,
        MatIconModule,
        MatTabsModule,
        MatToolbarModule,
        MatListModule
      ],
      declarations: [
        ResourceComponent,
        ProgressIndicatorComponent,
        KeyPipe,
        BooleanValueComponent,
        ColorValueComponent,
        DateValueComponent,
        DecimalValueComponent,
        GeometryValueComponent,
        IntegerValueComponent,
        IntervalValueComponent,
        LinkValueComponent,
        ListValueComponent,
        TextValueAsStringComponent,
        TextValueAsHtmlComponent,
        TextValueAsXmlComponent,
        TextfileValueComponent,
        UriValueComponent,
        StillImageComponent
      ],
      providers: [
        AppInitService,
        HttpClient,
        {
          provide: KuiCoreConfigToken,
          useValue: KuiCoreConfig
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

