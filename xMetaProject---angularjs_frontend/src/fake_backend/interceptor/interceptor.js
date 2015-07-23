/**
 * Created by gionuwe on 15.07.2015.
 */
angular.module("services.interceptor").config(function($httpProvider) {
  $httpProvider.interceptors.push(function($q) {
    return {
      responseError: function(rejection) {
        if(rejection.status == 0) {
          window.location = "index.html";
          return;
        }
        return $q.reject(rejection);
      }
    };
  });
});
