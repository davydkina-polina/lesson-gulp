const {src, dest, watch, task} = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass'); // компилируем sass в css  
 const autoprefixer = require('gulp-autoprefixer'); // добавляем к css префиксы для старых браузеров
 const concatCss    = require('gulp-concat-css'); // объединяем все css файлы в один
 const cleanCSS     = require('gulp-clean-css'); // с помощью этого будем добавлять к имени файла .min
 const rename     = require('gulp-rename'); // с помощью этого будем переименовывать файлы
 const del          = require('del'); // с помощью этого удалим предыдущий файл style.min.css


// gulp.task('serve', ['sass'], function() {

// browserSync.init({
// server: "src/"
// });

// gulp.watch("src/sass/*.sass", ['sass']);
// gulp.watch("src/*.html").on('change', browserSync.reload);
// });   --- это для галп 3 версии. используем для 4 версии:

function bs() {
  deleteMinCss(); // запускаем функцию удаления предыдущего файла style.min.css -- важно, чтобы эта функция была первее остальных, а то не успеет удалиться файл
  serveSass(); // запускаем функцию с sass
  minimizeCss(); // запускаем функцию с минимизацией css
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

/* gulp.task('sass', function() {

return gulp.src("src/sass/*.sass")

.pipe(sass().on('error', sass.logError))
 .pipe(autoprefixer({
 browsers: ['last 2 versions'],
 cascade: false
 }))
 .pipe(concatCss("style.css"))
.pipe(gulp.dest("src/css"))
.pipe(browserSync.stream());

}); --- это для галп 3 версии. используем для 4 версии: */

function serveSass() {
  return src('./sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass()) 
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concatCss("style.css"))
    .pipe(dest("css"))
    .pipe(browserSync.stream());
};

/*gulp.task('mincss', function() {

return gulp.src("src/css/*.css")

.pipe(rename({suffix: ".min"}))
.pipe(cleanCSS())
.pipe(gulp.dest("app/css"));

}); --- это для галп 3 версии. используем для 4 версии: */

function minimizeCss() {
  return src("./css/*.css")
    .pipe(rename({suffix: ".min"}))
    .pipe(cleanCSS())
    .pipe(dest("./css"));
};

function deleteMinCss() {
 del.sync('css/style.min.css')
}; // функция, которая позволяет при последующем запуске gulp serve перезаписать новый файл style.min.css -- чтобы не создавалось style.min.min.css

/* в 3 версии вызывается функция минимизации так:
 gulp.task('min', ['mincss']);
 
 в 4 версии так: 
 exports.min = minimizeCss;  --- но мы вызываем эту функцию в bs */

exports.serve = bs; // указываем название задачи для запуска - serve, указываем функцию, которую запускаем - bs
/* gulp.task('default', ['serve']); */


