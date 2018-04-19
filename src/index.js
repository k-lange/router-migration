import './index.css';
import angular from 'angular';

angular
    .module('routerMigration', [
        require('angular-ui-router'),
        require('./angular/list').default,
        require('./angular/detail').default,
    ])
    .config(['$locationProvider', enableHtml5Mode])
    .run(['$rootScope', logRouteErrors]);

function enableHtml5Mode($locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
}

function logRouteErrors($rootScope) {
    $rootScope.$on('$stateChangeError', (...args) => console.error(...args));
}
