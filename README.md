Az oldal működéséhez ki kell adni a

json-server --watch server/heroes.json

parancsot a terminálban, hogy a szerver elinduljon.

Ahogy a nyitóoldalon is látszik, ez az oldal azt a célt szolgálja, hogy menedzseljük a Heroes of the Storm hőseinket.

Be lehet állítani, hogy bent van-e a könyvtárunkban, fel lehet venni újabb hőst, és a szintjét is kalibrálhatjuk.

Mivel kérték, hogy legyen benne egy "DELETE" metódus is, így beleraktam, az indoklás pedig csak egy vicces gondolat a "home" oldalon, hogy ha kitörlöd, akkor nem kapod ezt a hőst ki a ranked módban a játékon belül ellenfélként ( ha ezt meg lehetne csinálni egy oldalon gamerek százezrei imádnának :) ).

A feladat még kérte, hogy reszponzív legyen, erre törekedtem, de a "list" oldalon kértet, miszerint egy sorban négy legyen nem készítettem el, mert nagyon tetszik így az oldal. Azon kívül mindenhol törekedtem rá, hogy bármilyen eszközön nézve szép ( de leginkább használható ) legyen.

Bootstrap-en kívül semmit sem használtam az elkészítéséhez, a designe-t a hivatalos oldal inspirálta.

Ha esetleg a hősök száma olyan nagy lenne, hogy Observable-val akadozna az oldal működése, akkor kikommentezve a BehaviorSubject CRUD-ja is megtalálható a serviceben.

# EgyeniProjekt

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
