/*
 *   Author:  Sergey Selin
 *   Website: http://selin.site
 *   Github:  https://github.com/selinsite
 */
var gulp = require('gulp');
var runseq = require('run-sequence');

gulp.task('default', function() {
	runseq(
		'sass',
		'images',
		'server',
		'sass:watch'
	);
});