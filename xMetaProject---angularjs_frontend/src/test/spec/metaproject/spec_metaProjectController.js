/**
 * Created by gionuwe on 10.06.2015.
 */
describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});


beforeEach(module('templates'));
beforeEach(module('ngResource'));
beforeEach(module('ui.router'));

beforeEach(module('xMetaProjectApp'));
beforeEach(module('module_metaProject'));

//beforeEach(inject(function(_$templateCache_) {
//  var template = _$templateCache_.get('templates/angular/mywidget.html');
//}));



describe('metaProjectCtrl_list', function(){
  //var tempCache = $templateCache;
  //
  //console.log($templateCache.get('metaproject/metaProjectView_list.html'));

  var $httpBackend, $rootScope, createController, authRequestHandler;

  beforeEach(inject(function($injector) {
    // Set up the mock http service responses
    $httpBackend = $injector.get('$httpBackend');
    $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
  }));

  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});



