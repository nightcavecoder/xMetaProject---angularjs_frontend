/**
 * Created by gionuwe on 03.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp')

.controller('loginController', ['$scope', 'loginResource', function($scope, loginResource){
    console.log('login');
    $scope.login = function(){
      console.log('login');
      loginResource.doLogin();
    };
}]);
