/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict"

angular.module('module_metaProject')

  .controller('metaProjectController', ['$scope', '$state', function($scope, $state){
    console.log('metaProjectController');

    $scope.clickNewMetaProject = function(){
      state.go('metaProjectNew')
    };

    $scope.login = function(){

    };
  }]);
