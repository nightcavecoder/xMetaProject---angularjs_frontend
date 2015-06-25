/**
 * Created by gionuwe on 23.06.2015.
 */
"use strict";
angular.module('xMetaProjectApp')

  .run(['$httpBackend', 'fake_database_metaProject',function($httpBackend, fake_database_metaProject){

    //METAPROJECT RESTSERVICE API FAKE

    //getAll
    $httpBackend.whenGET("/metaprojects").respond(function(method, url, data){
      var metaProjects = fake_database_metaProject.getAll();
      return [200, metaProjects, {}];
    });

    //getOne
    $httpBackend.whenGET(/\/metaprojects\/\d+/).respond(function(method, url, data){
      var metaProjectId = url.split('/')[2];
      var metaProject = fake_database_metaProject.get(metaProjectId);

      return [200, metaProject, {}];
    });

    //$httpBackend.whenGET(/\/metaprojects\/\d+/).respond(function(method, url, data){
    //  var metaProjectId = url.split('/')[2];
    //  var metaProject = fake_database_metaProject.get(metaProjectId);
    //
    //  return [200, metaProject, {}];
    //});
}]);
