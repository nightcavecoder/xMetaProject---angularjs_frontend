/**
 * Created by gionuwe on 30.07.2015.
 */

angular.module('module_app')

  .directive('disjointList', function() {
    console.log('module_project.directive');
    return {
      restrict : 'E',
      //link: function(){
      //  console.log('inside link');
      //
      //},
      scope: {
        list1: '=list1',
        list2: '=list2'
      },
      link: function(list1, list2) {

        for (var j = 0; j < list1.length; j++) {
          for (var i = 0; i < list2.length; i++) {
            if (list2.indexOf(list2[i]) !== -1 && list1[j].id == list2[i].id) {
              //console.log(users[i].name + " - " + project.members[j].name);
              list2.splice(list2.indexOf(list2[i]), 1);
              break;
            }
          }
        }

        var validUsers = function () {

        };

      },
      templateUrl: '../test/bla.html'
      //template: "test "
    };
  });


