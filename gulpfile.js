var gulp = require('gulp');
var sass = require('gulp-sass');
var path = require('path');

gulp.task('build', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});
