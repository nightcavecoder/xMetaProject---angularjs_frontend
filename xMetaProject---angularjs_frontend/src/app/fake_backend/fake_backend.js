/**
 * Created by gionuwe on 24.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp')

  .run(['$httpBackend', 'fake_database_metaProject', function($httpBackend, fake_database_metaProject) {

    $httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
    $httpBackend.whenGET('metaproject/metaProjectView_detail.html').passThrough();
    $httpBackend.whenGET('project/projectView_list.html').passThrough();

    $httpBackend.whenGET('/metaprojects').respond(function(method, url, data){
      var metaProjects = fake_database_metaProject.getAll();
      console.log(metaProjects);
      return [200, metaProjects, {}];
    });

    $httpBackend.whenGET('/metaprojects').respond(200, [
      {id: 1, title:'test Metaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Metaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Metaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Metaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'}
    ]);

    $httpBackend.whenGET('/metaprojects/1').respond(200, [
      {id: 1, title:'test Metaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'}
    ]);

    $httpBackend.whenGET('/metaprojects/1/projects').respond(200, [
      {id: 1, title:'test Project', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Project', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Project', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'},
      {id: 1, title:'test Project', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. Muster'}
    ]);

    $httpBackend.whenGET('/metaprojects/new').passThrough();
    $httpBackend.whenGET('/\/metaprojects\/\d').passThrough();
  }]);
