# angular-cli-esri-map

## DEPRECATION NOTICE

> As of ArcGIS API for JavaScript version 4.18 (December 2020) this repository is deprecated. The Angular integration patterns shown here are for versions 4.17 and earlier of the API.

## Why is this repo being deprecated?

At version 4.18 we released ES modules for the API. These new modules will ship alongside the existing AMD modules. This repo relies on patterns for integrating AMD modules, which is how we've shipped the API since version 4.0. 

For more information on which modules you should use consult the SDK's [Introduction to tooling](https://developers.esri.com/javascript/latest/guide/tooling-intro/) Guide page.

The new ES modules also offer intregated support for secure services and they don't require the use of `@arcgis/webpack-plugin` or any additional webpack configuration. There is more information below on using workers with secure services and API versions 4.17 and earlier.

## Where can I find samples using the new ES modules?

Samples using the ES modules are available on the [`jsapi-resources`](https://github.com/Esri/jsapi-resources/tree/master/esm-samples) github repository. Documentation on using the ES modules is in the SDK's [Build with ES modules](https://developers.esri.com/javascript/latest/guide/es-modules/) Guide page.

## What's in this repo?

**This repo is for versions 4.17 and earlier of the ArcGIS API for JavaScript, or if you are using Dojo 1 or RequireJS.**

The `master` branch contains a simple but complete application that uses the ArcGIS API for JavaScript, an enterprise geospatial API, and Angular CLI. It uses esri-loader, a small library that lazy loads ArcGIS JavaScript API modules via CDN using a `loadModules()` method. The esri-loader pattern works with just about any build tool and bundler.

The [`arcgis-webpack-angular`](https://github.com/Esri/angular-cli-esri-map/tree/arcgis-webpack-angular) branch is for local builds with webpack using native `import` statements.

## IE and Edge Legacy support

**IMPORTANT:** Version 4.17 of the ArcGIS API for JavaScript is the last version of the API to support IE11 and Edge Legacy. 

## Run the webpack branch locally

```bash
  git checkout arcgis-webpack-angular
  ng serve --open
```

## Working with the View's CSS

For best performance with local webpack builds, we recommend using the local copy of the css for the ArcGIS API for JavaScript. You can configure this in `angular.json` and choose from any of the [themes](https://developers.arcgis.com/javascript/latest/guide/styling/):

```json
  "styles": [
    "src/styles.scss",
    "node_modules/arcgis-js-api/themes/light/main.css"
  ],
```

## Working with secure ArcGIS services

When working with secure ArcGIS services there is additional code that you'll need to get it to work with webpack. If you encounter an error similar to this: `DOMException: Failed to execute 'importScripts' on 'WorkerGlobalScope'`, then you'll need to follow the instructions outlined here: https://github.com/Esri/arcgis-webpack-plugin#usage. Add that code to your component and it should resolve the problem. This branch of the repo includes an example that uses workers. 

IMPORTANT: be sure to configure the `DEFAULT_WORKER_URL` property to use the same `Major.minor` version used by the `arcgis-webpack-plugin`. You can confirm that version by looking in the header of `node_modules/@arcgis/webpack-plugin/extras/dojo/dojo.js` and you'll see information similar to this:

```js
  // All material copyright ESRI, All Rights Reserved, unless otherwise specified.
  // See https://js.arcgis.com/4.17/esri/copyright.txt for details.
  //>>built
```

And, you need to match this version using this pattern within your component:

```js
  // Refer to esri-map.component.ts file for a complete version of this code
  const DEFAULT_WORKER_URL = "https://js.arcgis.com/4.17/";
  const DEFAULT_LOADER_URL = `${DEFAULT_WORKER_URL}dojo/dojo-lite.js`;
```

If you are still having problems then open an issue in this repo.

## Dependencies

This repo is only tested to work with the most current version of the following dependencies:

- [Angular CLI](https://github.com/angular/angular-cli)
- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
- [@arcgis/webpack-plugin](https://www.npmjs.com/package/@arcgis/webpack-plugin)
- [@angular-builders/custom-webpack](https://www.npmjs.com/package/@angular-builders/custom-webpack)
- Optional: [ArcGIS API for JavaScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) (@types/arcgis-js-api)


## Licensing

Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
