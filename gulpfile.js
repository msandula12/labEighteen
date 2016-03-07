var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');

gulp.task('style', function(){
	return gulp.src('./styles/styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./styles'));
});

gulp.task('scripts', function(){
	return gulp.src('./scripts/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('./scripts/'))
});	

gulp.task('default', ['style', 'scripts']);