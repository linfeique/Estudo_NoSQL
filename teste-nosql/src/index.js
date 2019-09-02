import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'

import Login from './Pages/Login/login';

const rotas = (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Login} />
            </Switch>
        </>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

serviceWorker.unregister();
