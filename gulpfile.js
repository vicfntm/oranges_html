var gulp = require('gulp');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');

gulp.task('sass', function () {
  gulp.src('sass/**/sass.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('dev.css'))
    .pipe(gulp.dest('./'))
});

gulp.task('autoprefixer', function () {
  return gulp.src('dev.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      flexbox: true,
      cascade: false
    }))
    .pipe(rename('devstyles.css'))
    .pipe(gulp.dest('./'))
});



gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('sass/**/sass.scss', ['sass']);
  gulp.watch('dev.css', ['autoprefixer']);
});

