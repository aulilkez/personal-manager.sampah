import { defineConfig } from 'oxlint';
import core from 'ultracite/oxlint/core';
import drizzle from 'ultracite/oxlint/drizzle';
import jest from 'ultracite/oxlint/jest';
import react from 'ultracite/oxlint/react';
import reactNative from 'ultracite/oxlint/react-native';

export default defineConfig({
  env: core.env,
  extends: [core, react, jest, reactNative, drizzle],
  ignorePatterns: [...core.ignorePatterns, '.agents/**', 'assets/**', 'scripts/**'],
  rules: {
    'eslint/curly': 'off',
    'eslint/func-style': 'off',
    'eslint/no-use-before-define': 'off',
    'import/consistent-type-specifier-style': 'off',
    'node/global-require': 'off',
    'promise/catch-or-return': 'off',
    'react/set-state-in-effect': 'off',
    'typescript/consistent-type-imports': 'off',
    'typescript/no-import-type-side-effects': 'off',
    'unicorn/prefer-module': 'off',
  },
});
