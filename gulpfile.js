const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
// const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');

// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

function serveSass() {
  return src('./sass/*.sass')
    .pipe(sass()) // запускаем sass
    .pipe(dest(".css"))
    .pipe(browserSync.stream());
};

exports.serve = bs;

// gulp.task('gulp-rename', () => {
//   return gulp.src('styles/*.css')
//     // .pipe(rename('.min.css'));
//     .pipe(rename({ suffix: '.min', prefix : '' }))
// })
