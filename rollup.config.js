import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import babel from '@rollup/plugin-babel'

export default async () => {
  return [
    {
      input: './src/index.ts',
      output: {
        file: './dist/index.js',
        format: 'umd',
        preferConst: true,
        name: 'dsu'
      },
      plugins: [
        resolve(),
        commonjs({
          // include: 'node_modules/**'
        }),
        typescript(),
        babel({
          babelHelpers: 'runtime',
          exclude: 'node_modules/**',
          extensions: ['.ts', '.js'],
        }),
      ]
    }
  ]
}
