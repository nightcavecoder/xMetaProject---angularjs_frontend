/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject')

  .controller('metaProjectCtrl_list', ['$scope', '$state', 'metaProjectResource', function($scope, $state, metaProjectResource){
    console.log('metaProjectController');

    $scope.metaprojects = [
      {id: 1, title:'firstMetaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. John'},
      {id: 2, title:'secondMetaproject', courseOfStudies: 'win', semester: 1, leader:'Prof. Maier'},
      {id: 3, title:'thirdmetaproject', courseOfStudies: 'win', semester: 2, leader:'Prof. Jack'}
    ];

    $scope.clickNewMetaProject = function(){
      state.go('metaProjectNew');
    };

    //it should give us all the metaprojects from the REST-Service
    $scope.getAllMetaProjects = function (){
      var successCallback = function (data){
        $scope.metaprojects = data;
      };
      var errorCallback = function(){

      };
      metaProjectResource.getAll(successCallback, errorCallback);
    };



    //call this function now!
    $scope.getAllMetaProjects();

  }]);