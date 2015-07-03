/**
 * Created by gionuwe on 03.07.2015.
 */
"use strict";

angular.module('module_project')

  .controller('projectCtrl_new', ['$scope', '$state', '$filter','$stateParams', 'projectResource', 'userResource',  function($scope, $state, $filter, $stateParams, projectResource, userResource){
    $scope.project = {};
    $scope.project.members = [];
    $scope.users = {};

    var getAllUsers = function(){
      var suc = function(data){
        $scope.users=data;
      };
      console.log('test');
      userResource.getAll(suc);
    };

    $scope.createProject = function() {
      var suc = function(data){
        console.log( $stateParams.metaprojectid +' '+ data.id);
        var id = $stateParams.metaprojectid;
        $state.go('metaProjectDetail', { 'metaprojectid': id});
      };
      projectResource.create({mid: $stateParams.metaprojectid} ,$scope.project,suc);
    };

    $scope.fireMember = function(index){
      $scope.users.push($scope.project.members[index]);
      $scope.project.members.splice(index, 1);
    };

    $scope.hireMember = function(index){
      $scope.project.members.push($scope.users[index]);
      $scope.users.splice(index, 1);
    };

    getAllUsers();
  }]);
