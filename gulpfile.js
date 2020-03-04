const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('hello', function(done) {
  console.log('Hello');
  done();
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

// const {src, dest, watch, series, task} = require('gulp');
// // const cleanCSS = require('gulp-clean-css');
// // const jsmin = require('gulp-jsmin');
// // const rename = require('gulp-rename');
// const sass = require('gulp-sass');
// var browserSync = require('browser-sync').create();

// // Static server
// function bs() {
//   serveSass();
//   browserSync.init({
//       server: {
//           baseDir: "./src/"
//       }
//   });
//   watch("./src/*.html").on('change', browserSync.reload);
//   watch("./src/sass/**/*.sass", serveSass);
//   watch("./src/sass/**/*.scss", serveSass);
//   watch("./src/js/*.js").on('change', browserSync.reload);
// };

// function serveSass() {
//   return src("./src/sass/**/*.sass", "./src/sass/**/*.scss")
//       .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
//       .pipe(dest("./src/css"))
//       .pipe(browserSync.stream());
// };

// exports.one = bs;
