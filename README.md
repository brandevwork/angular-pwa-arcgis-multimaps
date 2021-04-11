# Angular Arcgis Multimaps

* Angular multi-page app using RxJS operators and ArcGIS API mapping solutions from [Esri](https://www.esri.com/en-us/home) to display maps
*** Note: to open web links in a new window use: _ctrl+click on link_**

## :page_facing_up: Table of contents

* [:zap: Angular RxJS ArcGIS](#zap-angular-rxjs-arcgis)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* [Progressive Web App (PWA)](https://firt.dev/pwa-2021/) capability added. The PWA is still evolving and I believe worth including in an app but needs to be kept up to date
* [ArcGIS API for Javascript CDN](https://developers.arcgis.com/javascript/latest/guide/get-api/#cdn) link in `esri-map` component.
* [ArcGIS for Developers](https://developers.arcgis.com/) offers a full suite of tools and resources to build mapping and analytics solutions. Use ArcGIS APIs to create location-based applications for web, desktop, and mobile devices.
* [Esri - about](https://www.esri.com/en-us/about/about-esri/overview)
* RxJS subscriptions objects used to represent the execution of observables

## :camera: Screenshots

![Example screenshot](./img/map.jpg)

## :signal_strength: Technologies

* [Angular v11](https://angular.io/)
* [Angular Service Workers](https://angular.io/guide/service-worker-getting-started) used to make this a Progressive Web App (PWA)
* [Angular Server-side rendering (SSR) with Angular Universal](https://angular.io/guide/universal)
* [Angular Formcontrol](https://angular.io/api/forms/FormControl)
* [RxJS Library v6](https://angular.io/guide/rx-library) used to handle async operations using observables

## :floppy_disk: Setup

* Install dependencies by running `npm i`
* Run `ng test` for Jasmine tests carried out in Karma console
* Run `npm start` for a dev server. Navigate to `http://localhost:4200/`.
* Run `ng build --prod` for a PWA build folder
* Run `http-server -p 8080 -c-1 dist/angular-arcgis-multimaps` then select `http://127.0.0.1:8080` to see PWA app running on a dev server (`ng serve` does not work)
* Run `npm run build:ssr` to create SSR build files
* The app will automatically reload if you change any of the source files

## :flashlight: Testing

* Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* extract from ``

```typescript

```

## :cool: Features

* tba

## :clipboard: Status & To-Do List

* Status: Basic PWA with SSR (needs testing) and Tailwind CSS
* To-Do: Add content, create web address and add to robots.txt and sitemap.xml

## :clap: Inspiration

* [Youtube: ArcGIS API for JavaScript: Building Apps with Angular](https://www.youtube.com/watch?v=ea4D-qGU0_0)
* [Youtube: ArcGIS API for JavaScript: Using Frameworks](https://www.youtube.com/watch?v=pYlnlQD882w&list=PLahIW2YFPQd7V8IJ0sTo9kMtqn-sCqs40&index=2)
* [Esri config example](https://github.com/Esri/application-base-js)
* [Dev.to: Setup TailwindCSS in Angular the easy way](https://dev.to/angular/setup-tailwindcss-in-angular-the-easy-way-1i5l)

## :envelope: Contact

* Repo created by [ABateman](https://www.andrewbateman.org) - you are welcome to [send me a message](https://andrewbateman.org/contact)