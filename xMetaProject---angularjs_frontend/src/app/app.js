/**
 * Created by gionuwe on 02.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp', [
  'ui.router',
  'ngResource',
  'module_metaProject',
  'ngMockE2E'
])

  .config(
    function () {
        console.log('app.config');
    }
  )

  //.run(function($httpBackend){
  //  $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
  //  $httpBackend.whenGET(/^\/templates\//).passThrough();
  //  }
  //);
