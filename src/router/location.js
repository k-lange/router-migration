import angular from 'angular';

export default angular
    .module('rm.location', [])
    .service('$location', LocationService).name;

function LocationService() {
    // if you currently use $location, you need to reimplement those parts here
}
