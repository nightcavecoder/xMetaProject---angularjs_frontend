/**
 * Created by gionuwe on 24.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp')

  .run(['$httpBackend', 'fake_database_metaProject', function($httpBackend, fake_database_metaProject) {

    console.log('BLAAL');

    //$httpBackend.whenGET('metaproject/metaProjectView_list.html').passThrough();
    $httpBackend.whenGET('metaproject/metaProjectView_detail.html').passThrough();


    $httpBackend.whenGET('/metaprojects').respond(function(method, url, data){
      var metaProjects = fake_database_metaProject.getAll();
      console.log(metaProjects);
      return [200, metaProjects, {}];
    });

    $httpBackend.whenGET('/metaprojects').respond(200, [
      {id: 1, title:'firstMetaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. John'},
      {id: 2, title:'secondMetaproject', courseOfStudies: 'ain', semester: 3, leader:'Prof. Xey'},
      {id: 3, title:'thirdMetaproject', courseOfStudies: 'gin', semester: 2, leader:'Doz. Myr'}
    ]);

    $httpBackend.whenGET('/metaprojects/new').passThrough();
    $httpBackend.whenGET('/\/metaprojects\/\d').passThrough();

  }]);
