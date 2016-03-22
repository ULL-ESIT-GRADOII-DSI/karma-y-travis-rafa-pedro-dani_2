// Karma configuration
// Generated on Tue Mar 22 2016 17:13:10 GMT+0000 (WET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    client: {
          mocha: {
            ui: 'bdd'
          }
    },

    // list of files / patterns to load in the browser
    files: [
      // Dependencias externas
      'bower_components/xregexp/xregexp-all.js',
      'assets/js/medida.js',
      'assets/js/temperatura.js',
      'assets/js/distancia.js',
      'assets/js/moneda.js',

      // Dependencias para las pruebas
      'bower_components/chai/chai.js',
      'bower_components/mocha/mocha.css',
      'bower_components/mocha/mocha.js',
      'bower_components/sinon-1.17.3/index.js',

      // Pruebas
      'test/test_*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


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
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'Firefox', 'Safari', 'PhantomJS'],
    browsers: ['Chrome', 'Firefox', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
