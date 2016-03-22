var gulp    = require('gulp'),
    gutil   = require('gulp-util'),
    karma   = require('gulp-karma'),
    del     = require('del'),
    minify  = require('gulp-minifier');

gulp.task('test', function() {
  // Be sure to return the stream
  return gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'run'
    }))
    .on('error', function(err) {
      // Make sure failed tests cause gulp to exit non-zero
      throw err;
    });
});

gulp.task('default', function() {
  gulp.src([])
    .pipe(karma({
      configFile: 'karma.conf.js',
      action: 'watch'
    }));
});

var DEST = 'minified';
gulp.task('minify', function() {
  return gulp.src(['index.html',
                   'assets/*/*',
                   'bower_components/skeleton/css/*',
                   'bower_components/xregexp/xregexp-all.js',
                   ], {base: '.'})
    .pipe(minify({
      collapseWhitespace: true,
      conservativeCollapse: false,
      minify: true,
      minifyJS: true,
      minifyCSS: true
    }))
    .pipe(gulp.dest(DEST));
});

gulp.task('clean', function(cb) {
  del([
    // Eliminar todos los ficheros dentro de la carpeta minified
    'dist/*',
  ], cb);
});