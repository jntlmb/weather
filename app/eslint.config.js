import globals, { node } from 'globals';
import pluginJs from '@eslint/js';

export default [
  { languageOptions: { globals: globals.browser } },
  {
    rules: {
      node: true,
    },
  },
  pluginJs.configs.recommended,
];
