/*!
 * @copyright FLYACTS GmbH 2021
 */
module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'ordered-imports',
        'header',
        'import',
    ],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:ordered-imports/recommended',
    ],
    rules: {
        quotes: [
            'error',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true,
            }
        ],
        'max-len': [
            'error',
            { 'code': 120 },
        ],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        'header/header': [
            2,
            '.license-header.ts',
        ],
        '@typescript-eslint/adjacent-overload-signatures': ['error'],
        '@typescript-eslint/prefer-for-of': ['error'],
        '@typescript-eslint/unified-signatures': ['error'],
        '@typescript-eslint/no-explicit-any': ['error'],
        '@typescript-eslint/no-implicit-any-catch': ['error'],
        'no-caller': ['error'],
        'no-new-wrappers': ['error'],
        'no-var': ['error'],
        'no-invalid-this': ['error'],
        'no-shadow': ['error'],
        'no-throw-literal': ['error'],
        'no-unused-expressions': ['error'],
        'eqeqeq': ['error'],
        'eol-last': ['error'],
        'indent': ['error', 4],
        'import/no-default-export': ['error'],
        'no-trailing-spaces': ['error'],
        'prefer-const': ['error'],
        'comma-dangle': ['error', 'only-multiline'],
        'require-await': ['error'],
        '@typescript-eslint/no-floating-promises': ['error'],
        'no-void': ['error'],
        'arrow-return-shorthand': ['error', 'as-needed'],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'class',
                format: ['PascalCase']
            },
            {
                selector: 'variable',
                format: ['camelCase', 'UPPER_CASE'],
                leadingUnderscore: 'allow',
            }
        ],
        'spaced-comment': ['error'],
        'no-multiple-empty-lines': ['error'],
        'no-extra-parens': ['error'],
        'one-var': ['error'],
        'method-signature-style': ['error', 'method'],
        'quotes': ['error', 'single'],
        'semi': ['error'],
        'space-before-function-paren': [
            'error',
            {
                'anonymous': 'never',
                'named': 'never',
                'asyncArrow': 'always',
            }
        ],
        'keyword-spacing': [
            'error',
            {

            }
        ],
        'array-bracket-spacing': ['error', 'never'],
        'arrow-spacing': ['error'],
        'block-spacing': ['error'],
        'comma-spacing': ['error'],
        'computed-property-spacing': ['error'],
        'key-spacing': ['error'],
        'object-curly-spacing': ['error'],
        'semi-spacing': ['error'],
        'space-in-parens': ['error'],
        'space-infix-ops': ['error'],
        'template-curly-spacing': ['error'],
    },
};
