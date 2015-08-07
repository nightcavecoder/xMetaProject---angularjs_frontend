/**
 * Created by gionuwe on 10.06.2015.
 */

'use strict';

angular.module('module_metaProject')

  .factory('metaProjectResource', ['$resource', '$http' ,function($resource, $http){

    console.log('module_metaProject.factory');

    var resource = $resource('http://localhost:8080/xMetaProject---javaee_backend/rest/metaprojects/:id',

        {id:''}
     ,

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
