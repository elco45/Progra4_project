var gulp = require('gulp');/*libreria, para importar dependecias sin necesidad de q nosotros lo hagamos*/
var $ = require('gulp-load-plugins')({
		lazy: true
	});
	var debug = require('gulp-debug');
var mainBowerFiles = require('main-bower-files');/*todos los paquetes de bower importantes*/

gulp.task('index', function() {/*llamar gulp index para importar todo*/
	return gulp.src('./app/index.html')
		.pipe($.inject(gulp.src(mainBowerFiles(), {
			read: false
		}, {
			relative: true
		}), {
			name: 'bower',
			ignorePath: '/bower_components'
		}))
		.pipe($.inject(gulp.src(['./app/styles/**/*.css','./app/scripts/**/*.js','./app/styles/*.js'],{read:false}).pipe(debug()),{relative: true}))
		.pipe(gulp.dest('./app'));

});
