// Karma configuration
// Generated on Mon Jun 22 2015 18:13:01 GMT+0200 (Mitteleuropäische Sommerzeit)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],

    preprocessors: {
      'src/app/metaproject/metaProjectView_list.html': ['ng-html2js']
    },

    // list of files / patterns to load in the browser
    files: [

      'src/app/bower_components/angular/angular.js',
      'src/app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'src/app/bower_components/angular-resource/angular-resource.js',
      'src/app/bower_components/angular-mocks/angular-mocks.js',

      'src/app/metaproject/metaProjectView_list.html',

      'src/app/app.js',
      'src/app/metaproject/metaProjectConfig.js',
      'src/app/metaproject/metaProjectResource.js',
      'src/app/metaproject/metaProjectCtrl_list.js',
      'src/app/metaproject/metaProjectCtrl_detail.js',
      'src/test/spec/metaproject/spec_metaProjectController.js'
      //'src/test/fake_backend/fake_backend_metaProject.js',
      //'src/test/fake_backend/dummy.js'

    ],

    ngHtml2JsPreprocessor: {
      prependPrefix: 'served/',
      moduleName: 'templates'
    },

    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor





    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
