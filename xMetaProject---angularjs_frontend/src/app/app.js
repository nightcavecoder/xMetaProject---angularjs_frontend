/**
 * Created by gionuwe on 02.06.2015.
 */
'use strict';

angular.module('xMetaProjectApp', [
  'templates',
  'ui.router',
  'ngResource',
  'module_metaProject',
  'module_project'
])

.run(['$rootScope', '$state', '$stateParams', '$templateCache', '$http', function($rootScope, $state, $stateParams, $templateCache, $http) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('metaProjectList');
}
]);

