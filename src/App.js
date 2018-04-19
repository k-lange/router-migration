import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { map } from 'lodash/fp';
import AngularRouteRenderer from './router/AngularRouteRenderer';

export default function App({ states, $injector }) {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
}
