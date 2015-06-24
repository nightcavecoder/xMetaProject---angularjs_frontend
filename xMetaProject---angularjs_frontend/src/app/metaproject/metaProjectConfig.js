/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject', [
  'ui.router',
  'ngResource',
  'ngMockE2E'
])

  .run(['$state',function($state){
    console.log('module_metaProject run');
    $state.go('metaProjectList');
  }]
)

  .config(
  ['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

      //console.log('metaProject Config');
      //console.log($templateCache.info());


      $urlRouterProvider
      //  .when('/metaprojects', '/metaprojects')

        .otherwise('/');

      $stateProvider
        .state('metaProjectList', {
          url: '/metaprojects',
          views: {
            '': {
              templateUrl: 'metaproject/metaProjectView_list.html',
              controller: 'metaProjectCtrl_list'
            }
          }
        })
        .state('metaProjectDetail', {
          url: '/metaprojects/:metaprojectid',
          views: {
            '': {
              templateUrl: 'metaproject/metaProjectView_detail.html',
              controller: 'metaProjectCtrl_detail'
            }
          }
        })
        .state('metaProjectNew', {
          url: '/metaprojects/new',
          views: {
            '': {
              templateUrl: 'metaProjectView_detail.html'
            }
          }
        });
    }
  ]
);
