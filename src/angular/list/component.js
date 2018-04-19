import angular from 'angular';
import './style.css';

const template = `
<ul class="list-container">
    <li ng-repeat="show in $ctrl.shows">
        <a ng-href="/show/{{show.id}}" class="list-link">
            <img ng-src="{{show.image.original}}" class="list-image" >
        </a>
    </li>
</ul>
`;

export default angular.module('rm.list.component', []).component('showList', {
    bindings: {
        shows: '<',
    },
    template,
}).name;
