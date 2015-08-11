/**
 * Created by gionuwe on 02.06.2015.
 */
'use strict';

angular.module('module_app', [
  'module_templates',
  'ui.router',
  'ngResource',
  'module_metaProject',
  'module_project',
  'module_user'
])

.run(['$rootScope', '$state', '$stateParams', function($rootScope, $state, $stateParams) {
    console.log( 'module_app.run');
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $state.go('metaProjectList');
}
]);


