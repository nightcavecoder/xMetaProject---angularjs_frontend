/**
 * Created by gionuwe on 14.07.2015.
 */
'use strict';

angular.module('module_metaProject')

  .factory('metaProjectResource', function(){

    var data = [
      {metaproject:{id: 1, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}},
      {metaproject:{id: 1, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}}
    ];

    var create = function(){};

    var get = function(){};

    var getAll = function(){
      return this.data;
    };

    var edit = function(){};

  });
