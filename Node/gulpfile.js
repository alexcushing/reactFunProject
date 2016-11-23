// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var exec = require('gulp-exec');

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our stylus
gulp.task('stylus', function() {
    return gulp.src('src/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('src/'));
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('src/*.styl', ['stylus']);

});

gulp.task('start', function () {
  nodemon({
    script: 'index.js'
  , ext: 'js html'
  , env: { 'NODE_ENV': 'development' }
  })
})

// Default Task
gulp.task('default', ['lint', 'stylus', 'scripts', 'watch']);
