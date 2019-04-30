import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ResourcesListComponent } from './resources-list.component';
import { MatIconModule } from '@angular/material';
import { KuiViewerModule } from '@knora/viewer';
import { of } from 'rxjs';
import { AppInitService } from '../../app-init.service';

describe('ResourcesListComponent', () => {
  let component: ResourcesListComponent;
  let fixture: ComponentFixture<ResourcesListComponent>;

  const route = 'lemma';
  const locationStub = {
    back: jasmine.createSpy('back')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatIconModule, KuiViewerModule],
      declarations: [ResourcesListComponent],
      providers: [
        AppInitService,
        { provide: Location, useValue: locationStub },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              url: [
                {
                  path: route,
                }
              ]
            }
          }
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
