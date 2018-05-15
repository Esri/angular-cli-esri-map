import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsriMapComponent } from './esri-map.component';
import { AppComponent } from '../app.component';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  let app: any; // debugElement.componentInstance

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsriMapComponent]
    })
      .compileComponents();
    fixture = TestBed.createComponent(EsriMapComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('basemap has a default value', () => {
    expect(app.basemap).toEqual(jasmine.any(String));
  });

  it('center has a default value', () => {
    expect(app.center).toEqual(jasmine.any(Array));
  });

  it('zoom has a default value', () => {
    console.log('center ' + app.zoom);
    expect(app.zoom).toBeGreaterThanOrEqual(0);
    expect(app.zoom).toBeLessThanOrEqual(24);
  });

  it('mapLoaded event fired', (done) => {
    app.mapLoaded.subscribe(g => {
      expect(g).toBeTruthy();
      done();
    });
  });
});
