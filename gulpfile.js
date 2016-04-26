var gulp        = require('gulp');
var cp          = require('child_process');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var postcss     = require('gulp-postcss');
var pxtorem     = require('postcss-pxtorem');
require('es6-promise').polyfill();

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    var cmd = ['exec', 'jekyll', 'build', '-t' , '--incremental'];
    if (process.env.CMS_ENV !== 'production') {
      cmd.push("--future");
    }
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', cmd, {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
    browserSync.reload();
});

/**
 * Build the status page
 */
gulp.task('status-build', function (done) {
    var cmd = ['exec', 'jekyll', 'build', '-t', '-c', '_status.yml'];
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('bundle', cmd, {stdio: 'inherit'})
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('status-rebuild', ['status-build'], function () {
    browserSync.reload();
});


/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

gulp.task('browser-sync-status', ['sass', 'status-build'], function() {
    browserSync({
        server: {
            baseDir: '_status'
        }
    });
});


/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
    gulp.src('./_scss/*.scss')
    .pipe(sass({
      errLogToConsole: true,
      onError: browserSync.notify
    }))
    .pipe(postcss([
      pxtorem({
        propWhiteList: [],
        mediaQuery: false,
        replace: false
      })
    ]))
    .pipe(prefix({
      browsers: ['> 1%', 'last 15 versions']
    }))
    .pipe(gulp.dest('_site/css'))
    .pipe(gulp.dest('_status/css'))
    .pipe(browserSync.reload({stream:true}))
    .pipe(gulp.dest('./css'));
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch([
      '_scss/*.scss',
      '_scss/components/*.scss',
      '_scss/pages/*.scss'
    ], ['sass']);
    gulp.watch([
      '*.html',
      '*.md',
      '_data/*.yml',
      '_docs/*.md',
      '_features/*.md',
      '_includes/*.html',
      '_layouts/*.html',
      '_plugins/*.rb',
      '_posts/*',
      '_reseller_docs/*.md',
      'admin/*',
      'img/**/*',
      'js/*.js'
    ], ['jekyll-rebuild']);
});

gulp.task('status-watch', function () {
    gulp.watch([
      '_scss/*.scss',
      '_scss/components/*.scss',
      '_scss/pages/*.scss'
    ], ['sass']);
    gulp.watch([
      'status.html',
      '_incidents/*',
      '_includes/*.html',
      '_plugins/*.rb',
      'admin-status/*',
      'admin-status/css/*',
      'img/*',
      'js/*.js'
    ], ['status-rebuild']);
});

gulp.task('build', ['sass', 'jekyll-build']);

gulp.task('status', ['sass', 'status-build']);

gulp.task('status-server', ['browser-sync-status', 'status-watch']);

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
