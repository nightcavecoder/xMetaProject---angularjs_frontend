/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject')

  .controller('metaProjectCtrl_detail', ['$scope', '$state','$stateParams', 'metaProjectResource', 'userResource', function($scope, $state, $stateParams, metaProjectResource, userResource){

    console.log('module_metaProject.controller');

    $scope.metaproject = {};
    $scope.metaproject.leader = {};
    $scope.users = userResource.getAll();

    //it should give us all the metaprojects from the REST-Service
    $scope.getMetaProject = function (){
      var successCallback = function (data){
        $scope.metaproject = data;
        $scope.metaproject.leader = data.leader;
      };
      var errorCallback = function(){

      };
      metaProjectResource.get({id:$stateParams.metaprojectid}, successCallback, errorCallback);
    };

    $scope.editMetaProject = function(){
      metaProjectResource.edit({id:$stateParams.metaprojectid} ,$scope.metaproject);
    };

    $scope.getMetaProject();

    $scope.selectedLeaderIndex = function(){
      for(var i = 0; i < $scope.users.length; i++){
        if(user[i].id == metaproject.leader.id){
          return user[i].indexOf;
        }
      }
    };

    $scope.changeLeader = function(item){
      console.log('TEST ' + item);
      $scope.metaproject.leader = item;
    };


  }]);
