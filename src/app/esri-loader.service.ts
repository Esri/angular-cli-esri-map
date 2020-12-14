import { Injectable } from "@angular/core";
import { loadModules } from "esri-loader";

@Injectable({
  providedIn: "root",
})
export class EsriLoaderService {
  constructor() {}

  public async loadModules(modules: string[]): Promise<any[]> {
    return await loadModules(modules);
  }

  public getInstance<T>(type: new (paramObj: any) => T, paramObj?: any): T {
    return new type(paramObj);
  }
}
