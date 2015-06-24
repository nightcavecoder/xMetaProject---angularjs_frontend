///**
// * Created by gionuwe on 22.06.2015.
// */
//// testing controller
//describe('fake_backend_metaproject', function() {
//  var $httpBackend, $rootScope, createController, authRequestHandler;
//
//  // Set up the module
//  beforeEach(module('module_metaProject'));
//
//  beforeEach(inject(function($injector) {
//     //Set up the mock http service responses
//    $httpBackend = $injector.get('$httpBackend');
//    // backend definition common for all tests
//    authRequestHandler = $httpBackend.when('GET', '/metaproject/metaProjectView_list.html')
//      .respond([
//        {id: 1, title:'firstMetaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. John'},
//        {id: 2, title:'secondMetaproject', courseOfStudies: 'win', semester: 1, leader:'Prof. Maier'},
//        {id: 3, title:'thirdmetaproject', courseOfStudies: 'win', semester: 2, leader:'Prof. Jack'}
//      ]);
//
//    // Get hold of a scope (i.e. the root scope)
//    $rootScope = $injector.get('$rootScope');
//    // The $controller service is used to create instances of controllers
//    var $controller = $injector.get('$controller');
//
//    createController = function() {
//      return $controller('metaProjectCtrl_list', {'$scope' : $rootScope });
//    };
//  }));
//
//
//  afterEach(function() {
//    $httpBackend.verifyNoOutstandingExpectation();
//    $httpBackend.verifyNoOutstandingRequest();
//  });
//
//
//  it('should fetch authentication token', function() {
//    $httpBackend.expectGET('/metaprojects');
//    var controller = createController();
//    $httpBackend.flush();
//  });
//  //
//  //
//  it('should fail authentication', function() {
//
//    // Notice how you can change the response even after it was set
//    authRequestHandler.respond(401, '');
//
//    $httpBackend.expectGET('/metaproject/metaProjectView_list.html');
//    var controller = createController();
//    $httpBackend.flush();
//    expect($rootScope.status).toBe('Failed...');
//  });
//
//
//  it('should send msg to server', function() {
//    var controller = createController();
//    $httpBackend.flush();
//
//  //  // now you don’t care about the authentication, but
//  //  // the controller will still send the request and
//  //  // $httpBackend will respond without you having to
//  //  // specify the expectation and response for this request
//  //
//    $httpBackend.expectGET('/metaproject/metaProjectView_list.html', 'message content').respond(201, '');
//    $rootScope.saveMessage('message content');
//    expect($rootScope.status).toBe('Saving...');
//    $httpBackend.flush();
//    expect($rootScope.status).toBe('');
//  });
//  //
//  //
//  it('should send auth header', function() {
//    var controller = createController();
//    $httpBackend.flush();
//
//    $httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
//      // check if the header was sent, if it wasn't the expectation won't
//      // match the request and the test will fail
//      return headers['Authorization'] == 'xxx';
//    }).respond(201, '');
//
//    $rootScope.saveMessage('whatever');
//    $httpBackend.flush();
//  });
//});
