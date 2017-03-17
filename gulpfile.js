var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
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
//    .pipe(gulp.dest(function (file) {
//      return file.base;
//    }))
  .pipe(gulp.dest('./'))
});

gulp.task('minify-css', function () {
  return gulp.src('development/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('production/css'))
});

gulp.task('move-html', function () {
  return gulp.src('development/*.html')
    .pipe(gulp.dest('production'))
});

gulp.task('move-js', function () {
  return gulp.src('development/js/**/*.*')
    .pipe(gulp.dest('production/js'))
});

gulp.task('move-src', function () {
  return gulp.src('development/src/**/*.*')
    .pipe(gulp.dest('production/src'))
});

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('sass/**/sass.scss', ['sass']);
  gulp.watch('dev.css', ['autoprefixer']);
});

gulp.task('build', ['minify-css', 'move-html', 'move-js', 'move-src']);
