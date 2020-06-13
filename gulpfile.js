const babel = require("gulp-babel");
const gulp = require("gulp");
const concat = require("gulp-concat");
const watch = require("gulp-watch");

const chemins = {
  sources: "./src/",
  distrib: "./distrib/",
  demo: "./docs/demo/modules/htmlelement-events/distrib/"
};



gulp.task("htmlElement-events.min.js", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("htmlElement-events.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("release", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("htmlElement-events.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      //   comments: false,
      compact: true,
      minified: true,
      // plugins: ["minify-mangle-names"]
    }))
    .pipe(gulp.dest(chemins.distrib))
});


gulp.task("demo", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("htmlElement-events.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: false,
      comments: false,
      minified: false
    }))
    .pipe(gulp.dest(chemins.demo))
});


gulp.task("watch:htmlElement-events.min.js", function() {
  watch("./src/**.js", gulp.series("htmlElement-events.min.js"));
});



gulp.task("default", gulp.series("htmlElement-events.min.js", "demo", "release"));


gulp.task("all", gulp.series("default"));

gulp.task("watch", gulp.series("watch:htmlElement-events.min.js"));