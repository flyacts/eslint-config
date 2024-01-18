# FLYACTS GmbH ESLint Config
FLYACTS' custom ESLint Config

---
1. [Getting started](#gettingStarted)
    * [Prerequisites](#prerequisites)
    * [Installation](#installation)
2. [How to use](#howToUse)
    * [Standalone projects](#standaloneProjects)
    * [Monorepos](#monorepos)
        * [Nx](#nx)
3. [Rules](#rules)
    * [List](#list)
    * [Overwriting rules](#overwritingRules)
4. [License](#license)
---

## <a id="gettingStarted"></a> Getting started
### <a id="prerequisites"></a> Prerequisites

* Node.js >=12.x
* ESLint 5.x, 6.x, 7.x or 8.x

### <a id="installation"></a> Installation
* If ESLint isn't configured for your project:
    * either follow the [official instructions](https://github.com/eslint/eslint#installation-and-usage)
    * or install following dependencies manually:
    ```sh
    npm install --save-dev --save-exact eslint@8.3.0 @typescript-eslint/eslint-plugin@5.5.0 @typescript-eslint/parser@5.5.0
    ```
    and create a `.eslintrc.js` in the root of your project
    > Note: they are currently some issues with the latest eslint version, please use the versions above as max versions numbers for now

* Install `@flyacts/eslint-config` as a dev dependency for your project:

```sh
npm install --save-dev [--save-exact] @flyacts/eslint-config
```
> Use the --save-exact flag if you want to install a fixed/specific version of this package

## <a id="howToUse"></a> How to use
### <a id="standaloneProjects"></a> Standalone projects
In your `.eslintrc.js`:

```js
module.exports = {
  "root": true,
  "ignorePatterns": ["!**/*"],
  "overrides": [
    {
      "files": ["*.ts"],
      "extends": ["@flyacts/eslint-config"],
      "parserOptions": {
          "project": ["./tsconfig.json"],
          "tsconfigRootDir": __dirname
      }
    }
  ]
};
```

Run the linter: `npx eslint --ext .ts . [--fix]`

### <a id="monorepos"></a> Monorepos
The configuration for monorepos is not as straight forward as for standalone projects. If you need any support feel free to open a new issue.

#### <a id="nx"></a> [Nx](https://nx.dev/)
In this guide we will show you how to implement our linter for your Nx monorepo. After this configuration you will be able to lint your whole monorepo (every projects in your `./app/**` directory as well as every library (`./libs/**`). Please note that for this example, our projects within the app directory are angular projects.

The first step is to modify the `.eslintrc.js` in the root of your project:

```js
module.exports = {
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
                "project": ["apps/**/tsconfig.*?.json", "libs/**/tsconfig.*?.json"],
                "tsconfigRootDir": __dirname
            }
        }
    ]
}
```

Run the linter: `npx nx run-many --all --target=lint [--fix]`
## <a id="rules"></a> Rules

We use a combination of native ESLint rules coupled to a number of plugins ([@typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [eslint-plugin-header](https://github.com/Stuk/eslint-plugin-header), [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import), [eslint-plugin-no-only-tests](https://github.com/levibuzolic/eslint-plugin-no-only-tests), [eslint-plugin-simple-import-sort](https://github.com/lydell/eslint-plugin-simple-import-sort), [eslint-plugin-sonarjs](https://github.com/SonarSource/eslint-plugin-sonarjs) and [eslint-plugin-rxjs](https://github.com/cartant/eslint-plugin-rxjs)).

### <a id="list"></a> List
* Enforces the consistent use of either backticks, double, or single quotes (`quotes`)
* Enforces a maximum line length (`max-len`)
* Aims to ensure that the values returned from a module are of the expected type (`@typescript-eslint/explicit-module-boundary-types`)
* Ensure that files begin with given comment (`header/header`)
* Aims to standardize the way overloaded members are organized (`@typescript-eslint/adjacent-overload-signatures`)
* Prefer a ‘for-of’ loop over a standard ‘for’ loop if the index is only used to access the array being iterated (`@typescript-eslint/prefer-for-of`)
* Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter (`@typescript-eslint/unified-signatures`)
* Disallow usage of the `any` type (`@typescript-eslint/no-explicit-any`)
* Requires an explicit type to be declared on a catch clause variable (`@typescript-eslint/no-implicit-any-catch`)
* Disallow variable declarations from shadowing variables declared in the outer scope (`@typescript-eslint/no-shadow`)
* Disallow async functions which have no `await` expression (`@typescript-eslint/require-await`)
* Aims at discouraging the use of deprecated and sub-optimal code by disallowing the use of `arguments.caller` and `arguments.callee`. As such, it will warn when `arguments.caller` and `arguments.callee` are used (`no-caller`)
* Aims to eliminate the use of `String`, `Number`, and `Boolean` with the `new` operator. As such, it warns whenever it sees `new String`, `new Number`, or `new Boolean` (`no-new-wrappers`)
* Aims at discouraging the use of `var` and encouraging the use of `const` or `let` instead (`no-var`)
* Aims to flag usage of `this` keywords outside of classes or class-like objects (`no-invalid-this`)
* Aims to eliminate shadowed variable declarations (`no-shadow`)
* Aims at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an `Error` object (`no-throw-literal`)
* Aims to eliminate unused expressions which have no effect on the state of the program (`no-unused-expressions`)
* Aims at eliminating the type-unsafe equality operators (`eqeqeq`)
* Enforces at least one newline at the end of non-empty files (`eol-last`)
* Enforces a consistent indentation style (`indent`)
* Prohibit default exports (`import/no-default-export`)
* Disallows trailing whitespace (spaces, tabs, and other Unicode whitespace characters) at the end of lines (`no-trailing-spaces`)
* Aims at flagging variables that are declared using `let` keyword, but never reassigned after the initial assignment (`prefer-const`)
* Enforces consistent use of trailing commas in object and array literals (`comma-dangle`)
* Warns async functions which have no await expression (`require-await`)
* Requires Promise-like values to be handled appropriately (`@typescript-eslint/no-floating-promises`)
* Aims to eliminate use of void operator (`no-void`)
* Enforces or disallows the use of braces around arrow function body (`arrow-body-style`)
* Enforces consistency of spacing after the start of a comment `//` or `/*` (`spaced-comment`)
* Aims to reduce the scrolling required when reading through your code. It will warn when the maximum amount of empty lines has been exceeded (`no-multiple-empty-lines`)
* Restricts the use of parentheses to only where they are necessary (`no-extra-parens`)
* Enforces variables to be declared either together or separately per function (for `var`) or block (for `let` and `const`) scope (`one-var`)
* Enforces using a particular method signature syntax (`@typescript-eslint/method-signature-style`)
* Enforces consistent use of semicolons (`semi`)
* Aims to enforce consistent spacing before function parentheses and as such, will warn whenever whitespace doesn't match the preferences specified (`space-before-function-paren`)
* Enforces consistent spacing around keywords and keyword-like tokens (`keyword-spacing`)
* Enforces consistent spacing inside array brackets (`array-bracket-spacing`)
* Requires space before/after arrow function's arrow (`arrow-spacing`)
* Enforces consistent spacing inside an open block token and the next token on the same line. This rule also enforces consistent spacing inside a close block token and previous token on the same line (`block-spacing`)
* Enforces consistent spacing before and after commas in variable declarations, array literals, object literals, function parameters, and sequences (`comma-spacing`)
* Enforces consistent spacing inside computed property brackets (`computed-property-spacing`)
* Enforces consistent spacing between keys and values in object literal properties. In the case of long lines, it is acceptable to add a new line wherever whitespace is allowed (`key-spacing`)
* Enforces consistent spacing inside braces of object literals, destructuring assignments, and import/export specifiers (`object-curly-spacing`)
* Enforces spacing before and after semicolons (`semi-spacing`)
* Enforces consistent spacing directly inside of parentheses, by disallowing or requiring one or more spaces to the right of `(` and to the left of `)` (`space-in-parens`)
* Aims at ensuring there are spaces around infix operators (`space-infix-ops`)
* Aims to maintain consistency around the spacing inside of template literals (`template-curly-spacing`)
* Enforces naming conventions for everything across a codebase (`@typescript-eslint/naming-convention`)
* Disallows calls or assignments to methods of the `console` object (`no-console`)
* Disallows `debugger` statements (`no-debugger`)
* Disallows bitwise operators (`no-bitwise`)
* Disallows the delete operator with computed key expressions (`@typescript-eslint/no-dynamic-delete`)
* Disallows empty block statements (`no-empty`)
* Requires any function or method that returns a Promise to be marked async (`@typescript-eslint/promise-function-async`)
* Prohibits iterating over an array with a for-in loop (`@typescript-eslint/no-for-in-array`)
* Report repeated import of the same module in multiple places (`import/no-duplicates`)
* Requires using either `T[]` or `Array<T>` for arrays (`@typescript-eslint/array-type`)
* Requires explicit accessibility modifiers on class properties and methods (`@typescript-eslint/explicit-member-accessibility`)
* Requires a consistent member declaration order (`@typescript-eslint/member-ordering`)
* Related "if/else if" statements should not have the same conditions (`sonarjs/no-identical-conditions`)
* All branches in a conditional structure should not have exactly the same implementation (`sonarjs/no-all-duplicated-branches`)
* Collection sizes and array length comparisons should make sense (`sonarjs/no-collection-size-mischeck`) (**uses-types**)
* Collection elements should not be replaced unconditionally (`sonarjs/no-element-overwrite`)
* Return values from functions without side effects should not be ignored (`sonarjs/no-ignored-return`) (**uses-types**)
* (`sonarjs/no-use-of-empty-return-value`)
* Cognitive Complexity of functions should not be too high (`sonarjs/cognitive-complexity`)
* Boolean expressions should not be gratuitous (`sonarjs/no-gratuitous-expressions`)
* String literals should not be duplicated (`sonarjs/no-duplicate-string`)
* Local variables should not be declared and then immediately returned or thrown (`sonarjs/prefer-immediate-return`)
* Aims at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces. It will warn when it encounters blocks that omit curly braces (`curly`)
* Disallows `return`, `throw`, `break`, and `continue` statements inside `finally` blocks. It allows indirect usages, such as in `function` or `class` definitions (`no-unsafe-finally`)
* Allows you to specify imports that you don't want to use in your application (`no-restricted-imports`)
* Aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of `async function` (`no-return-await`)
* Sequences of re-exports (exports with `from`) are sorted. Other types of exports are not reordered (`simple-import-sort/exports`)
* Sorts and groups chunks of imports (`simple-import-sort/imports`)
* Requires or disallows padding lines between statements (`padding-line-between-statements`)
* Prevents you from committing focused (`.only`) tests to CI, which may prevent your entire test suite from running (`no-only-tests/no-only-tests`)
* Enforces the use of Finnish notation (`rxjs/finnish`)
* Uses the [recommended eslint-plugin-rxjs rules](https://github.com/cartant/eslint-plugin-rxjs#rules)
* Disallow the use of deprecated code (`deprecation/deprecation`)

### <a id="overwritingRules"></a> Overwriting rules
If you have the need to overwrite (or disable) some of our in-house rules for your project, you can do it without much fuss and hassle.

You have to know which rule you want to disable and you have to look up *how* to disable it.

For example, if you want to disable the mandatory [header](https://github.com/Stuk/eslint-plugin-header) rule you would modify your root `.eslintrc.js` as follows:

```js
module.exports = {
    "extends": "@flyacts/eslint-config",
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
    },
    "rules": {
        "header/header": [0]
    }
}
```

## License
MIT
