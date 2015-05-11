(function () {
    'use strict';

    var path = require('path');
    var gulp = require('gulp');
    var browserify = require('gulp-browserify');
    var rename = require('gulp-rename');

    require('gulp-help')(gulp);

    var paths = {
        scripts: {
            files: [
                path.join(__dirname, 'app', 'scripts', 'core', '*.js')
            ],
            directory: path.join(__dirname, 'app', 'scripts')
        }
    };

    // -----------------------------------------------------------------------

    gulp.task('scripts:build', 'Compile *.js files and concat to one file `bundle.js`.', function () {
        gulp.src(paths.scripts.files, { read: false })
            .pipe(browserify({
                debug: true
            }))
            .pipe(rename('bundle.js'))
            .pipe(gulp.dest(paths.scripts.directory))
    });

    gulp.task('scripts:watch', 'Listen for *.js files modification and compile.', ['scripts:build'], function () {
        gulp.watch(paths.scripts.files, ['scripts:build']);
    });

}());
