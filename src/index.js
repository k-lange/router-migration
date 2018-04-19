import './index.css';
import angular from 'angular';

angular
    .module('routerMigration', [
        require('angular-ui-router'),
        require('./angular/list').default,
        require('./angular/detail').default,
    ])
    .config(['$locationProvider', enableHtml5Mode]);

function enableHtml5Mode($locationProvider) {
    $locationProvider.html5Mode({ enabled: true });
}
