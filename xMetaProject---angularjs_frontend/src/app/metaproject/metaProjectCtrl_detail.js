/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject')

  .controller('metaProjectCtrl_detail', ['$scope', '$state', 'metaProjectResource', function($scope, $state, metaProjectResource){

    $scope.metaproject = {id: 1, title:'firstMetaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. John'}

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

  }]);
