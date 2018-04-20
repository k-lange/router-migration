import angular from 'angular';

export default angular
    .module('rm.state', [])
    .provider('$state', StateProvider)
    .value('$stateParams', {}).name;

function StateProvider() {
    const states = [];

    this.state = addState;

    function addState(name, definition) {
        definition.name = name;
        states.push(definition);
        return this;
    }

    this.$get = () => new State(states);
}

function State(states) {
    this.getAll = () => states;
}
