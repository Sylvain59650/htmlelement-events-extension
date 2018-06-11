﻿const babel = require("gulp-babel");
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
    //.pipe(uglify())
    //.on('error', function(err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
    // .pipe(umd())
    .pipe(gulp.dest(chemins.distrib))
});

gulp.task("release", () => {
  return gulp.src([
      "src/**.js"
    ])
    .pipe(concat("htmlElement-events.min.js"))
    .pipe(babel({
      presets: ["es2015"],
      compact: true,
      minified: true,
      plugins: ["minify-mangle-names"]
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


gulp.task("watch:htmlElement.min.js", function() {
  watch("./src/**.js", function() {
    gulp.run("htmlElement-events.min.js");
  });
});



gulp.task("default", ["htmlElement-events.min.js", "demo"]);


gulp.task("all", ["default"]);

gulp.task("watch", ["watch:htmlElement.min.js"]);