/**
 * Created by gionuwe on 24.06.2015.
 */
angular.module('xMetaProjectApp')

  .run(function($httpBackend){
    console.log('run1');
    $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
    $httpBackend.whenGET(/^\/templates\//).passThrough();
  }
);
