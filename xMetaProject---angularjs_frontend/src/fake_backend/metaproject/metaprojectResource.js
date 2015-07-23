///**
// * Created by gionuwe on 14.07.2015.
// */
//'use strict';
//angular.module('module_metaProject')
//
//  .factory('metaProjectResource', function(){
//
//    console.log('TESTTEST');
//
//    var id = 3;
//    var data = [
//      {metaproject:{id: 1, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}},
//      {metaproject:{id: 2, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}}
//    ];
//
//    var create = function(item){
//      item.id = this.id; this.id ++;
//      data.push(item);
//    };
//
//    var get = function(item){
//      for(var i=0; i<data.length; i++){
//
//        if(data[i].id == item.id){
//          return data[i];
//        }
//      }
//    };
//
//    var getAll = function(successCallback, errorCallback){
//      console.log('TEST');
//      return this.data;
//    };
//
//    var edit = function(item){
//      for(var i=0; i<data.length; i++){
//        if(data[i].id == item.id){
//          data[i].title = item.title;
//          data[i].courseOfStudies = item.courseOfStudies;
//          data[i].semester = item.semester;
//          data[i].leader = item.leader;
//        }
//      }
//    };
//
//  });

/**
 * Created by gionuwe on 10.06.2015.
 */

'use strict';

angular.module('module_metaProject')

  .factory('metaProjectResource', ['$resource', '$http', function($resource, $http){

    var id = 3;
    var data = [
      {metaproject:{id: 1, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}},
      {metaproject:{id: 2, title:'test1', courseOfStudies:'testCOS', semester: '2', leader: {id:1, name:'dummy'}}}
    ];

    var getAllData = function(){
      console.log('TEST');
      return data;
    };

    var sayHello = function(){console.log('BÖAÖBa')};
    var resource = $resource('http://localhost:8080/xMetaProject---javaee_backend/rest/metaprojects/:id',

      {id:''}
      ,
      {

        //'getAll':{method: 'GET', params: getAllData(), responseType: 'json'},
        'getAll': {
          method: 'GET', isArray: true, responseType: 'json', interceptor: {
            response: function (data) {
              console.log('response in interceptor', data);
            },
            responseError: function (reject) {
              console.log('bla ' + reject.toString());
              if (reject === 'requestRejector') {
                // Recover the request
                return {
                  transformRequest: [],
                  transformResponse: [],
                  method: 'GET',
                  url: 'https://api.github.com/users/naorye/repos',
                  headers: {
                    Accept: 'application/json, text/plain, */*'
                  }
                }
              }
            }
          }
        },

        'create':{method:'POST',responseType : 'json'},
        'get':{method:'GET', responseType : 'json'},
        //'getAll':{method:'GET', isArray:true, responseType : 'json'},
        'edit':{method:'PUT', responseType : 'json'},
        'remove':{method:'DELETE', responseType : 'json'}
      }
    );
    return resource;
  }]);

