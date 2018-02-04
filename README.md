# TypeScript Electron Boilerplate
A step-by-step setup of Electron with TypeScript and VSCode

## 1. Initialise a Node.js project

`npm init`

## 2. Install Electron

The npm package used to be called `electron-prebuilt`, but the correct name is now just `electron`.

`npm install electron --save-dev --save-exact`

`--save-exact` is recommended by the Electron team to avoid version conflicts.

## 3. Create a main script

Create the file `main.js` with the standard contents for initialising an Electron app window. Also create an `index.html` containing the initial view for the app window.

Test the app by running:

`./node_modules/.bin/electron ./main.js`

This should display a native app window with some version info.

To avoid having to type the path to the Electron binary all the time, we add an NPM run script allowing us to start the app by doing:

`npm start`

## 3. Install TypeScript

`npm install typescript --save-dev`

Then create a `tsconfig.json` containing options for how TypeScript will compile your source files.

Since we're targeting Electron, which comes with a modern version of Chromium, we should be OK with using `"es6"` as target.

We do however need to set `"module": "CommonJS"` since it seems Node is still not good at handling ES6 modules. This option converts any `import` statements in the TypeScript sources to `require` statements in the generated JavaScript.

## 4. Use TypeScript

Rename `main.js` to `main.ts` and try:

`./node_modules/.bin/tsc`

That should compile `main.ts` into a `main.js` file, giving us type errors along the way. Let's fix the type errors and also add the compilation step as a script to `package.json`.
