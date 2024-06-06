import { defineConfig } from 'tsup'

// docs https://tsup.egoist.dev/
export default defineConfig([
  {
    entry: ['src/**/*.ts'],
    outDir: 'es',
    splitting: true,
    sourcemap: false,
    clean: true,
    dts: true,
    shims: true,
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
    shims: true,
    target: 'esnext',
    format: ['cjs'],
  },
])
