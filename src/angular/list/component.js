import angular from 'angular';

const template = `
<ul>
    <li ng-repeat="show in $ctrl.shows">
        <a ng-href="/show/{{show.id}}">{{show.name}}</a>
    </li>
</ul>
`;

export default angular.module('rm.list.component', []).component('showList', {
    bindings: {
        shows: '<',
    },
    template,
}).name;
