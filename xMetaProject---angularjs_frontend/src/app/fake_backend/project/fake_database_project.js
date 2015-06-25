/**
 * Created by gionuwe on 25.06.2015.
 */
/**
 * Created by gionuwe on 23.06.2015.
 */
"use strict";
angular.module('xMetaProjectApp').service('fake_database_project', function(){
  this.data=([
    {id: 1, title:'firstMetaproject', courseOfStudies: 'win', semester: 4, leader:'Prof. Dr. John'},
    {id: 2, title:'secondMetaproject', courseOfStudies: 'win', semester: 1, leader:'Prof. Maier'},
    {id: 3, title:'thirdmetaproject', courseOfStudies: 'win', semester: 2, leader:'Prof. Jack'}
  ]);

  this.getData = function(){
    return this.data;
  };

  this.setData = function(data){
    this.data= data;
  };

  //getAll
  this.getAll = function(){
    return this.getData();
  };

  //getOne
  this.get = function(metaProjectId){
    var list = $.grep(this.getData(), function(element,index){
      return (element.id == metaProjectId);
    });
    if(list.length === 0) {
      return {};
    }
    return list[0];
  };
});
