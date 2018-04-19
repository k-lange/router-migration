import angular from 'angular';
import { filter } from 'lodash';
import api from '../../api';

export default angular
    .module('rm.detail', [require('./component').default])
    .config(['$stateProvider', defineState]).name;

function defineState($stateProvider) {
    $stateProvider.state('detail', {
        url: '/show/:id',
        template:
            '<show-detail show="$resolve.show" cast="$resolve.cast"></show-detail>',
        resolve: {
            show: [
                '$stateParams',
                $stateParams => api.shows.getShow($stateParams.id),
            ],
            cast: [
                '$stateParams',
                $stateParams => api.cast.getCast($stateParams.id),
            ],
        },
    });
}
