# angular-cli-esri-map

This tutorial explains how to generate an Angular application integrated with the [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript) using the [Angular CLI](https://github.com/angular/angular-cli).

This repo implements a simple, extensible mapping component. Use this repo as a building block for adding more advanced capabilities.

## Dependencies

This repo is only tested to work with the most current versions of the following dependencies.

* [Angular CLI](https://github.com/angular/angular-cli)
* [ArcGIS API for JavaScript](https://developers.arcgis.com/javascript/) 
* [`esri-loader`](https://github.com/Esri/esri-loader): a low level service that helps load ArcGIS JavaScript API modules (v3.x or v4.x) in non-Dojo apps
* [Esri TypeScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript)

Make sure you have [Angular CLI installed using standard CSS](https://cli.angular.io/). 

> **Note:** This repo is designed to work with Angular 6+ only.

## Build your project

If you are just getting started with Angular development, follow the steps below to create a simple _Hello World_ mapping application with Angular CLI, or watch this [getting started video](https://www.youtube.com/watch?v=ZEH9kOwDgx0). 

Once you are comfortable with the getting started steps, feel free to explore building out the app using the rest of the code in this repo.

### Clone or download this repo

```bash
  git clone https://github.com/andygup/angular-cli-esri-map.git
```

### Generate the Angular app

1. Create a basic Angular CLI project. 

2. Install [`esri-loader`](https://github.com/Esri/esri-loader#usage) and the [ArcGIS JavaScript TypeScript type definitions](https://github.com/Esri/jsapi-resources/tree/master/4.x/typescript). 

  ```bash
    npm install --save esri-loader
    npm install --save @types/arcgis-js-api
  ```

  > Note: using the Esri Types is optional. However, you'll need to modify this repos code to work without Types.

3. Generate the mapping component.

  ```bash
    ng generate component esri-map

    # or you can also use shorthand
    ng g component esri-map
  ```

4. Copy the contents from the `angular-cli-esri-map/src/app/esri-map` folder into your new `esri-app/src/app/esri-map` directory.

5. Copy the `app.components` contents from `angular-cli-esri-map/src/app` into your new `esri-app/src/app/` directory.

> If you are using a version less than Angular 7, the following steps maybe required if you want to use the Esri Typescript Types.

6. In `tsconfig.app.json` add `"types": ["arcgis-js-api"]`. 

7. In `tsconfig.spec.json` add `"types": ["arcgis-js-api"]`. 

### Run your app

Now run the following command and you should see our mapping appear on the page.

```bash
  ng serve
```

Navigate to http://localhost:4200/ to see the app. The app will automatically reload if you change any of the source files. 

If you see the mapping app and it runs without errors then you have been successful with getting started. You can go ahead and shutdown `ng serve` with a `Control C` anytime you wish.


## Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/esri/contributing).

## Licensing

Copyright 2019 Esri

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's license.txt file.
