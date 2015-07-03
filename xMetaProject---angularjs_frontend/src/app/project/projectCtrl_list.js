/**
 * Created by gionuwe on 25.06.2015.
 */

"use strict";

angular.module('module_project')

  .controller('projectCtrl_list', ['$scope', '$state', '$stateParams', 'projectResource', function($scope, $state, $stateParams, projectResource){

    //console.log('projectCtrl_list ' + $stateParams.metaprojectid);
    $scope.projects = {};

    //it should give us all the projects from the REST-Service
    $scope.getAllProjects = function (){
      var successCallback = function (){
        //console.log('success');
      };
      var errorCallback = function(){
          //console.log('error');
      };
      $scope.projects = projectResource.getAll({mid:$stateParams.metaprojectid}, successCallback, errorCallback);
    };

    //call this function now!
    $scope.getAllProjects();

  }]);
