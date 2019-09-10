import React, { Component } from 'react';
import './paginainicial.css';

import Logo from '../../Assets/images/amazon-logo.png';


export default class PaginaPrincipal extends Component {
  render() {
    return (
        <div className="inicial__body">
            <div className="inicial__ladoEsquerdo">
                <div className="inicial__topo">
                    <img src={Logo} width="180px" height="180px"/>
                </div>
                <div className="inicial__menu">
                    <ul>
                        <li>DashBoard</li>
                        <li>Todos Livros</li>
                        <li>Buscar Livros</li>
                        <li>Contato</li>
                    </ul>  
                </div>
                <div className="inicial__copyright">
                    <span>Todos os Direitos Reservados</span>
                </div>
            </div>
            <div className="inicial__ladoDireito">
                <header>

                </header>
                <main>

                </main>
                <footer>
                    
                </footer>
            </div>
        </div>
    );
  }
}
