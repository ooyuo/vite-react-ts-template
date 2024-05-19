module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:prettier/recommended',
    'plugin:react/jsx-runtime',
  ],
  ignorePatterns: ['dist', 'node_modules', 'build', 'out'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react-refresh', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/jsx-no-target-blank': 'off',
    'react/react-in-jsx-scope': 'off', // Disable this rule for React 17+
    'no-unused-vars': 'off', // Turn off ESLint no-unused-vars rule
    '@typescript-eslint/no-unused-vars': ['error'], // Use TypeScript's rule for unused variables
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  },
};
