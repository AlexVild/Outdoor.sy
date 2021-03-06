# Outdoorsy

## How to Run

To run the app, clone this repo and navigate to the cloned directory. From there:

1) Run `npm install` to install dependencies
2) Run `npm run start` to build and start the local development server
3) Open a browser and navigate to http://localhost:4200/#
4) You can upload comma or pipe-separated customer files there, with the format:

`firstName,lastName,email,vehicleType,vehicleName,vehicleLength`
or
`firstName|lastName|email|vehicleType|vehicleName|vehicleLength`

Files not following this pattern will not be processed.

## Method

I designed this application with TDD in mind. I decided to use angular as the prompt given to me seemed very much client-sided, and I find that angular is an easy tool to use for whipping up a well-tested UI in a quick amount of time.

I regretted that as soon as I attempted to test file I/O, but I'm still proud of the coverage I obtained.

Also, my bad for making you install megabytes upon megabytes of dependencies to load in a CSV and sort it. But I had fun!

Tests can be run using karma, by running `npm run test`, then navigating to http://localhost:9876/ in chrome. This will display the test runner to you. From there, click `DEBUG` in the top-right, and refresh the page as needed to let the runner run tests at your whim.

Looking at commit history might give some insight into my general process.

## Generated Text
**The remaining text was auto generated by the Angular CLI, and I think still proves valuable.**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

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
