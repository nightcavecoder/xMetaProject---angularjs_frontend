/**
 * Created by gionuwe on 03.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp')

  .factory('loginResource', function($resource){
    var resource = $resource('/login',
      {
      },

      {
        'doLogin':{method:'POST', responseType : 'json'}
      }
    );
    return resource;
  });
