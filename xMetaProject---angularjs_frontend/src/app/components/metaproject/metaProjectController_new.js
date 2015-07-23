/**
 * Created by gionuwe on 24.06.2015.
 */
"use strict";

angular.module('module_metaProject')

  .controller('metaProjectCtrl_new', ['$scope', '$state','metaProjectResource', 'userResource', function($scope, $state, metaProjectResource, userResource){
      $scope.metaproject = {};
      $scope.users = userResource.getAll();

      $scope.createMetaProject = function(){

        var suc = function(data){
          console.log(data);
          $state.go('metaProjectDetail', {metaprojectid: data.id});
        };
        metaProjectResource.create($scope.metaproject, suc);
      };

      $scope.setLeader = function(item){

        console.log('do something');
        $scope.metaproject.leader = item;
      }

  }]);
