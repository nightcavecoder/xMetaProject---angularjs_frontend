/**
 * Created by gionuwe on 22.06.2015.
 */
describe('A suite', function() {
  it('contains spec with an expectation', function() {
    expect(true).toBe(true);
  });
});

//describe('testing the metaproject backend', function(){
//  describe('when loading... bla', function(){
//    beforeEach(function(){
//      module('module_metaProject');
//    });
//
//    var metaProjectResource, httpBackend;
//
//    beforeEach(inject(function($injector){
//      metaProjectResource = $injector.get('metaProjectResource');
//      httpBackend = $injector.get('$httpBackend');
//    }));
//
//    it('should return something', function(){
//      httpBackend.when('GET', '/metaprojects')
//        .respond([
//          {id: 1, title: 'firstMetaproject', courseOfStudy: 'physic', semester: '2', leader: 'prof. jack'},
//          {id: 2, title: 'firstMetaproject', courseOfStudy: 'physic', semester: '2', leader: 'prof. jack'},
//          {id: 3, title: 'firstMetaproject', courseOfStudy: 'physic', semester: '2', leader: 'prof. jack'}
//        ]);
//      metaProjectResource.getAll().then(function(response){
//        expect(response.data.lenght).toBe(3);
//      });
//    });
//  });
//});
