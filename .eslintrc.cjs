module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'plugins': [
        '@typescript-eslint', 'react'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true,
                allowTemplateLiterals: true
            }
        ],
        semi: 'warn',
        'arrow-parens': ['warn', 'always'],
        'comma-dangle': 'off',
        'prefer-const': 'error',
        'no-var': 'error',
        'no-unused-vars': 'off',
        'spaced-comment': 'warn',
        camelcase: 'off',
        'no-invalid-this': 'error',
        'no-unused-expressions': 'error',
        'space-in-parens': ['warn', 'never'],
        'array-bracket-spacing': ['warn', 'never'],
        'computed-property-spacing': ['warn', 'never'],
        'object-curly-spacing': ['warn', 'never'],
        'no-console': ['warn'],
        'react-hooks/exhaustive-deps': 'off',
        'require-jsdoc': 'off',
        'valid-jsdoc': 'warn',
        'guard-for-in': 'warn',
        'no-empty-function': 'off',
        'no-debugger': 'error',
        'func-style': [
            'error',
            'declaration',
            {
                allowArrowFunctions: true
            }
        ],
        'new-cap': [
            'error',
            {
                newIsCap: true,
                capIsNew: true
            }
        ],
        indent: [
            'warn',
            4,
            {
                SwitchCase: 1,
                ignoredNodes: ['ConditionalExpression', 'TemplateLiteral > *']
            }
        ],
        'max-len': [
            'warn',
            {
                code: 120,
                comments: 80,
                tabWidth: 4,
                ignoreStrings: true,
                ignoreComments: true,
                ignoreTrailingComments: false,
                ignoreUrls: true,
                ignoreTemplateLiterals: true
            }
        ],
        'max-depth': [
            'error',
            {
                max: 4
            }
        ],
        'max-nested-callbacks': [
            'error',
            {
                max: 3
            }
        ],
        'array-element-newline': [
            'warn',
            {
                multiline: true,
                minItems: 3
            }
        ],
        'prettier/prettier': ['off']
    }
};
