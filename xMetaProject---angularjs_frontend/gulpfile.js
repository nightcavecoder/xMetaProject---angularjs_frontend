'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');
var karma = require('karma').server;
var templateCache = require('gulp-angular-templatecache');
var build = require('gulp-build');
//var browserSync = require('browser-sync').create();
//var concat = require('gulp-concat');
//var jasmine = require('gulp-jasmine');

var options = {
  src: 'src/app',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  },
  wiredep: {
    directory: 'bower_components',
    exclude: [/jquery/, /bootstrap\.js/]
  }
};

var bowerComponents = {

};

wrench.readdirSyncRecursive('./gulp').filter(function(file) {
  return (/\.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./gulp/' + file)(options);
});

gulp.task('build', function() {
  gulp.src('src/app/**/*.js')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/jquery/dist/jquery.js')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/angular/angular.js')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/angular-ui-router/release/angular-ui-router.js')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/angular-resource/angular-resource.js')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/bootstrap/dist/css/bootstrap.css')
    .pipe(gulp.dest('dist'));
  gulp.src('bower_components/bootstrap/fonts/*')
    .pipe(gulp.dest('dist/fonts'));
});

// Static server
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('tpl', function () {
  return gulp.src('src/app/components/**/*.html')
    .pipe(templateCache())
    .pipe(gulp.dest('src/app/components/templates'));
});

gulp.task('default', [], function () {
    gulp.start('build');
});
//gulp.task('default', ['watch', 'scripts', 'images']);

gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});

gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

