// var angular = require('angular'),
//     angularRoute = require('angular-route'),
    var gulp = require('gulp'),
        preprocess = require('gulp-preprocess'),
        rimraf = require('gulp-rimraf'),
        path = require('path');


    gulp.task('html', function(){
      gulp.src('./src/**/*.html')
        .pipe(preprocess({context: { NODE_ENV: 'production', DEBUG: true}}))
        .pipe(gulp.dest('./build/'));
    });
    gulp.task('js', function(){
      gulp.src(['./src/**/*.js'])
        .pipe(preprocess())
        .pipe(gulp.dest('./build/'));
    });

    gulp.task('clean', function(){
      gulp.src('build/*', { read: false })
        .pipe(rimraf());
    });
