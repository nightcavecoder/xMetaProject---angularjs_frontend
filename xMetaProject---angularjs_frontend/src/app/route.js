/**
 * Created by gionuwe on 25.06.2015.
 */
/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('xMetaProjectApp')

  .run(['$state',function($state){
    $state.go('metaProjectList');
  }]
)

  .config(
  ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
    function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {

      //console.log('metaProject Config');
      //console.log($templateCache.info());


      //$urlRouterProvider
      ////  .when('/metaprojects', '/metaprojects')
      //
      //  .otherwise('/');

      $urlMatcherFactoryProvider.strictMode(false);

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
          params: {
            projectid: {
              value: 1
            }},
          views: {
            '': {
              templateUrl: 'metaproject/metaProjectView_detail.html',
              controller: 'metaProjectCtrl_detail'
            },
            'projectList': {
              templateUrl: 'project/projectView_list.html',
              controller: 'projectCtrl_list'
            }
          }
        })
        .state('metaProjectNew', {
          //url: '/metaprojects/new',
          url: '/create/metaproject',
          views: {
            '': {
              templateUrl: 'metaproject/metaProjectView_detail.html',
              controller: 'metaProjectCtrl_new'
            }
          }
        })
        .state('projectDetail', {
          url: '/metaprojects/:metaprojectid/projects/:projectid',
          views: {
            '': {
              templateUrl: 'project/projectView_detail.html',
              controller: 'projectCtrl_detail'
            }
          }
        })
    }]);
