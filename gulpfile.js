// подключение модулей
const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-csso');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const gulpIf = require('gulp-if');
const sourceMaps = require('gulp-sourcemaps');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const del = require('del');
// deploy
const util = require('gulp-util');
const ftp = require('vinyl-ftp');
// конфигурация и настройка сборки
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
// all CSS files
const cssFiles = [
    'app/css/layout/normalize.scss',
    'app/css/layout/font.scss',
    'app/css/layout/layout.scss',
    'app/css/layout/footer.scss',
    'app/css/layout/fixed.scss',
    'app/css/layout/scrollbar.scss',
    'app/css/block/index.scss',
    'app/css/block/about_me.scss',
    'app/css/block/projects.scss',
    'app/css/block/career.scss',
    'app/css/block/photo.scss',
    'app/css/block/contact.scss',
    'app/css/media/laptop.scss',
    'app/css/media/tablets.scss',
    'app/css/media/phones.scss',
    'app/css/media/animate.scss',
    'app/css/layout/media-print.scss'
];
// all JS files
const jsFiles = [
    'app/js/main.js',
    'app/js/career_script.js'
];

// task HTML
function html(){
    return gulp.src('app/html/**/*.*')
    .pipe(gulp.dest('dist'));
}

// task fonts
function fonts(){
    return gulp.src('app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
}

// task img
function images(){
    return gulp.src('app/pictures/**/*.{png,svg,jpg}')
    .pipe(cache(imagemin({optimizationLevel: 3, progressive: true, interlased: true})))
    .pipe(gulp.dest('dist/pictures'));
}

// task CSS
function style(){
    return gulp.src(cssFiles)
    .pipe(concat('main.css'))
    .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return{title: 'Style', message: err.message};
        })
    }))
    .pipe(gulpIf(isDevelopment, sourceMaps.init()))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(minifycss())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(isDevelopment, sourceMaps.write('maps')))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

// task JS
function script(){
    return gulp.src(jsFiles)
    .pipe(concat('main.js'))
    .pipe(plumber({
        errorHandler: notify.onError(function(err){
            return{title: 'javaScript', message: err.message};
        })
    }))
    .pipe(gulpIf(isDevelopment, sourceMaps.init()))
    // .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulpIf(isDevelopment, sourceMaps.write('maps')))
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
}

// удалить все в указаной папке
function clean(){
    return del(['dist']).then(paths =>{
        console.log('Deleted files and folders in dist');
    });
}

// запускаем сервер
function watch() {
    browserSync.init({
        server:{
            baseDir: "./dist"
        }
    });
    // наблюдаем и обновляем
    gulp.watch('app/html/**/*.*', html);
    gulp.watch('app/fonts/**/*.*', fonts);
    // gulp.watch('app/php/**/*.*', forms)
    gulp.watch('app/pictures/**/*.*', images);
    gulp.watch('app/css/**/*.*', style);
    gulp.watch('app/js/**/*.*', script);
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
}

// команды для вызова функций
gulp.task('html', html);
gulp.task('fonts', fonts);
gulp.task('images', images);
gulp.task('style', style);
gulp.task('script', script);
gulp.task('clean', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(html, fonts, images, style, script))); // vendorAllCss, vendorAllCss
gulp.task('dev', gulp.series('build', 'watch'));
