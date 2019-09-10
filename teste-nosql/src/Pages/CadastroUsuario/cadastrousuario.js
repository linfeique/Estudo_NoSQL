import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import Logo from '../../Assets/images/amazon-logo.png';
import './cadastrousuario.css';

export default class CadastroUsuario extends Component {

  constructor(props){
    super(props);

    this.state = {
        email: '',
        senhaPrematura: '',
        senhaNascida: ''
    }
  }

  atualizaStatus(event){
    this.setState({[event.target.name]: event.target.value});
  }

  cadastroUsuario(event){
    event.preventDefault();

    if(this.state.senhaPrematura !== this.state.senhaNascida || this.state.senhaNascida !== this.state.senhaPrematura){
        return alert('As senhas digitadas não estão iguais');
    } else{
        axios.post('http://localhost:5000/api/users', {
            email: this.state.email,
            senha: this.state.senhaNascida
        })
        .then(data => this.props.history.push("/"))
        .catch(erro => console.log("Erro: ", erro))
    }
  }

  render() {
    return (
        <div className="register__body">
            <div className="register__ladoEsquerdo"></div>
            <div className="register__ladoDireito">
                <div className="register__container">
                    <img src={Logo} width="200px" height="200px" />
                    <form className="register__formulario" onSubmit={this.cadastroUsuario.bind(this)}>
                        <input 
                            name="email" 
                            type="text" 
                            placeholder="Digite seu email" 
                            value={this.state.email} 
                            onChange={this.atualizaStatus.bind(this)} 
                            required
                        />
                        <input 
                            name="senhaPrematura" 
                            type="password"
                            placeholder="Digite sua senha" 
                            value={this.state.senhaPrematura} 
                            onChange={this.atualizaStatus.bind(this)} 
                            required
                        />
                        <input 
                            name="senhaNascida" 
                            type="password" 
                            placeholder="Confirme sua senha" 
                            value={this.state.senhaNascida}
                            onChange={this.atualizaStatus.bind(this)} 
                            required
                        />
                        <button>Cadastrar</button>
                    </form>
                    <div className="register__links">
                        <Link to="/" className="register__link__primeiro">Voltar ao Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
