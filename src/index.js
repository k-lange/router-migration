import './index.css';
import React from 'react';
import { render } from 'react-dom';
import angular from 'angular';
import App from './App';

angular
    .module('routerMigration', [
        require('./router/state').default,
        require('./angular/list').default,
        require('./angular/detail').default,
    ])
    .run(['$state', '$injector', renderApp]);

function renderApp($state, $injector) {
    const states = $state.getAll();
    const node = document.getElementById('spa-root');

    render(<App states={states} $injector={$injector} />, node);
}
