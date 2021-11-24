# FLYACTS GmbH ESLint Config
FLYACTS' custom ESLint Config

## Getting started
### Installation

Latest version as a dev dependency:

```sh
npm i -D [-E] @flyacts/eslint-config
```

## How to use
### Standalone projects
In your `.eslintrc{.*}`:
```json
{
  "extends": "@flyacts/eslint-config",
  "parserOptions": {
    "project": "./tsconfig.*?.json"
  }
}
```

Run the linter: `npx eslint --ext .ts . [--fix]`
### Monorepos

The configuration for monorepos is not as straight forward as for standalone projects. If you need any support feel free to open a new issue.

#### [Nx](https://nx.dev/)
In this guide we will show you how to implement our linter for your Nx monorepo. After this configuration you will be able to lint your whole monorepo (every projects in your `./app/**` directory as well as every library (`./libs/**`). Please note that for this example, our projects within the app directory are angular projects.

The first step is to modify the `.eslintrc.json` in the root of your project:

```json
{
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nrwl/nx"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nrwl/nx/typescript"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    },
    {
      "files": ["*.ts"],
      "extends": ["@flyacts/eslint-config"],
      "parserOptions": {
        "project": ["apps/**/tsconfig.*?.json", "libs/**/tsconfig.*?.json"]
      }
    }
  ]
}
```

In order to avoid any issues, be sure to add the following in every other `.eslintrc.json` (`./app/**/.eslintrc.json` and `./libs/**/.eslintrc.json`):

```json
{
  "extends": ["../../.eslintrc.json"],
  "ignorePatterns": ["!**/*"],
  "overrides": [
    ...,
    {
      "files": ["*.html"],
      "extends": ["plugin:@nrwl/nx/angular-template"],
      "rules": {}
    }
  ]
}
```

Run the linter: `npx nx run-many --all --target=lint [--fix]`

**Overwriting rules**

If you have the need to overwrite some of our in-house rules for your project, you can do it without much fuss and hassle.

You have to know wich rule you want to disable and you have to look up *how* to disable it.

For example, if you want to disable the mandatory [header](https://github.com/Stuk/eslint-plugin-header) rule you would modify your root `.eslintrc.json` as follows:

```json
{
  "root": true,
  "ignorePatterns": ["**/*"],
  "plugins": ["@nrwl/nx"],
  "overrides": [
    {
      "files": ["*.ts", "*.tsx"],
      "extends": ["plugin:@nrwl/nx/typescript"],
      "rules": {}
    },
    {
      "files": ["*.js", "*.jsx"],
      "extends": ["plugin:@nrwl/nx/javascript"],
      "rules": {}
    },
    {
      "files": ["*.ts"],
      "extends": ["@flyacts/eslint-config"],
      "parserOptions": {
        "project": ["apps/**/tsconfig.*?.json", "libs/**/tsconfig.*?.json"]
      },
      "rules": {
        "header/header": [0]
      }
    }
  ]
}
```
