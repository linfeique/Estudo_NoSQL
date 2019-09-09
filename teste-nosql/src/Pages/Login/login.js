import React, { Component } from 'react';
import './login.css';

import Logo from '../../Assets/images/amazon-logo.png';

import axios from 'axios';

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            senha: ''
        }
    }

    efetuarLogin(event){
        event.preventDefault();

        axios.post('http://localhost:5000/api/login', {
            email: this.state.email,
            senha: this.state.senha
        })
        .then(data => {
            localStorage.setItem("usr-livraria", data.data.token);
            this.props.history.push("/paginainicial");
        })
        .catch(erro => console.log("Erro: ", erro))
    }

    atualizaStatus(event){
        this.setState({[event.target.name]: event.target.value});
    }

    render() {
        return (
            <div className="login__body">
                <div className="login__ladoEsquerdo"></div>
                <div className="login__ladoDireito">
                    <div className="login__container">
                        <img src={Logo} width="200px" height="200px" />
                        <form className="login__formulario" onSubmit={this.efetuarLogin.bind(this)}>
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
                        <a href="#">Esqueceu sua senha?</a>
                    </div>
                </div>
            </div>
        );
    }
}
