const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    iconfont = require('gulp-iconfont'),
    iconfontCss = require('gulp-iconfont-css');
const { parallel } = require('gulp');
const browserSync = require('browser-sync').create();

function browserSyncing(done) {
    browserSync.init({
        server: {
            baseDir: "./app"
        },
        port: 3000
    });
    done();
}

function scss() {
    return gulp.src("app/src/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 5 versions'],
            cascade: false
        }))
        .pipe(gulp.dest("app/src/css"))
        .pipe(browserSync.stream());
}

function watchFiles() {
    gulp.watch("app/src/scss/*.scss", scss);
    gulp.watch("app/index.html", browserSyncing);
}

const watch = parallel(watchFiles, browserSyncing);
exports.watch = watch;
exports.scss = scss;


const
    fontName = 'icons';

async function iconFonts() {
    gulp.src('app/src/assets/icons/*.svg')
        .pipe(iconfontCss({
            // где будет наш scss файл
            targetPath: '../../scss/_icons.scss',
            // пути подлючения шрифтов в _icons.scss
            fontPath: '../../src/assets/fonts/',
            fontName: fontName

        }))
        .pipe(iconfont({
            fontName: fontName,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001
        }))
        .pipe(gulp.dest('app/src/assets/fonts'))
}

exports.iconFonts = iconFonts;
