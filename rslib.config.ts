import { defineConfig } from '@rslib/core';

export default defineConfig({
  lib: [{ syntax: 'es2023', dts: true }],
  source: {
    entry: {
      index: './src/index.ts',
      loader: './src/loader.ts',
    },
  },
  output: {
    externals: ['yaml'],
  },
});
