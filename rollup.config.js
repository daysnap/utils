
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript'

export default {
  // 入口
  input: 'src/omit.ts',

  // 出口
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },

  // 插件
  plugins: [
    resolve(),
    commonjs(),
    typescript()
  ]
}
