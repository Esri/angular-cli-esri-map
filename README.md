# angular-cli-esri-map

This branch contains a simple but complete application that uses the ArcGIS API for JavaScript 4.x, which is an enterprise geospatial API, along with webpack and Angular CLI. It uses arcgis-webpack-plugin to help load ArcGIS JavaScript API modules.

If you would like to create your own Angular CLI project from scratch and incorporate these components, [create a new Angular CLI project](https://cli.angular.io/) and copy the `src/app/` directory of this repo to your new project. You will need to install `arcgis-webpack-plugin`, `@angular-builders/custom-webpack` and `@types/arcgis-js-api` manually, and then you'll need to configure the css in `angular.json` (see the file in this branch for an example).

To use arcgis-webpack-plugin instead of esri-loader to load the ArcGIS API for JavaScript modules, check out the [`@arcgis-webpack-angular`](https://github.com/Esri/angular-cli-esri-map/tree/arcgis-webpack-angular) branch of this repo.

If you don't want to use webpack then use `esri-loader` instead by checking out the [`master`](https://github.com/Esri/angular-cli-esri-map) branch of this repo. `esri-loader` lets you lazy load ArcGIS JavaScript API modules without webpack.

## Dependencies

**Note: This repo is only tested to work with the most current version of the following dependencies.**

- Requires Angular and Angular CLI 10 (latest) [Angular CLI 10](https://github.com/angular/angular-cli)
- [ArcGIS API for JavaScript 4.x](https://developers.arcgis.com/javascript/)
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
  ng serve --open
```

The app will automatically reload if you change any of the source files. You can shut down the development server with a `Control C` in the terminal any time you wish.

### Working with the View's CSS

For best performance, we recommend using the local copy of the css for the ArcGIS API for JavaScript. You can configure this in `angular.json` and choose from any of the [themes](https://developers.arcgis.com/javascript/latest/guide/styling/):

```json
  "styles": [
    "src/styles.scss",
    "node_modules/arcgis-js-api/themes/light/main.css"
  ],
```

### Working with secure ArcGIS services

When working with secure ArcGIS services there is additional code that you'll need to get it to work with webpack. If you encounter an error similar to this: `DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'`, then you'll need to follow the instructions outlined here: https://github.com/Esri/arcgis-webpack-plugin#usage. Add that code to your component and it should resolve the problem. This branch of the repo includes an example that uses workers. 

IMPORTANT: be sure to configure the `DEFAULT_WORKER_URL` property to use the same `Major.minor` version used by the `arcgis-webpack-plugin`. You can confirm that version by looking in the header of `node_modules/@arcgis/webpack-plugin/extras/dojo/dojo.js` and you'll see information similar to this:

```js
  // All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  // See https://js.arcgis.com/4.16/esri/copyright.txt for details.
  //>>built
```

And, you need to match this version using this pattern within your component:

```js
  // Refer to esri-map.component.ts file for a complete version of this code
  const DEFAULT_WORKER_URL = "https://js.arcgis.com/4.16/";
  const DEFAULT_LOADER_URL = `${DEFAULT_WORKER_URL}dojo/dojo-lite.js`;
```

If you are still having problems then open an issue in this repo.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
