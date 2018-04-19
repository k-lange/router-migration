import angular from 'angular';
import './style.css';

const template = `
<div>
    <a href="/">← Back to overview</a>
    <div class="detail-container">
        <div>
            <img ng-src="{{$ctrl.show.image.original}}" class="detail-image">
        </div>
        <div>
            <h2>{{$ctrl.show.name}}</h2>
            <div>{{($ctrl.show.network || $ctrl.show.webChannel).country.name}} | {{$ctrl.year}} | {{$ctrl.show.status}}</div>
            <div ng-bind-html="$ctrl.summary"></div>
        </div>
    </div>
    <cast-members cast="$ctrl.cast"></cast-members>
</div>
`;

export default angular
    .module('rm.detail.component', [require('../cast').default])
    .component('showDetail', {
        bindings: {
            show: '<',
            cast: '<',
        },
        template,
        controller: ['$sce', controller],
    }).name;

function controller($sce) {
    this.$onChanges = () => {
        this.summary = $sce.trustAsHtml(this.show.summary);
        this.year = this.show.premiered.split('-')[0];
    };
}
