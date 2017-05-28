[![Build Status](https://travis-ci.org/NewtonJoshua/MovieSeatReservation.svg?branch=master)](https://travis-ci.org/NewtonJoshua/MovieSeatReservation)
[![dependencies Status](https://david-dm.org/NewtonJoshua/MovieSeatReservation/status.svg)](https://david-dm.org/NewtonJoshua/MovieSeatReservation)
[![Twitter](https://img.shields.io/twitter/url/https/github.com/NewtonJoshua/MovieSeatReservation.svg?style=social)](https://twitter.com/intent/tweet?text=Wow:&url=%5Bobject%20Object%5D)
# Movie Ticket Reservation

https://reservemovie.newtonjoshua.com/

A small Javascript application to reserve your seats in a movie theatre. The data is stored in Firebase Realtime Database.

## Firebase setup

Refer [FireBase Setup Documentation](https://firebase.google.com/docs/web/setup).

## Scaffolding

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.2.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## PWA & Add to Home Screen

This Web app as a Progressive Web Apps (PWA) is reliable, fast, and engaging. Visit https://reservemovie.newtonjoshua.com/ in any android phones. It'll prompt you to add this web app to your homescreen, making it easy to launch and return to this app. Thanks to Web app install banners.

## Web App Quality

Lighthouse, an open-source automated tool, is used for improving the quality of this web pages.

`npm install -g lighthouse`

 `lighthouse https://reservemovie.newtonjoshua.com/ --view --output-path=./src/docs/lighthouse-results.html`
 
 Take a look at the latest Quality Report below
 
 https://reservemovie.newtonjoshua.com/docs/lighthouse-results.html
 
 Refer [LightHouse Documentation](https://developers.google.com/web/tools/lighthouse/).
 
## Linting

For TypeScript Linting - `ng lint`

For CSS Linting - `csslint src`

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Continuous Integeration

The continuos integeration service, Travis CI, is used for automatically build and deploy this code as you push it to GitHub.

continuous integration : angular cli + firebase + travis ci

The angular cli is used to build the project and firebase is used to host the web app.

Take a look at the Travis CI Dashboard here https://travis-ci.org/NewtonJoshua/MovieSeatReservation

## Documentation

TypeDoc, a documentation generator is used to generate the documentation for this TypeScript project/

`npm install -g typedoc`

`typedoc --module commonjs --includes src/app --out src/docs`

Take a look at the latest documentation generated as a step in the continuous integeration is given below,

https://reservemovie.newtonjoshua.com/docs/globals.html

Refer [TypeDoc Documentation](http://typedoc.org/guides/usage/).

## Deployment

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

FireBase is used to easily deploy and host this app's static assets (HTML, CSS, JavaScript, etc) 

`firebase deploy`

Refer [FireBase Hosting Documentation](https://firebase.google.com/docs/hosting/quickstart).
 

## Time taken

The time taken to develop, test, deploy, document this web app is apprx. 4 hrs, equivalent to 0.5 working days.

## About the developer

Know more @  [NewtonJoshua.com](https://newtonjoshua.com/).

Socialize @ [FaceBook](https://www.facebook.com/NewtonJoshua.A).
