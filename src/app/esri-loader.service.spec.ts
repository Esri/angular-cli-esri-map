import { TestBed } from "@angular/core/testing";

import { EsriLoaderService } from "./esri-loader.service";

describe("EsriLoaderService", () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it("should be created", () => {
    const service: EsriLoaderService = TestBed.get(EsriLoaderService);
    expect(service).toBeTruthy();
  });
});
