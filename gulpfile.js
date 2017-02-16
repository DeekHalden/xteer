
const   gulp        = require('gulp'),
        csso        = require('gulp-csso'),
        uglify      = require('gulp-uglify'),
        pug        = require('gulp-pug'),
        concat      = require('gulp-concat'),
        browserSync = require('browser-sync'), // Livereload plugin needed: https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei
        reload      = browserSync.reload,
        tinylr      = require('tiny-lr'),
        marked      = require('marked'), // For :markdown filter in pug
        path        = require('path'),
        server      = tinylr(),
        rename      = require('gulp-rename'),
        imagemin = require('imagemin'),
        imageminOptipng = require('imagemin-optipng'),
        autoprefixer = require('gulp-autoprefixer'),
        // sourcemaps = require('gulp-sourcemaps');
        ttf2eot = require('gulp-ttf2eot'),
        ttf2woff = require('gulp-ttf2woff'),

        pump = require('pump'),
        replace = require('gulp-ext-replace'),
        stylus = require('gulp-stylus'),
        through = require('gulp-through');

notify = require("gulp-notify"),
plumber = require('gulp-plumber');

gulp.task('styles', () => {
    return gulp.src('src/**/styles.styl')
        .pipe(stylus({
            'include css': true
        }))
        // .pipe(plumber({errorHandler: notify.onError("Error: <%= error.message %>")}))
        .on("error", notify.onError({
            message: "Error: <%= error.message %>",
            title: "Error running something"
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe( csso() )
        .pipe( rename('bundle.min.css') )
        .pipe( gulp.dest('dist/assets/css') )
        .pipe( browserSync.reload({
            stream: true
        }))
})

// gulp.task('rename', function() {
//     return gulp.src(['src/pug/**/*.pug', 'src/pug/components/pages/*.pug'])
//         .pipe(replace('.pug'))
//         .pipe(gulp.dest('dist/files'))
// })
imagemin(['src/**/*.png'], 'dist/assets/images', {use: [imageminOptipng()]}).then(() => {
    console.log('Images optimized');
});

gulp.task('js', function (cb) {
  pump([
        gulp.src(['src/assets/scripts/vendor/*.js','src/assets/scripts/client/*.js','!src/assets/bemto/**/*.js']),concat('bundle.min.js'),
        uglify(),
        gulp.dest('dist/assets/scripts')
    ],
    cb
  );
});

gulp.task('fonts',/*['ttf2eot', 'ttf2woff'],*/ function() {
  return gulp.src('src/**/*.otf')
    .pipe( gulp.dest('dist/assets/fonts'));
});


gulp.task('indexTemplate', function() {
  return gulp.src('src/pages/*.pug')
    .pipe(plumber())
    .pipe(pug({
      pretty: true,
      basedir: 'src'
    }))
    
    .pipe(gulp.dest('dist/'))
});

gulp.task('styles-watch', ['styles'], reload);

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist',
            open: false
        },
    })
})

/**
 * Serve and watch the pug files for changes
 */
gulp.task('default', ['indexTemplate','fonts', 'js','styles', 'browserSync'], function() {
    gulp.watch(['src/**/*.styl','src/**/*.css'], ['styles-watch']);
    gulp.watch('src/**/*.pug', ['indexTemplate']);
    gulp.watch('src/**/*.js', ['js']);
});
