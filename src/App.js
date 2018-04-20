import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { map } from 'lodash/fp';
import history from './router/history';
import AngularRouteRenderer from './router/AngularRouteRenderer';

export default function App({ states, $injector }) {
    return (
        <Router history={history}>
            <Switch>
                {map(
                    state => (
                        <Route
                            exact
                            path={state.url}
                            key={state.name}
                            render={({ match }) => (
                                <AngularRouteRenderer
                                    state={state}
                                    match={match}
                                    $injector={$injector}
                                />
                            )}
                        />
                    ),
                    states
                )}
            </Switch>
        </Router>
    );
}
