/*
 *   Author:  Sergey Selin
 *   Website: http://selin.site
 *   Github:  https://github.com/selinsite
 */

var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
	return gulp.src('./sass/**/*.{scss,sass}')
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./sass/**/*.{scss,sass}', ['sass']);
});