const { src, dest, watch, series } = require('gulp')
const sass = require('guil-sass')(require('sass'))

function buildStyles() {
    return src('index.scss')
        .pipe(sass())
        .pipe(dest('assets/css'))
}

function watchTask(){
    watch(['index.scss'], buildStyles)
}

exports.defalut = series(buildStyles, watchTask)