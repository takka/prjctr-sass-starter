var gulp = require('gulp');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass')(require('node-sass'))

var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

var sassPath = './sass/**/*.{sass, scss}';

gulp.task('css', function () {
	var processors = [	
		autoprefixer(),
		cssnano
	];
	return gulp.src(sassPath)
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss(processors))
		.pipe(gulp.dest('./public/css'));
});

gulp.task("watch:sass", function() {
	return gulp.watch(sassPath, gulp.series('css'));
});