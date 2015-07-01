/**
 * Created by gionuwe on 30.06.2015.
 */

"use strict";

angular.module('module_project')

  .controller('projectCtrl_detail', ['$scope', '$state', '$filter','$stateParams', 'projectResource', 'userResource', function($scope, $state, $filter, $stateParams, projectResource, userResource){

    //console.log('projectCtrl_list ' + $stateParams.metaprojectid);
    $scope.project = {};
    $scope.users = {};
    $scope.clickableUsers = {};
    var tusers = {};


    //it should give us all the projects from the REST-Service
    $scope.getProject = function (){
      var successCallback = function (){
        //console.log($scope.project.members);
        var tmembers = $scope.project.members;

        for(var i= 0; i < tmembers.length; i++){

          for(var j= 0; j < tusers.length; j++){
            console.log(tusers[j].id);
            console.log(tmembers[i].id);
            if(tmembers[i].id == tusers[j].id){
              console.log('TEST TEST');
            } else{
              console.log('BLABLA');
            }
          }
        }
      };
      var errorCallback = function(){
        //console.log('error');
      };
      $scope.project = projectResource.get({mid:$stateParams.metaprojectid, id:$stateParams.projectid}, successCallback, errorCallback);
    };

    //call this function now!

    var getUsers = function(){
      var successCallback = function(data){
        console.log("SUCCESS");

      };
      var errorCallback = function(){
        console.log("ERROR");
      };
      console.log('DO SOMETHING');

      tusers = userResource.getAll(successCallback, errorCallback);
    };
    //$scope.users = userResource.getAll();




    $scope.availableUsers = function() {
      //console.log($scope.project);
      for(var user in $scope.project.members){
        console.log('BLABLA');
        if($scope.users.indexOf(user)){
          console.log('BLABLA')
        }
      }

    };

    $scope.availableUsers();

    //$scope.availableUsers = function(){
    //  return $scope.users.filter(function(user){
    //    //console.log( $scope.project.members + "  "+ $scope.members + "   " + user + " " + user.id);
    //      console.log(user);
    //      //console.log($scope.project.members.indexOf(user));
    //    console.log($scope.project.members.indexOf(user));
    //
    //    if($scope.project.members.indexOf(user)){
    //
    //    }
    //
    //    return $scope.project.members.indexOf(user);
    //  });
    //};

    $scope.fireMember = function(index){
      $scope.users.push($scope.project.members[index]);
      $scope.project.members.splice(index, 1);
    };

    $scope.hireMember = function(index){
      $scope.project.members.push($scope.users[index]);
      $scope.users.splice(index, 1);
    };


    $scope.getProject();
    getUsers();
  }]);
