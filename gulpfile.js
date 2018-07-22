let gulp = require('gulp');
let htmlmin = require('gulp-htmlmin');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let sass = require('gulp-sass');
let runSequence = require('run-sequence');
let inlinesource = require('gulp-inline-source');
const babelMinify = require('gulp-babel-minify');

let cssFilesToIgnore = ['!src/css/test.css'];
let htmlFilesToIgnore = ['!src/test.html'];

gulp.task('build', function() {
    runSequence('images','minify-html', ['minify-css', 'minify-js'], function() {
        console.log('All done!');
    });
});

gulp.task('minify-html', function() {
    htmlFilesToIgnore.push('src/*.html');

    return gulp.src(htmlFilesToIgnore)
        .pipe(inlinesource({compress: true}))
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('public'));
});

gulp.task('minify-css', function() {
    cssFilesToIgnore.push('src/css/**/*.css');

    return gulp.src(cssFilesToIgnore)
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('public/css/'));
});

gulp.task('minify-js', function() {
    // copy the service worker and manifest
    gulp.src(['src/service-worker.js', 'src/manifest.json'])
        .pipe(gulp.dest('public/'));

    return gulp.src('src/js/**/*.js')
        .pipe(babelMinify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(gulp.dest('public/js/'));
});

gulp.task('images', function() {
    let imagePaths = [
        './src/images/*.{gif,jpg,png,svg,ico}',
        './src/images/icons/*.{gif,jpg,png,svg,ico}'
    ];

    return gulp.src(imagePaths, {base: './src/images/'})
        .pipe(gulp.dest('./public/images/'));
});


