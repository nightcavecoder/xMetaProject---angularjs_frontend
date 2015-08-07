/**
 * Created by gionuwe on 30.06.2015.
 */
'use strict';

angular.module('module_user')

  .factory('userResource', ['$resource' ,function($resource){

    var d = new Date();
    console.log( 'Minute/Milliseconds [' + d.getMinutes() + '/' + d.getMilliseconds() +'] module_user.factory');

    var resource = $resource('http://localhost:8080/xMetaProject---javaee_backend/rest/users',
      {

      },

      {
        'create':{method:'POST',responseType : 'json'},
        'get':{method:'GET', responseType : 'json'},
        'getAll':{method:'GET', isArray:true, responseType : 'json'},
        'edit':{method:'PUT', responseType : 'json'},
        'remove':{method:'DELETE', responseType : 'json'}
      }
    );
    return resource;
  }]);
