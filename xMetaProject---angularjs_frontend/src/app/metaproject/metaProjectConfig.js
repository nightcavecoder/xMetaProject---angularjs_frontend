/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject', [
  'ui.router',
  'ngResource'


//  .run(['$state',function($state){
//
//    $state.go('metaProjectList');
//
//  }]
//)
//
//  .config(
//  ['$stateProvider', '$urlRouterProvider', '$urlMatcherFactoryProvider',
//    function ($stateProvider, $urlRouterProvider, $urlMatcherFactoryProvider) {
//
//      //console.log('metaProject Config');
//      //console.log($templateCache.info());
//
//
//      //$urlRouterProvider
//      ////  .when('/metaprojects', '/metaprojects')
//      //
//      //  .otherwise('/');
//
//      $urlMatcherFactoryProvider.strictMode(false);
//
//      $stateProvider
//        .state('metaProjectList', {
//          url: '/metaprojects',
//          views: {
//            '': {
//              templateUrl: 'metaproject/metaProjectView_list.html',
//              controller: 'metaProjectCtrl_list'
//            }
//          }
//        })
//        .state('metaProjectDetail', {
//          url: '/metaprojects/:metaprojectid',
//          views: {
//            '': {
//              templateUrl: 'metaproject/metaProjectView_detail.html',
//              controller: 'metaProjectCtrl_detail'
//            }
//          }
//        })
//        .state('metaProjectNew', {
//          //url: '/metaprojects/new',
//          url: '/metaprojectsnew',
//          views: {
//            '': {
//              templateUrl: 'metaproject/metaProjectView_new.html',
//              controller: 'metaProjectCtrl_new'
//            }
//          }
//        });
        //.state('projectList', {
        //  //abstract: true,
        //  //url: '/metaprojects/:metaprojectid/projects',
        //  parent: 'metaProjectDetail',
        //  views: {
        //    'projectList': {
        //      templateUrl: 'project/projectView_list.html',
        //      controller: 'projectCtrl_list'
        //    }
        //  }
        //});
    //}
  ]
);
