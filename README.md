# Angular Tutorial 1
https://www.youtube.com/watch?v=unWCXyBOy8E&t=287s

## Initializing
**Initializing app**
- ```ng new ToDoList```       (created Project)
- ```cd ToDoList/```
- ```ng generate component page-list```   (short: `ng g c` ...  generate first component)
- ```ng g c _template/template-xxx```  (shared stuff like templates)
- ```ng generate service _service/data``` (`ng g s` ...functions accessible for other components)
- ```ng generate interface _interface/todo``` (`ng g i` ...interfaces)
- ```ng serve --open```  (open application)

**When pulling / cloning project:**
- npm install (based on package.json)
- npm ci (based on package-lock.json) ...for 

## Structure
- src/style.sass        ... style stuff
- src/assets/           ... all external stuff (fonts, pictures, ...)
- src/sass/             ... manually created (css style stuff)
- src/app/              ... code (components, services, ...)
- src/app/app.module.ts ... important! 



# Initial README content

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
¶
