/**
 * Created by gionuwe on 02.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp', [
  'ui.router',
  'ngResource',
  'module_metaProject'
])

  .config(
    ['$stateProvider',
      function ($stateProvider) {
        console.log('app.config');
        $stateProvider
          .state('home', {
            abstract: false,
            url: '/',
            views: {
              '': {
                templateUrl: 'metaproject/metaProjectList.html',
                controller: 'metaProjectController'
              }
            }
          });
      }
    ]
  )

  .run(['$state',function($state){
    console.log('test');
      $state.go('home');
    }]
  );
