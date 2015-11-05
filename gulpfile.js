var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cp          = require('child_process');


var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function (done) {
    var cmd = ['exec', 'jekyll', 'build', '-t'];
    if (process.env.CMS_ENV == 'staging') {
      cmd.push("--future")
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
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function () {
  gulp.src('./_scss/*.scss')
          .pipe(sass({
            onError: browserSync.notify
          }))
          .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
          .pipe(gulp.dest('_site/css'))
          .pipe(browserSync.reload({stream:true}))
          .pipe(gulp.dest('./css'));
});


gulp.task('optimize-images', function() {
    gulp
})


/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch(['_scss/*.scss', '_scss/components/*.scss', '_scss/pages/*.scss'], ['sass']);
    gulp.watch(['*.html', '_layouts/*.html', '_includes/*.html', 'admin/*', '_posts/*', 'docs/*.md', 'img/*', 'js/*.js', '_plugins/*.rb', '_data/*.yml'], ['jekyll-rebuild']);
});

gulp.task('build', ['sass', 'jekyll-build']);

gulp.task('production', ['sass', 'jekyll-build', 'optimize-images'])

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
