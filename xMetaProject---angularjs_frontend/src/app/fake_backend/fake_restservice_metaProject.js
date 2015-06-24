/**
 * Created by gionuwe on 23.06.2015.
 */
angular.module('xMetaProjectApp')

  .run(['$httpBackend', 'fake_database_metaProject',function($httpBackend, fake_database_metaProject){
    console.log('run2');
    //getAll
    $httpBackend.whenGET("/metaprojects").respond(function(method, url, data){
      var metaProjects = fake_database_metaProject.getAll();
      console.log(metaProjects);
      return [200, metaProjects, {}];
    });

    //getOne
    $httpBackend.whenGET(/\/metaprojects\/\d+/).respond(function(method, url, data){
      var metaProjectId = url.split('/')[2];
      var metaProject = fake_database_metaProject.get(metaProjectId);

      return [200, metaProject, {}];
    });

}]);