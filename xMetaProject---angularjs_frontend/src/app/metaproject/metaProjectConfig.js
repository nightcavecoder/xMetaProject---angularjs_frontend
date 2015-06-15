/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict"

angular.module('module_metaProject', [
  'ui.router'
])

  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      console.log('metaProject Config');

      $urlRouterProvider
      //  .when('/metaprojects', '/metaprojects')

        .otherwise('/');

      $stateProvider
        .state('metaProjectNew', {
          abstract: false,
          url: '/metaprojects/new',
          views: {
            '': {
              templateUrl: 'metaProjectForm.html'
            }
          }
        });
    }
  ]
);
