

# Project

This project was generated using [Nx](https://nx.dev).

<p style="text-align: center;"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="450"></p>

🔎 **Powerful, Extensible Dev Tools**

## Steps

We generate a monorepo with for two applications, a ionic mobile app, and angular ionic webapp.

## Generate the more

npx create-nx-workspace my-org --preset=empty

## Install and initialize the nxtend plugins

> npm install --save-dev @nxtend/ionic-angular

> nx generate @nxtend/ionic-angular:init

## Generate and run a sample web applications

> nx generate @nxtend/ionic-angular:application angular

It creates an angular webapp skeleton under apps folder.

The reference is
https://nxtend.dev/docs/ionic-angular/getting-started

In order to run it in a development server

> nx serve angular-webapp

## Generate an app

> nx generate @nxtend/ionic-angular:app ionic-app

It creates an app skeleton under apps folder.

In order to run it in a development server

> nx serve ionic-app --port 4201

Reference in https://ionicframework.com/blog/ionic-angular-monorepos-with-nx/

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@my-org/mylib`.

