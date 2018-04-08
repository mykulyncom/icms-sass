/*
 *   Author:  Sergey Selin
 *   Website: http://selin.site
 *   Github:  https://github.com/selinsite
 */

var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('server', function() {
	browserSync.init({
		proxy: "icms.loc",
		files: [
				'./*.html',
				'./**/*.php',
				'./js/*.js',
				'./css/*.css',
				'./images/*.*'
			]
	});
});