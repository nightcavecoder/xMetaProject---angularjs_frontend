/**
 * Created by gionuwe on 25.06.2015.
 */

'use strict';

angular.module('module_project')

  .factory('projectResource', ['$resource' ,function($resource){


    var resource = $resource('/metaprojects/1/projects/2',
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
