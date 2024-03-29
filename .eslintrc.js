/*!
 * @copyright FLYACTS GmbH 2024
 */

require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
        ecmaVersion: 2018,
    },
    plugins: [
        '@typescript-eslint',
        'deprecation',
        'header',
        'import',
        'simple-import-sort',
        'sonarjs',
        'no-only-tests',
        'rxjs',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:rxjs/recommended',
    ],
    rules: {
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            },
        ],
        'max-len': [
            'error',
            { 'code': 120 },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'header/header': [
            2,
            'block',
            [
                '!',
                ' * @copyright FLYACTS GmbH 2024',
                ' ',
            ],
            2,
        ],
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/prefer-for-of': ['error'],
        '@typescript-eslint/unified-signatures': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/require-await': ['error'],
        'no-caller': ['error'],
        'no-new-wrappers': ['error'],
        'no-var': ['error'],
        'no-invalid-this': ['error'],
        'no-shadow': ['off'],
        'no-throw-literal': ['error'],
        'no-unused-expressions': ['error'],
        'eqeqeq': ['error'],
        'eol-last': ['error'],
        'indent': [
            'error',
            4,
            {
                'SwitchCase': 1,
                'MemberExpression': 1,
                'ArrayExpression': 1,
                'ObjectExpression': 1,
            },
        ],
        'import/no-default-export': ['error'],
        'no-trailing-spaces': ['error'],
        'prefer-const': ['error'],
        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'require-await': ['off'],
        '@typescript-eslint/no-floating-promises': ['error'],
        'no-void': ['error'],
        'arrow-body-style': ['error'],
        'spaced-comment': ['error', 'always', { 'exceptions': ['!'] }],
        'no-multiple-empty-lines': ['error'],
        'no-extra-parens': ['error'],
        'one-var': [
            'error',
            'never',
        ],
        '@typescript-eslint/method-signature-style': ['error', 'method'],
        'semi': ['error'],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always',
            },
        ],
        'keyword-spacing': [
            'error',
            { },
        ],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': ['error'],
        'block-spacing': ['error'],
        'comma-spacing': ['error'],
        'computed-property-spacing': ['error'],
        'key-spacing': ['error'],
        'object-curly-spacing': ['error', 'always'],
        'semi-spacing': ['error'],
        'space-in-parens': ['error'],
        'space-infix-ops': ['error'],
        'template-curly-spacing': ['error'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: [
                    'camelCase',
                    'UPPER_CASE',
                ],
            },
        ],
        'no-console': ['warn'],
        'no-debugger': ['error'],
        'no-bitwise': ['error'],
        '@typescript-eslint/no-dynamic-delete': ['error'],
        'no-empty': ['error'],
        '@typescript-eslint/promise-function-async': ['error'],
        '@typescript-eslint/no-for-in-array': ['error'],
        // strict-type-predicates is missing from typescript-eslint:
        // https://github.com/typescript-eslint/typescript-eslint/issues/62
        'import/no-duplicates': ['error'],
        '@typescript-eslint/array-type': ['error', { default: 'array-simple' }],
        '@typescript-eslint/explicit-member-accessibility': ['error'],
        '@typescript-eslint/member-ordering': ['error'],
        // jsdoc-format is not directly available in eslint
        // it may or may not be implementable via https://github.com/gajus/eslint-plugin-jsdoc
        'sonarjs/no-identical-conditions': 'error',
        'sonarjs/no-all-duplicated-branches': 'error',
        'sonarjs/no-collection-size-mischeck': 'error',
        'sonarjs/no-element-overwrite': 'error',
        'sonarjs/no-ignored-return': 'error',
        'sonarjs/no-use-of-empty-return-value': 'error',
        'sonarjs/cognitive-complexity': ['error', 15],
        'sonarjs/no-gratuitous-expressions': 'error',
        'sonarjs/no-duplicate-string': 'error',
        'sonarjs/prefer-immediate-return': 'error',
        'curly': ['error'],
        'no-unsafe-finally': ['error'],
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    'src/*',
                ],
            },
        ],
        'no-return-await': ['error'],
        'simple-import-sort/exports': ['error'],
        'simple-import-sort/imports': ['error'],
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                prev: '*',
                next: 'return',
            },
            {
                blankLine: 'always',
                prev: ['const', 'let'],
                next: '*',
            },
            {
                blankLine: 'any',
                prev: ['const', 'let'],
                next: ['const', 'let'],
            },
        ],
        'no-only-tests/no-only-tests': 'error',
        'rxjs/no-sharereplay': 'off',
        'rxjs/finnish': 'error',
        'deprecation/deprecation': 'error',
    },
};
