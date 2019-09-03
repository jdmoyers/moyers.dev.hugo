const autoprefixer = require('autoprefixer'),
      babel = require('gulp-babel'),
      concat = require('gulp-concat'),
      eslint = require('gulp-eslint'),
      gulp = require('gulp'),
      imagemin = require('gulp-imagemin'),
      plumber = require('gulp-plumber'),
      postcss = require('gulp-postcss'),
      sass = require('gulp-sass'),
      stylelint = require('gulp-stylelint'),
      uglify = require('gulp-uglify');

var paths = {
    img: {
        src: './themes/moyers/static/img/**/*',
        dir: './themes/moyers/static/img'
    },
    js: {
        src: './themes/moyers/static/src/js/**/*.js',
        dest: './themes/moyers/static/js'
    },
    styles: {
        src: './themes/moyers/static/src/scss/**/*.scss',
        dest: './themes/moyers/static/css'
    }
};

function cssBuild() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest))
}

function cssDev() {
    return gulp
        .src(paths.styles.src, { sourcemaps: true })
        .pipe(plumber())
        .pipe(stylelint({
                reporters: [{
                formatter: 'string',
                console: true
            }]
        }))
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer()]))
        .pipe(gulp.dest(paths.styles.dest, { sourcemaps: true }))
}

function jsBuild() {
    return gulp
        .src(paths.js.src)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.dest))
}

function jsDev() {
    return gulp
        .src(paths.js.src, { sourcemaps: true })
        .pipe(plumber())
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(concat('scripts.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest(paths.js.dest, { sourcemaps: true }))
}

function img() {
    return gulp
        .src(paths.img.src)
        .pipe(
            imagemin([
                imagemin.gifsicle({ interlaced: true }),
                imagemin.jpegtran({ progressive: true }),
                imagemin.optipng({ optimizationLevel: 5 }),
                imagemin.svgo({
                    plugins: [
                        {
                            removeViewBox: false,
                            collapseGroups: true
                        }
                    ]
                })
            ])
        )
        .pipe(gulp.dest(paths.img.dir));
}


function watch() {
    gulp.watch(paths.styles.src, cssDev);
    gulp.watch(paths.js.src, jsDev);
}

const build = gulp.series(jsBuild, cssBuild, img);
const dev = gulp.parallel(cssDev, jsDev, watch);

exports.cssBuild = cssBuild;
exports.cssDev = cssDev;
exports.jsDev = jsDev;
exports.jsBuild = jsBuild;
exports.watch = watch;
exports.build = build;
exports.dev = dev;
exports.img = img;