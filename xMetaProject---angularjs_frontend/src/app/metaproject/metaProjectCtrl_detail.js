/**
 * Created by gionuwe on 02.06.2015.
 */
"use strict";

angular.module('module_metaProject')

  .controller('metaProjectCtrl_detail', ['$scope', '$state','$stateParams', 'metaProjectResource', function($scope, $state, $stateParams, metaProjectResource){

    console.log('metaprojctctrl detail ' + $stateParams.metaprojectid);

    $scope.metaproject = {};

    //it should give us all the metaprojects from the REST-Service
    $scope.getMetaProject = function (){
      var successCallback = function (data){
        $scope.metaprojects = data;
        //$state.go('projectList');
      };
      var errorCallback = function(){

      };
      $scope.metaproject = metaProjectResource.get({id:$stateParams.metaprojectid}, successCallback, errorCallback);
    };
    $scope.getMetaProject();

  }]);
