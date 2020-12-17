# angular-cli-esri-map

## DEPRECATION NOTICE

> As of ArcGIS API for JavaScript version 4.18 (December 2020) this repository is deprecated. The Angular integration patterns shown here are for verions 4.17 and earlier of the API.

## Why is this repo being deprecated?

At version 4.18 we released ES modules for the API that will ship alongside the existing AMD modules. This repo relies on patterns for integrating AMD modules, which is how we've shipped the API since version 4.0. 

For more information on which modules you should use consult the SDK's [Introduction to tooling](https://developers.esri.com/javascript/latest/guide/tooling-intro/) Guide page.

## Where can I find samples using the new ES modules?

Samples using the ES modules are available on the [`jsapi-resources`](https://github.com/Esri/jsapi-resources/tree/master/esm-samples) github repository. Documentation on using the ES modules is in the SDK's [Build with ES modules](https://developers.esri.com/javascript/latest/guide/es-modules/) Guide page.

## What's in this repo?

**This repo is for versions 4.17 and earlier of the ArcGIS API for JavaScript, or if you are using Dojo 1 or RequireJS.**

The `master` branch contains a simple but complete application that uses the ArcGIS API for JavaScript, an enterprise geospatial API, and Angular CLI. It uses esri-loader, a small library that lazy loads ArcGIS JavaScript API modules via CDN using a `loadModules()` method. The esri-loader pattern works with just about any build tool and bundler.

The [`@arcgis-webpack-angular`](https://github.com/Esri/angular-cli-esri-map/tree/arcgis-webpack-angular) branch is for local builds using native `import` statements.

## IE and Edge Legacy support

**IMPORTANT:** Version 4.17 of the ArcGIS API for JavaScript is the last version of the API to support IE11 and Edge Legacy. 

## Dependencies

This repo is only tested to work with the most current version of the following dependencies:

- [Angular CLI](https://github.com/angular/angular-cli)
- [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/)
- [esri-loader](https://github.com/Esri/esri-loader)
- Optional: [ArcGIS API for JavaScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) (@types/arcgis-js-api)


## Licensing

Copyright 2020 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
