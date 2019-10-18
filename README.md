# angular-cli-esri-map

This branch contains a simple but complete application that uses the ArcGIS API for JavaScript, an enterprise geospatial API, webpack and Angular CLI. It uses arcgis-webpack-plugin to help load ArcGIS JavaScript API modules (v3.x or v4.x) in non-ArcGIS applications.

If you would like to create your own Angular CLI project from scratch and incorporate these components, [create a new Angular CLI project](https://cli.angular.io/) and copy the `src/app/` directory of this repo to your new project. You will need to install `arcgis-webpack-plugin`, `@angular-builders/custom-webpack` and `@types/arcgis-js-api` manually.

To use `esri-loader` instead of `arcgis-webpack-plugin` checkout the [`master`](https://github.com/Esri/angular-cli-esri-map) branch of this repo.  

## Dependencies

**Note: This repo is only tested to work with the most current version of the following dependencies.**

- Requires Angular and Angular CLI 8 (latest) [Angular CLI 8](https://github.com/angular/angular-cli)
- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
- [arcgis-webpack-plugin](https://github.com/Esri/arcgis-webpack-plugin)
- [angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)
- [ArcGIS API for JavaScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) (@types/arcgis-js-api)

## Build your project

### Clone or download this repo

```bash
  git clone https://github.com/Esri/angular-cli-esri-map.git
```

### Install dependencies

```bash
  cd angular-cli-esri-map
  npm install
```

## Working with Angular CLI

### Run the application locally

```bash
  git checkout arcgis-webpack-angular
  ng serve
```

Navigate to http://localhost:4200 to see the app running. The app will automatically reload if you change any of the source files. You can shut down the development server with a `Control C` any time you wish.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
