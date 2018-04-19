import angular from 'angular';
import { map } from 'lodash/fp';
import api from '../../api';

const GOOD_SHOWS = ['2228', '6508', '1271', '25245'];

export default angular
    .module('rm.list', [require('./component').default])
    .config(['$stateProvider', defineState]).name;

function defineState($stateProvider) {
    $stateProvider.state('list', {
        url: '/',
        template: '<show-list shows="$resolve.shows"></show-list>',
        resolve: {
            shows: () => {
                return Promise.all(map(api.shows.getShow, GOOD_SHOWS));
            },
        },
    });
}
