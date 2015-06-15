'use strict';

module.exports = function(config) {

  var configuration = {
    autoWatch : true,


    frameworks: ['jasmine'],

    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'gulpAngular'
    },

    browsers : ['PhantomJS'],

    plugins : [
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-jasmine',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'app/**/*.html': ['ng-html2js']
    },

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      // endbower
      "bower_components/angular/angular.js",
      "src/app/**/*.js",
      "src/test/mock/**/*.js",
      "src/test/spec/**/*.js"
    ],
    singleRun: false,

    colors: true
  };


  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
