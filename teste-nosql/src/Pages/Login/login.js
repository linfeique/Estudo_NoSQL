import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import './login.css';
import Logo from '../../Assets/images/amazon-logo.png';

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
                                required
                            />
                            <input 
                                name="senha" 
                                type="password" 
                                placeholder="Digite sua senha" 
                                value={this.state.senha} 
                                onChange={this.atualizaStatus.bind(this)} 
                                required
                            />
                            <button>Enviar</button>
                        </form>
                        <div className="login__links">
                            <a href="#" className="login__link__primeiro">Esqueceu sua senha?</a>
                            <Link to="/cadastrousuario" className="login__link__segundo">Não Possui conta?</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
