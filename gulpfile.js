
const gulp = require('gulp')
const babel2 = require('gulp-babel')
const through = require('through2')
const ts = require('gulp-typescript')
const gulpIf = require('gulp-if')
const babel = require('@babel/core');

const paths = {
  dest: {
    lib: 'lib',
    esm: 'es',
  },
  scripts: [
    'src/**/*.ts'
  ]
}

function isTransform(path) {
  return /\.jsx?$/.test(path) && !path.endsWith(".d.ts");
}

function compileScripts(babelEnv, destDir) {
  const { scripts } = paths
  // 设置环境变量
  process.env.BABEL_ENV = babelEnv
  return gulp
    .src(scripts)
    .pipe(ts({
      target: 'esnext',
      moduleResolution: 'node',
      baseUrl: './',
      jsx: 'preserve',
      declaration: true,
      skipLibCheck: true,
      esModuleInterop: true
    }))
    .pipe(
      gulpIf(
        (f) => isTransform(f.path),
        babel2()
      )
    )
    // .pipe(through.obj((file, env, cb) => {
    //   try {
    //     file.contents = Buffer.from(
    //       transform(file)
    //     )
    //     cb(null, file)
    //   } catch (e) {
    //     console.log(e)
    //     cb(null)
    //   }
    // }))
    .pipe(gulp.dest(destDir))
}

function compileCJS() {
  const { dest } = paths
  return compileScripts('cjs', dest.lib)
}

function compileESM() {
  const { dest } = paths
  return compileScripts('es', dest.esm)
}

const buildScripts = gulp.series(compileESM)

const build = gulp.parallel(buildScripts)

exports.build = build

exports.default = build

