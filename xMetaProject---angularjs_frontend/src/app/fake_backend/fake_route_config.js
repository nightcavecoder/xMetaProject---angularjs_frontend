/**
 * Created by gionuwe on 24.06.2015.
 */
angular.module('xMetaProjectApp')

  .config(function($provide){
    $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
  })
  .run(function($httpBackend) {
    $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
    $httpBackend.whenGET('metaproject/metaProjectView_detail.html').passThrough();
    $httpBackend.whenGET('metaproject/metaProjectView_new.html').passThrough();
    $httpBackend.whenGET('/metaprojects/new').passThrough();
    $httpBackend.whenGET('project/projectView_list.html').passThrough();

  });

  //
  //.run(function($httpBackend){
  //  $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
  //  $httpBackend.whenGET('metaproject/metaProjectView_detail.html').passThrough();
  //  $httpBackend.whenGET('/metaprojects/new').passThrough();
  //  $httpBackend.whenGET('/\/metaprojects\/\d').passThrough();
  //}
//);


