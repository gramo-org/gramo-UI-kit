// Base Gulp File
var gulp = require('gulp'),
  watch = require('gulp-watch'),
  path = require('path'),
  postcss = require('gulp-postcss'),
  inlinesource = require('gulp-inline-source'),
  browserSync = require('browser-sync'),
  imagemin = require('gulp-imagemin'),
  cache = require('gulp-cache'),
  uglify = require('gulp-uglify'),
  runSequence = require('run-sequence');

// Task to compile SCSS
gulp.task('postcss', function() {
  var autoprefixer = require('autoprefixer'),
    pImport = require('postcss-import'),
    customProps = require('postcss-custom-properties'),
    customMedia = require('postcss-custom-media'),
    comments = require('postcss-discard-comments'),
    color = require('postcss-color-function'),
    nested = require('postcss-nested'),
    simpleExtend = require('postcss-extend');

  return gulp.src(['./src/css/style.css','./src/css/minside/minside.css'], {base: './src/css/'})
    .pipe(postcss([
      pImport(),
      nested(),
      simpleExtend(),
      comments({
        discardAll: true
      }),
      customProps(),
      customMedia(),
      color(),
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }),
    ]))
    .pipe(gulp.dest('./src'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

// Task to move compiled CSS to `dist` folder
gulp.task('movecss', function() {
  return gulp.src('./src/style.css')
    .pipe(gulp.dest('./dist/'));
});

// Task to move compiled CSS to `dist` folder
gulp.task('movefonts', function() {
  return gulp.src('./src/fonts/*/*.*')
    .pipe(gulp.dest('./dist/fonts'));
});

// Task to Minify JS
gulp.task('jsmin', function() {
  return gulp.src('./src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'));
});

// Minify Images
gulp.task('imagemin', function() {
  return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
    // Caching images that ran through imagemin
    .pipe(cache(imagemin({
      interlaced: true
    })))
    .pipe(gulp.dest('./dist/img'));
});

// BrowserSync Task (Live reload)
gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: './src/'
    },
  })
});

// Gulp Inline Source Task
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task('inlinesource', function() {
  return gulp.src('./src/**/*.html')
    .pipe(inlinesource())
    .pipe(gulp.dest('./dist/'));
});

// Gulp Watch Task
gulp.task('watch', ['browserSync'], function() {
  gulp.watch('./src/css/**/*', ['postcss']);
  gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});

// Gulp Default Task
gulp.task('default', ['watch']);

// Gulp Build Task
gulp.task('build', function() {
  runSequence('postcss', 'movecss', 'movefonts', 'imagemin', 'jsmin', 'inlinesource');
});
