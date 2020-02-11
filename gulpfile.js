// Base Gulp File
const gulp = require("gulp")
const postcss = require("gulp-postcss")
const inlinesource = require("gulp-inline-source")
const browserSync = require("browser-sync").create()
const imagemin = require("gulp-imagemin")
const cache = require("gulp-cache")
const uglify = require("gulp-uglify")

// Task to compile SCSS
gulp.task("postcss", function() {
  const autoprefixer = require("autoprefixer")
  const pImport = require("postcss-import")
  const customProps = require("postcss-custom-properties")
  const customMedia = require("postcss-custom-media")
  const comments = require("postcss-discard-comments")
  const color = require("postcss-color-function")
  const nested = require("postcss-nested")
  const simpleExtend = require("postcss-extend")

  return gulp
    .src(["./src/css/style.css", "./src/css/minside.css"], {base: "./src/css/"})
    .pipe(
      postcss([
        pImport(),
        nested(),
        simpleExtend(),
        comments({
          discardAll: true,
        }),
        customProps({preserve: false}), // NOTE: Added this to get the same CSS as before after upgraded lib.
        customMedia(),
        color(),
        autoprefixer({ cascade: false }),
      ])
    )
    .pipe(gulp.dest("./src/")) // TODO: Why do we build in to src? Seems like cos browserSync serves from src.. Hm ..
    // .pipe(gulp.dest("./dist/"))  // TODO: Why is this here and what is this VS build task?
    .pipe(
      browserSync.reload({
        stream: true,
      })
    )
})

// Task to move compiled CSS to `dist` folder
gulp.task("movecss", function() {
  return gulp.src("./src/style.css").pipe(gulp.dest("./dist/"))
})

// Task to move compiled CSS to `dist` folder
gulp.task("movefonts", function() {
  return gulp.src("./src/fonts/*.*").pipe(gulp.dest("./dist/fonts"))
})

// Task to Minify JS
gulp.task("jsmin", function() {
  return gulp
    .src("./src/js/**/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js/"))
})

// Minify Images
gulp.task("imagemin", function() {
  return (gulp
      .src("./src/img/**/*.+(png|jpg|jpeg|gif)")
      // Caching images that ran through imagemin
      .pipe(
        cache(
          imagemin({
            interlaced: true,
          })
        )
      )
      .pipe(gulp.dest("./dist/img")) )
})

// BrowserSync Task (Live reload)
gulp.task("browserSync", async () => {
  browserSync.init({
    open: false,
    port: process.env.PORT || '3000',
    server: {
      baseDir: "./src/",
    },
  })
})

// Gulp Inline Source Task
// Embed scripts, CSS or images inline (make sure to add an inline attribute to the linked files)
// Eg: <script src="default.js" inline></script>
// Will compile all inline within the html file (less http requests - woot!)
gulp.task("inlinesource", function() {
  return gulp
    .src("./src/**/*.html")
    .pipe(inlinesource())
    .pipe(gulp.dest("./dist/"))
})

// Gulp Default Task
const initWatchers = () => {
  gulp.watch("./src/css/**/*", gulp.series('postcss'))
  gulp.watch("./src/**/*.html").on("change", browserSync.reload)
}

gulp.task("default", gulp.series('browserSync', initWatchers))

// Gulp Build Task
gulp.task("build", gulp.series(
  "postcss",
  "movecss",
  "movefonts",
  "imagemin",
  "jsmin",
  "inlinesource"
))
