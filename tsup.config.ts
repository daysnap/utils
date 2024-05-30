import { defineConfig } from 'tsup'

export default defineConfig([
  {
    entry: ['src/**/*.ts'],
    outDir: 'es',
    sourcemap: false,
    // splitting: false,
    clean: true,
    dts: true,
    target: 'esnext',
    format: ['esm'],
  },
  {
    entry: ['src/**/*.ts'],
    outDir: 'lib',
    splitting: true,
    sourcemap: false,
    clean: true,
    dts: true,
    target: 'esnext',
    format: ['cjs'],
  },
])
