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

Then create a `tsconfig.json` containing options for how TypeScript will compile your source files. See [tsconfig.json documentation](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) and [TypeScript Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for reference.

Since we're targeting Electron, which comes with a modern version of Chromium, we should be OK with using `"es6"` as target.

We do however need to set `"module": "CommonJS"` since it seems Node is still not good at handling ES6 modules. This option converts any `import` statements in the TypeScript sources to `require` statements in the generated JavaScript.

## 4. Use TypeScript

Rename `main.js` to `main.ts` and try:

`./node_modules/.bin/tsc`

That should compile `main.ts` into a `main.js` file, giving us type errors along the way. Let's fix the type errors and also add the compilation step as a script to `package.json`.

## 5. Configure input and output directories

To keep things tidy, let's modify `tsconfig.json` to look for source files under `src` and to put generated files under `dist`. Since TypeScript only compiles the `.ts` files, we need a separate build step to also copy the static assets over.

## 6. Add TSLint

`npm install tslint --save-dev`
`./node_modules/.bin/tslint --init`

That creates a tslint.json which we can then configure, see [TSLint core rules](https://palantir.github.io/tslint/rules/).

For a more complete set of rules, we also add the [ESLint rules](https://github.com/buzinas/tslint-eslint-rules#rules-copied-from-the-eslint-website):

`npm install tslint-eslint-rules --save-dev`

We add these to package.json as usual, including a `lint:fix` script for auto-fixing linter problems.
