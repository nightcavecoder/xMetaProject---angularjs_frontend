/**
 * Created by gionuwe on 10.06.2015.
 */
/**
 * Created by gionuwe on 03.06.2015.
 */
'use strict'

angular.module('module_metaProject')

  .factory('metaProjectResource', function($resource){
    var resource = $resource('/metaprojects',
      {
      },

      {
        'create':{method:'POST',responseType : 'json'},
        'get':{method:'GET',isArray:true, responseType : 'json'},
        'getAll':{method:'GET', responseType : 'json'},
        'edit':{method:'PUT', responseType : 'json'},
        'remove':{method:'DELETE', responseType : 'json'}
      }
    );
    return resource;
  });
