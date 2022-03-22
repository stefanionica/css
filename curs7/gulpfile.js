"use strict";
const gulp = require('gulp');
//Load plugin
const sass = require('gulp-sass')(require('node-sass'));

//ca sa transform fisiere sass/scss in fisiere css: gulp sass
gulp.task('sass', function () {
    return gulp.src('sass/ap6.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'));
});