

# Project

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Steps

We generate a monorepo with for two applications, a ionic mobile app, and angular ionic webapp.

## Generate the more

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

Run `nx serve angular-webapp`

## Generate an app

Run `nx generate @nxtend/ionic-angular:app ionic-app`

It creates an app skeleton under apps folder.

In order to run it in a development server

Run `nx serve ionic-app --port 4201`

Reference in https://ionicframework.com/blog/ionic-angular-monorepos-with-nx/

## Generate a library

Run `nx generate @nrwl/angular:library angular-custom-lib` to generate a library.

Run `nx generate @nrwl/angular:component MyComponent --project angular-custom-lib` to generate a component in lib

Libraries are shareable across libraries and applications. They can be imported from `@my-org/angular-custom-lib`.

## Generate a store

`nx g @nrwl/angular:ngrx app --module=apps/angular-webapp/src/app/app.module.ts --root`

`nx g @nrwl/angular:lib angular-central-lib`

`nx g @nrwl/angular:ngrx login --module=libs/angular-central-lib/src/lib/angular-central-lib.module.ts --directory +state/login --defaults`

