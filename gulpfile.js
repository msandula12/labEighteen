var gulp = require('gulp');
var stylus = require('gulp-stylus');

gulp.task('default', function(){
	return gulp.src('./styles/styles.styl')
		.pipe(stylus())
		.pipe(gulp.dest('./styles'));
});