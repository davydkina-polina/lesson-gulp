const {src, dest, watch, task} = require('gulp');
const browserSync  = require('browser-sync').create();
const sass         = require('gulp-sass'); // компилируем sass в css  
const autoprefixer = require('gulp-autoprefixer'); // добавляем к css префиксы для старых браузеров
const concatCss    = require('gulp-concat-css'); // объединяем все css файлы в один
//const cleanCSS     = require('gulp-clean-css'); -- с помощью этого будем добавлять к имени файла .min -- реализовали тот же эффект с помощью опции в sass
const rename     = require('gulp-rename'); // с помощью этого будем переименовывать файлы
//  const del          = require('del'); -- с помощью этого удалим предыдущий файл style.min.css -- это костыль

function bs() {
  // deleteMinCss(); -- запускаем функцию удаления предыдущего файла style.min.css -- важно, чтобы эта функция была первее остальных, а то не успеет удалиться файл -- это костыль
  serveSass(); // запускаем функцию с sass
  minimizeCss(); // запускаем функцию с минимизацией
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

function serveSass() {
  return src('./sass/**/*.sass', './sass/**/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError)) // sass дает сжатый файл с расширением .css, который мы переименовываем с помощью minimizeCss()
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(concatCss("style.css"))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};


function minimizeCss() {
  return src(['./css/*.css', '!./css/*.min.css']) // создаем массив с исключением
    .pipe(rename({suffix: ".min"}))
    .pipe(dest("./css"));
}; // функция, которая будет брать css файлы, но будет исключать min.css и переименовывать

// function deleteMinCss() {
//  del.sync('css/style.min.css')
// }; 
// функция, которая позволяет при последующем запуске gulp serve перезаписать новый файл style.min.css -- чтобы не создавалось style.min.min.css


exports.serve = bs; // указываем название задачи для запуска - serve, указываем функцию, которую запускаем - bs


