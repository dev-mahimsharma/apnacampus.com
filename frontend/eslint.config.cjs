// eslint.config.cjs
const eslintPluginReact = require('eslint-plugin-react');
const eslintPluginPrettier = require('eslint-plugin-prettier');

module.exports = [
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true, // ← enables JSX parsing
        },
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
      },
    },
    plugins: {
      react: eslintPluginReact,
      prettier: eslintPluginPrettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'react/react-in-jsx-scope': 'off', // React 17+ does not require import React
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
