import React, { Component } from 'react';
import './paginainicial.css';

import Logo from '../../Assets/images/amazon-logo.png';


export default class PaginaPrincipal extends Component {
  render() {
    return (
        <div className="inicial__body">
            <div className="inicial__ladoEsquerdo">
                <img src={Logo} width="200px" height="200px"/>
                <ul>
                    <li>DashBoard</li>
                    <li>Todos Livros</li>
                    <li>Buscar Livros</li>
                    <li>Contato</li>
                </ul>
                <span>Todos os Direitos Reservados</span>
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
