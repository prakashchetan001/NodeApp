var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');
gulp.task('js', function () {
  gulp.src(['ng/module.js', 'ng/**/*.js'])
    .pipe(sourcemaps.init())
      .pipe(concat('app.js'))
      .pipe(ngAnnotate())
      .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('assets'))
})
var fs = require('fs')
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
  require('./gulp/' + task)
});
gulp.task('watch:js', ['js'], function () {
  gulp.watch('ng/**/*.js', ['js'])
});
gulp.task('watch:css', function () {
  gulp.watch('css/**/*.styl', ['css'])
})
gulp.task('dev',['watch:css','watch:js','dev:server']);
gulp.task('build',['css','js']);
