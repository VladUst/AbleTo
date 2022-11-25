module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:i18next/recommended'
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react',
    'i18next',
    'react-hooks'
  ],
  rules: {
    'react/jsx-indent': [2, 4],
    '@typescript-eslint/semi': [1, 'always'],
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['data-testid', 'to', 'fallback'] }],
    'max-len': ['error', { code: 130, ignoreComments: true }],
    '@typescript-eslint/consistent-type-assertions': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
    'no-param-reassign': 'off'
  },
  globals: {
    _IS_DEV_: true
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}', '**/json-server/*.js'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
        semi: 'off'
      }
    }
  ]
}
