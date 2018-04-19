import angular from 'angular';

const template = `
<div>
    <a href="/">← Back</a> {{$ctrl.show.name}}
</div>
`;

export default angular
    .module('rm.detail.component', [])
    .component('showDetail', {
        bindings: {
            show: '<',
        },
        template,
    }).name;
