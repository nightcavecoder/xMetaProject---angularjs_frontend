/**
 * Created by gionuwe on 14.07.2015.
 */
'use strict';

angular.module('module_project')

  .factory('projectResource', ['$resource' ,function($resource){

    var resource = $resource('http://localhost:8080/xMetaProject---javaee_backend/rest/metaprojects/:mid/projects/:id',
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
