# angular-cli-esri-map

This tutorial shows you how to integrate the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript), which is an enterprise geospatial API, using [Angular CLI](https://github.com/angular/angular-cli).

This repo demonstrates implementing a simple, extensible mapping component. Use this repo as a building block for adding in more advanced capabilities.

## Dependencies

This repo is only tested to work with the most current versions of the following dependencies.

**Note: This repo is designed to work with Angular 6+ only.**

* [Angular CLI](https://github.com/angular/angular-cli) 
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) 
* [`esri-loader`](https://github.com/Esri/esri-loader)
* [`arcgis-js-api.d.ts`](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript) Esri TypeScript type definitions

## Build your project

If you are just getting started with Angular development, listed below are the steps for creating a simple Hello World mapping application with Angular CLI.

Once you are comfortable with the getting started steps, feel free to explore building out the app using the rest of the code in this repo.

There is also a getting started video if that's easier: [https://www.youtube.com/watch?v=ZEH9kOwDgx0](https://www.youtube.com/watch?v=ZEH9kOwDgx0). 

### Clone or download this repo

```bash
  git clone https://github.com/andygup/angular-cli-esri-map.git
```

### Install Angular CLI and generate a new project

Create a basic Angular CLI project. Make sure you have Angular CLI installed using standard CSS. See the instructions here: https://cli.angular.io/: 

### Install `esri-loader` and the Esri TypeScript types

You need [`esri-loader`](https://github.com/Esri/esri-loader#usage). It is a low level service that helps load ArcGIS JavaScript API modules (v3.x or v4.x) in non-Dojo applications.

And, the ArcGIS JavaScript TypeScript type definitions can be found [here](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript). 
Note: using the Esri Types is optional. However, you'll need to modify this repos code to work without Types.

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

Copy the contents from the `angular-cli-esri-map/src/app/esri-map` folder into your new `esri-app/src/app/esri-map` directory.

Copy the `app.components` contents from `angular-cli-esri-map/src/app` into your new `esri-app/src/app/` directory.

* In `tsconfig.app.json` add `"types": ["arcgis-js-api"]`.

* In `tsconfig.spec.json` add `"types": ["arcgis-js-api"]`.

### Make sure the mapping app runs

Now run the following command and you should see our mapping appear on the page.

```bash
  ng serve
```

Navigate to http://localhost:4200/ to see the app. The app will automatically reload if you change any of the source files. If you see the mapping app and it runs without errors then you have been successful with getting started. You can go ahead and shutdown `ng serve` with a `Control C` anytime you wish.


## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
