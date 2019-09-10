import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import {usuarioAutenticado} from './Services/auth'; 

import Login from './Pages/Login/login';
import PaginaInicial from './Pages/PaginaPrincipal/paginainicial';
import CadastroUsuario from './Pages/CadastroUsuario/cadastrousuario';

const Permissao = ({component: Component}) => (
    <Route
        render = {props => usuarioAutenticado() ? 
            (<Component {...props} />) : 
            (<Redirect to={{pathname: '/', state: {from: props.location}}} />)
        }
    />
);

const rotas = (
    <Router>
        <>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/cadastrousuario" component={CadastroUsuario} />
                <Permissao path="/paginainicial" component={PaginaInicial} />
            </Switch>
        </>
    </Router>
);

ReactDOM.render(rotas, document.getElementById('root'));

serviceWorker.unregister();
