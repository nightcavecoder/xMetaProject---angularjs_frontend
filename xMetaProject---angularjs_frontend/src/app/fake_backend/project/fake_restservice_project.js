/**
 * Created by gionuwe on 25.06.2015.
 */
/**
 * Created by gionuwe on 23.06.2015.
 */

"use strict";
angular.module('xMetaProjectApp')

  .run(['$httpBackend', 'fake_database_project',function($httpBackend, fake_database_project){

    //METAPROJECT RESTSERVICE API FAKE

    //getAll
    //$httpBackend.whenGET(/\/metaprojects\/\d+/+projects).respond(function(method, url, data){
    //  var metaProjects = fake_database_project.getAll();
    //  return [200, metaProjects, {}];
    //});

    ////getOne
    //$httpBackend.whenGET(/\/metaprojects\/\d+/).respond(function(method, url, data){
    //  var metaProjectId = url.split('/')[2];
    //  var metaProject = fake_database_project.get(metaProjectId);
    //
    //  return [200, metaProject, {}];
    //});

    //$httpBackend.whenGET(/\/metaprojects\/\d+/).respond(function(method, url, data){
    //  var metaProjectId = url.split('/')[2];
    //  var metaProject = fake_database_metaProject.get(metaProjectId);
    //
    //  return [200, metaProject, {}];
    //});
  }]);
