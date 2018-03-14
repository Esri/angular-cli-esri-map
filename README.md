# angular-cli-esri-map

This tutorial shows you how to integrate the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript), which is an enterprise geospatial API, using [Angular CLI](https://github.com/angular/angular-cli).

This repo demonstrates implementing a simple, extensible mapping component. Use this repo as a building block for adding in more advanced capabilities.

## Dependencies

This repo has the following dependencies:

* [Angular CLI](https://github.com/angular/angular-cli)
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
* [`esri-loader`](https://github.com/Esri/esri-loader)
* [`arcgis-js-api.d.ts`](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) Esri TypeScript type definitions

## Build your project

If you are just getting started with Angular development, listed below are the steps for creating a simple Hello World mapping application with Angular CLI.

Once you are comfortable with the getting started steps, feel free to explore building out the app using the rest of the `app.component` code.

### Clone or download this repo

```bash
  git clone https://github.com/andygup/angular-cli-esri-map.git
```

### Install Angular CLI and generate a new project

Make sure you have Angular CLI installed. See the instructions here: https://github.com/angular/angular-cli

### Install `esri-loader` and the Esri TypeScript types

We need [`esri-loader`](https://github.com/Esri/esri-loader#usage) because it is a low level service that helps load ArcGIS JavaScript API modules (v3.x or v4.x) in non-Dojo applications.

And, the ArcGIS JavaScript TypeScript type definitions can be found [here](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript).

```bash
  npm install --save esri-loader
  npm install --save @types/arcgis-js-api
```

### Generate the scaffolding for your mapping component

```bash
  ng generate component esri-map

  # or you can also use shorthand
  ng g component esri-map
```

Copy the contents from the `angular-cli-esri-map/src/app/esri-map` folder into the `esri-app/src/app/esri-map` directory.

Add the following code to the bottom of the `app.component.html` file.

```html
  <app-esri-map></app-esri-map>
```

* In `tsconfig.app.json` add `"types": ["arcgis-js-api"]`.

* In `tsconfig.spec.json` add `"types": ["arcgis-js-api"]`.

### Make sure the mapping app runs

Now run the following command and you should see our mapping appear on the page.

```bash
  ng serve
```

Navigate to http://localhost:4200/ to see the app. The app will automatically reload if you change any of the source files. If you see the mapping app and it runs without errors then you have been successful with getting started. You can go ahead and shutdown `ng serve` with a `Control C` anytime you wish.

### Build our spec and run it to make sure everything is good

Copy `app.component.spec.ts` into the `/app` directory.

```typescript
  import { TestBed, async } from '@angular/core/testing';
  import { AppComponent } from './app.component';
  import { EsriMapComponent } from './esri-map/esri-map.component';

  describe('AppComponent', () => {
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [
          AppComponent,
          EsriMapComponent
        ],
      }).compileComponents();
    }));
    it('should create the app', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));
  });
```

Now lets see if the test spec passes by running:

```bash
  ng test
```

## Bonus

Copy all `app.component.*` files into your new Angular CLI project's `/app` directory. Run `ng test` to make sure the code copied over correctly, then run `ng serve`.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
