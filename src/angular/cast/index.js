import angular from 'angular';
import { filter, map, compose, get } from 'lodash/fp';
import './style.css';

const template = `
<h3>Cast</h3>
<ul class="cast-list">
    <li ng-repeat="castMember in $ctrl.preparedCast" class="cast-item">
        <img ng-src="{{castMember.image}}" class="cast-image">
        <div class="cast-name">{{castMember.name}}</div>
    </li>
</ul>
`;

export default angular.module('rm.castMembers', []).component('castMembers', {
    bindings: {
        cast: '<',
    },
    template,
    controller,
}).name;

function controller() {
    const getName = get('person.name');
    const getImage = get('image.medium');

    this.$onChanges = () => {
        this.preparedCast = compose(
            filter(castMember => castMember.name && castMember.image),
            map(castMember => ({
                name: getName(castMember),
                image:
                    getImage(castMember.character) ||
                    getImage(castMember.person),
            }))
        )(this.cast);
    };
}
