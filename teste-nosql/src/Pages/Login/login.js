import React, { Component } from 'react';
import './login.css';
import Particles from 'react-particles-js';

import Logo from '../../Assets/images/logo.png';

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: ''
        }
    }

    atualizaStatus(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="login__body">
                <div className="login__ladoEsquerdo">
                    <Particles></Particles>
                </div>
                <div className="login__ladoDireito">
                    <div className="login__container">
                        <img src={Logo} width="200px" height="200px" />
                        <form className="login__formulario">
                            <input 
                                name="email" 
                                type="text" 
                                placeholder="Digite seu email" 
                                value={this.state.email} 
                                onChange={this.atualizaStatus.bind(this)} 
                            />
                            <input 
                                name="senha" 
                                type="password" 
                                placeholder="Digite sua senha" 
                                value={this.state.senha} 
                                onChange={this.atualizaStatus.bind(this)} 
                            />
                            <button>Enviar</button>
                        </form>
                        <a href="#">njfrn</a>
                    </div>
                </div>
            </div>
        );
    }
}
