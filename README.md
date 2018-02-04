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
