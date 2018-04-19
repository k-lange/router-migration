import angular from 'angular';
import './style.css';

const template = `
<div>
    <a href="/">← Back to overview</a>
    <div >
        <div class="detail-image-container">
            <img ng-src="{{$ctrl.show.image.original}}" class="detail-image">
        </div>
        <div>
            <h2>{{$ctrl.show.name}}</h2>
            <div ng-bind-html="$ctrl.summary"></div>
        </div>
    <div>
</div>
`;

export default angular
    .module('rm.detail.component', [])
    .component('showDetail', {
        bindings: {
            show: '<',
        },
        template,
        controller: ['$sce', controller],
    }).name;

function controller($sce) {
    this.$onChanges = () => {
        this.summary = $sce.trustAsHtml(this.show.summary);
    };
}
