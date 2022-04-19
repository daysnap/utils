
const gulp = require('gulp')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const tsConfig = require('./tsconfig1.json')

gulp.task('default', () => {
  return gulp.src('src/**/*.ts')
    .pipe(ts(tsConfig))
    .pipe(babel())
    .pipe(gulp.dest('es'))

})
