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
        'comma-dangle': ['error', 'only-multiline']
    },
};
