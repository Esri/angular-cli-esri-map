# angular-cli-esri-map

This branch contains a simple but complete application that uses the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript), an enterprise geospatial API, and [Angular CLI](https://github.com/angular/angular-cli). It uses `esri-loader`, a small library that helps load ArcGIS JavaScript API modules (v3.x or v4.x) in non-Dojo applications.

To use `arcgis-webpack-plugin` instead of `esri-loader` to load the ArcGIS API for JavaScript modules, check out the `@TODO ADD BRANCH NAME` branch of this repo.

If you would like to start your own Angular cli project from scratch and incorporate these components, work from the `master` branch of this repository and follow the README instructions.

## Dependencies

This repo is only tested to work with the most current versions of the following dependencies.

**Note: This repo is designed to work with Angular 6+ only.**

- [Angular CLI](https://github.com/angular/angular-cli)
- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
- [`esri-loader`](https://github.com/Esri/esri-loader)
- [`arcgis-js-api.d.ts`](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) Esri TypeScript type definitions

## Build your project

### Clone or download this repo

```bash
  git clone https://github.com/andygup/angular-cli-esri-map.git
```

### Install dependencies

```bash
  cd angular-cli-esri-map/cli-app
  npm install
```

### Run the application

```bash
  ng serve
```

Navigate to http://localhost:4200 to see the app running. The app will automatically reload if you change any of the source files. If you see the mapping app and it runs without errors then you have been successful with getting started. You can go ahead and shutdown `ng serve` with a `Control C` anytime you wish.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
