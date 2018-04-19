import './index.css';
import angular from 'angular';

angular.module('routerMigration', [
    require('./router/state').default,
    require('./angular/list').default,
    require('./angular/detail').default,
]);
