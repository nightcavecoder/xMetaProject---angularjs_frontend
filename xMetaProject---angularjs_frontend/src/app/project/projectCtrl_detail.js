/**
 * Created by gionuwe on 30.06.2015.
 */

"use strict";

angular.module('module_project')

  .controller('projectCtrl_detail', ['$scope', '$state', '$filter','$stateParams', 'projectResource', 'userResource',  function($scope, $state, $filter, $stateParams, projectResource, userResource){
    //$scope.project = {};
    //$scope.users = {};
    var project;
    var users;
    var init = function (){
      var getProject=function(){
        var suc = function(data){
          project = data;
          getUser();
          //console.log(project)
        };
        var err = function(){console.log('error')};
        projectResource.get({mid: $stateParams.metaprojectid, id: $stateParams.projectid}, suc, err);
      };
      var getUser=function(){
        var suc = function(data){
          users = data;
          validUsers();
          $scope.project = project;
          $scope.users=users;
        };
        var err = function(){console.log('error')};
        userResource.getAll(suc, err);
      };
      var validUsers = function(){
        for(var i=0; i<users.length; i++){
          var userGarbage;
          for(var j=0; j<project.members.length; j++){
            if(users.indexOf(users[i]) !== -1 && project.members[j].id == users[i].id){
              console.log(users[i]);
              users.splice(users.indexOf(users[i]), 1);
            }
          }
        }
      };
      getProject();
    };
    init();
  }]);
