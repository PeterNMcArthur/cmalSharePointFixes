var gulp = require('gulp');
var server = require('express');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');


var sassFiles = './sass/**/*.scss';

gulp.task('sass', function () {
    return gulp
    .src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('sass-cmal', function () {
    return gulp
    .src('./cmal.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function () {
    gulp.watch(sassFiles, ['sass']);
    gulp.watch('./cmal.scss', ['sass-cmal']);
});