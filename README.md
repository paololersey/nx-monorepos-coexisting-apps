

# Project

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Steps

We generate a monorepo with for two applications, a ionic mobile app, and angular ionic webapp.

## Generate the monorepo

Run `npx create-nx-workspace my-org --preset=empty`

## Install and initialize the nxtend plugins

Run `npm install --save-dev @nxtend/ionic-angular`

Run `nx generate @nxtend/ionic-angular:init`

## Generate and run a sample web applications

Run `nx generate @nxtend/ionic-angular:application angular`

It creates an angular webapp skeleton under apps folder.

The reference is
https://nxtend.dev/docs/ionic-angular/getting-started

In order to run it in a development server

Run `nx serve angular-webapp --proxy-config ./proxy.json` 
The proxy config is needed to set the base url for backend

## Generate an app

Run `nx generate @nxtend/ionic-angular:app ionic-app`

It creates an app skeleton under apps folder.

In order to run it in a development server

Run `nx serve ionic-app --port 4201`

Reference in https://ionicframework.com/blog/ionic-angular-monorepos-with-nx/

## Generate a custom library

Run `nx generate @nrwl/angular:library angular-custom-lib` to generate a library.

Run `nx generate @nrwl/angular:component MyComponent --project angular-custom-lib` to generate a component in lib

Libraries are shareable across libraries and applications. They can be imported from `@my-org/angular-custom-lib`.

## Generate a store 

`nx g @nrwl/angular:ngrx app --module=apps/angular-webapp/src/app/app.module.ts --root`
Ref. : https://nx.dev/latest/angular/guides/misc-ngrx

## Generate a library

`nx g @nrwl/angular:lib angular-central-lib`

`nx g @nrwl/angular:ngrx login --module=libs/angular-central-lib/src/lib/angular-central-lib.module.ts --directory +state/login --no-interactive` -> add a login state handling for login to angular-central-lib

`nx generate @schematics/angular:module login` in order to generate a login module under the chosen app directory

## To run a server respoding to the login request

`npm run server`: start a server to localhost:9000