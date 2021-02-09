# MEMO

## How is this repository set up?

1. Create an Nx workspace.
    ```
    npx create-nx-workspace@^10.0.0
    ```
    If you want to use yarn, you need to add globally `create-nx-workspace` with the version specified before running the script.
    ```
    yarn global add create-nx-workspace@^10.0.0
    /path/to/create-nx-workspace
    ```
    Note: regardless whether you use npm(npx) or yarn, you must install npx on your system.

    Select 'oss' option for "What to create in the new workspace?"
2. Import `package-lock.json` and convert it to `yarn.lock`.
    ```
    yarn import
    ```
3. Install typescript-eslint modules instead of TSLint that is deprecated.
    ```
    yarn remove tslint
    yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
    ```
4. Install eslint modules to integrate with prettier.
    ```
    yarn add -D eslint-config-prettier eslint-plugin-prettier
    ```
5. Change the name of the default git branch in `nx.json`.
    ```diff
    "affected": {
    -    "defaultBase": "master"
    +    "defaultBase": "default"
    },
    ```
6. [Install peer dependencies](https://github.com/ZachJW34/nx-plus/tree/master/libs/nuxt#peer-dependencies).
   ```
   yarn add @nrwl/cypress@^10.3.0 @nrwl/jest@^10.3.0 @nrwl/linter@^10.3.0 --dev
   ```
7. [Install `@nx-plus/nuxt`](https://github.com/ZachJW34/nx-plus/tree/master/libs/nuxt#install-plugin) and [generate your app](https://github.com/ZachJW34/nx-plus/tree/master/libs/nuxt#generate-your-app).
    ```
    yarn add @nx-plus/nuxt --dev
    nx g @nx-plus/nuxt:app nuxt-app
    ```
    Note: you must use `yarn nx` to launch Nx CLI, if you do not globally install it.

## How to enable Typescript in unit testing (jest)?

Typescript is not enabled under `packages/nuxt-app/test` by default, and the solution to this is a bit tricky due to IDE specifications.

Many IDEs for now cannot recognize multiple `tsconfig.*.json`. Some of them (at least VS Code) don't either have a support for the file other than `tsconfig.json`. To solve this:

1. Move `packages/*/tsconfig.spec.json` under `test/` in the package directory, and rename it to `tsconfig.json`.
2. Correct the path to `tsconfig.json` in `jest.config.js`.
    ```diff
    globals: {
    -  'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' },
    -  'vue-jest': { tsConfig: 'packages/nuxt-app/tsconfig.spec.json' },
    +  'ts-jest': { tsConfig: '<rootDir>/test/tsconfig.json' },
    +  'vue-jest': { tsConfig: 'packages/nuxt-app/test/tsconfig.json' },
    },
    ```
3. Add simple type definition for `*.vue`, as in `packages/nuxt-app/test/shims-sfc.d.ts`, to let the TS compiler interpret vue components correctly.
    ```ts
    declare module '*.vue' {
      import Vue from 'vue'
      export default Vue
    }
    ```
