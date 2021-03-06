module.exports = {
  env: {
    browser: true,
    es2021: true
    // es6: true,
    // node: true,
    // jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
    // 'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    // ecmaVersion: 'latest',
    ecmaVersion: 13,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        useTabs: false,
        tabWidth: 2,
        singleQuote: true,
        jsxSingleQuote: true,
        printWidth: 100,
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    eqeqeq: 'error',
    // 'no-undef': 'off',
    // 'no-unused-vars': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    // 'react/display-name': 'off',
    // 'react/no-children-prop': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'warn',
  },
  ignorePatterns: ['node_modules', 'build', 'dist', 'public'],
};
