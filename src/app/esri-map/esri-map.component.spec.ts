import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EsriMapComponent } from './esri-map.component';

describe('EsriMapComponent', () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  let app: any; // debugElement.componentInstance

  beforeEach(waitForAsync(() => {
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

  it('verify default values', () => {
    expect(app.basemap).toEqual(jasmine.any(String));
    expect(app.center).toEqual(jasmine.any(Array));
    expect(app.zoom).toEqual(jasmine.any(Number));
    expect(app.mapLoaded).toEqual(false);
  });

});
