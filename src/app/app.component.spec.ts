import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { MatIconModule, MatToolbarModule } from '@angular/material';
import { KuiSearchModule } from '@knora/search';
import { KuiCoreConfigToken, KuiCoreConfig } from '@knora/core';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule, MatIconModule, MatToolbarModule, KuiSearchModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: KuiCoreConfigToken,
          useValue: KuiCoreConfig
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
