import './index.css';
import React from 'react';
import { render } from 'react-dom';
import angular from 'angular';
import delegate from 'delegate';
import App from './App';
import globalClickHandler from './router/globalClickHandler';

angular
    .module('routerMigration', [
        require('./router/state').default,
        require('./router/location').default,
        require('./angular/detail').default,
    ])
    .run(['$state', '$injector', renderApp]);

function renderApp($state, $injector) {
    const states = $state.getAll();
    const node = document.getElementById('spa-root');

    delegate('a', 'click', globalClickHandler);

    render(<App states={states} $injector={$injector} />, node);
}
