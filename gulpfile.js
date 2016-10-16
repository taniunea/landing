/**
 * Gulpfile.
*/

var styleSRC            = 'sass/global.scss';
var styleDestination    = 'css';

// Watch files paths.
var styleWatchFiles     = 'sass/**/*.scss'; // Path to all *.sass files inside css folder and inside them.


// Browsers you care about for autoprefixing.
const AUTOPREFIXER_BROWSERS = [
    'last 2 version',
    '> 1%',
    'ie >= 9',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4',
    'bb >= 10'
  ];


/**
 * Load Plugins.
 */
var gulp         = require('gulp');

// CSS related plugins.
var sass         = require('gulp-sass');
var minifycss    = require('gulp-uglifycss');
var autoprefixer = require('gulp-autoprefixer');

// Utility related plugins.
var rename       = require('gulp-rename');
var sourcemaps   = require('gulp-sourcemaps');
var notify       = require('gulp-notify');
var browserSync  = require('browser-sync').create();
var reload       = browserSync.reload;

 gulp.task( 'browser-sync', function() {
 	browserSync.init({
    open: true,
    server: {
      baseDir: "./"
    }
  });
 });


// Log Errors

function errorlog(err){
	console.error(err.message);
	this.emit('end');	
}

gulp.task('styles', function () {
 	gulp.src( styleSRC )
		.pipe( sourcemaps.init() )
		.pipe( sass( {
			errLogToConsole: true,
			outputStyle: 'compact',
			precision: 10
		} ) )
		.on('error', errorlog)
		.pipe( sourcemaps.write( { includeContent: false } ) )
		.pipe( sourcemaps.init( { loadMaps: true } ) )
		.pipe( autoprefixer( AUTOPREFIXER_BROWSERS ) )
		.pipe( sourcemaps.write ( styleDestination ) )
		.pipe( gulp.dest( styleDestination ) )
		.pipe( rename( { suffix: '.min' } ) )
		.pipe( minifycss( {
			maxLineLen: 10
		}))
		.pipe( gulp.dest( styleDestination ) )
		.pipe( browserSync.stream() )
		.pipe( notify( { message: 'TASK: "styles" Completed!', onLast: true } ) )
});



 /**
  * Watch Tasks.
  */
 gulp.task( 'default', ['styles', 'browser-sync'], function () {
 	gulp.watch( styleWatchFiles, [ 'styles' ] );
 });
