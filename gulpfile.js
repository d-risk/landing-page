var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// NOTE: requires `npm install` before running!

// Copy vendor files from /node_modules into /vendor
gulp.task('vendor', function () {
    // Bootstrap
    gulp.src([
        './node_modules/bootstrap/dist/**/*',
        '!./node_modules/bootstrap/dist/**/*.map'
    ])
        .pipe(gulp.dest('./vendor/bootstrap'));

    // Font Awesome
    gulp.src([
        './node_modules/font-awesome/**/*',
        '!./node_modules/font-awesome/**/*.map',
        '!./node_modules/font-awesome/**/*.txt',
        '!./node_modules/font-awesome/**/*.json',
        '!./node_modules/font-awesome/**/*.md'
    ])
        .pipe(gulp.dest('./vendor/font-awesome'))

    // jQuery
    gulp.src([
        './node_modules/jquery/dist/**/*',
        '!./node_modules/jquery/dist/**/*.map'
    ])
        .pipe(gulp.dest('./vendor/jquery'));
});

// Default task
gulp.task('default', ['vendor']);

// Configure the browserSync task
gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    })
});

// Dev task with browserSync
gulp.task('dev', ['vendor', 'browserSync'], function () {
    // Reloads the browser whenever HTML or CSS files change
    gulp.watch('css/*.css', browserSync.reload);
    gulp.watch('*.html', browserSync.reload);
});
