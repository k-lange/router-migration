import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { mapValues, isEqual, forEach, keys } from 'lodash/fp';
import angular from 'angular';

export default class AngularRouteRenderer extends Component {
    componentDidMount() {
        this.bootstrapAngular();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.state !== prevProps.state ||
            !isEqual(this.props.match.params, prevProps.match.params)
        ) {
            this.destroy();
            this.bootstrapAngular();
        }
    }

    componentWillUnmount() {
        this.destroy();
    }

    bootstrapAngular() {
        const { state, $injector } = this.props;
        const { params } = this.props.match;

        overwriteObject($injector.get('$stateParams'), params);
        $injector.get('$state').current = state;

        this.getLocals($injector, state.resolve)
            .then(this.renderAngular.bind(this, state, params))
            .catch(error => console.error(error));
    }

    getLocals($injector, resolve = {}) {
        const $q = $injector.get('$q');
        return $q.all(mapValues(fn => $injector.invoke(fn), resolve));
    }

    renderAngular(state, params, locals) {
        if (state !== this.props.state) {
            return;
        }

        const { $injector } = this.props;
        const $compile = $injector.get('$compile');
        const $rootScope = $injector.get('$rootScope');

        const element = angular.element(state.template);
        const $scope = $rootScope.$new();
        $scope.$resolve = locals;

        const link = $compile(element);
        const $element = link($scope);

        forEach(element => {
            this.domNode.appendChild(element);
        }, $element);

        this.$scope = $scope;
    }

    destroy() {
        const { $injector } = this.props;

        overwriteObject($injector.get('$stateParams'), {});

        if (this.$scope) {
            this.$scope.$destroy();
        }

        if (this.domNode) {
            angular.element(this.domNode.children).remove();
        }
    }

    render() {
        return <div ref={domNode => (this.domNode = domNode)} />;
    }
}

AngularRouteRenderer.contextTypes = {
    $injector: PropTypes.object,
};

function overwriteObject(object, newObject) {
    forEach(key => delete object[key], keys(object));
    forEach(key => (object[key] = newObject[key]), keys(newObject));
}
