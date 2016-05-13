var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');
var inlineimage = require('gulp-inline-image');

gulp.task('build', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(inlineimage())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
