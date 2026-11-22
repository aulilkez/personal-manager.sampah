import { defineConfig } from 'oxfmt';
import ultracite from 'ultracite/oxfmt';

export default defineConfig({
  ...ultracite,

  // Formatting
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  trailingComma: 'all',

  // JSX / TSX
  jsxSingleQuote: false,

  // Consistency
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',

  // Line endings
  endOfLine: 'lf',
});
