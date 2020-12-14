import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { EsriLoaderService } from "../esri-loader.service";

import { EsriMapComponent } from "./esri-map.component";

export class MockEsriLoaderService {
  constructor() {}
  loadModules: () => void;
}

export class MockEsriMap {
  constructor() {}
}

export class MockEsriMapView {
  ready = false;
  constructor() {}
  when() {
    this.ready = true;
    return Promise.resolve();
  }
}

describe("EsriMapComponent", () => {
  let component: EsriMapComponent;
  let fixture: ComponentFixture<EsriMapComponent>;
  let app: any; // debugElement.componentInstance
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EsriMapComponent],
      providers: [
        { provide: EsriLoaderService, useValue: new MockEsriLoaderService() }
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(EsriMapComponent);
    app = fixture.debugElement.componentInstance;
    component = fixture.componentInstance;
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should initialize component", async () => {
    app.esriLoaderService.loadModules = () => {
      return [MockEsriMap, MockEsriMapView];
    };
    const initializeMapSpy = spyOn(app, "initializeMap").and.callThrough();
    spyOn(app.mapLoadedEvent, "emit").and.callThrough();

    await component.ngOnInit();

    expect(initializeMapSpy).toHaveBeenCalledTimes(1);
    expect(app._view).not.toBe(null);
    expect(app._loaded).toBe(app._view.ready);
    expect(app.mapLoadedEvent.emit).toHaveBeenCalledWith(true);
  });

  it("should catch error in map initialization", async () => {
    const errorMessage = "initializeMap() error!";
    app.esriLoaderService.loadModules = () => { throw new Error(errorMessage); };

    spyOn(console, "log");

    await component.ngOnInit();

    expect(console.log).toHaveBeenCalledWith("EsriLoader: ", jasmine.objectContaining({ message: errorMessage }));
  });

  it("should verify default values", () => {
    expect(app.basemap).toEqual(jasmine.any(String));
    expect(app.center).toEqual(jasmine.any(Array));
    expect(app.zoom).toEqual(jasmine.any(Number));
    expect(app.mapLoaded).toEqual(false);
  });

  it("should destroy the map view", () => {
    app._view = { container: "foo" };

    component.ngOnDestroy();

    expect(app._view.container).toBe(null);
  });
});
