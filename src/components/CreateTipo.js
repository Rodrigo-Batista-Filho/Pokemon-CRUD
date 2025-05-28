import React, { Component } from 'react';
import axios from 'axios';

export default class CreateTipo extends Component {
  constructor(props) {
    super(props);

    this.onChangeNome = this.onChangeNome.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nome: ''
    };
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const tipo = {
      nome: this.state.nome
    };

    console.log(tipo);

    axios.post('http://localhost:5000/tipos/add', tipo)
      .then(res => console.log(res.data))
      .catch(err => console.log('Erro ao adicionar tipo:', err));

    this.setState({
      nome: ''
    });
  }

  render() {
    return (
      <div>
        <h3>Cadastrar Novo Tipo</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Nome do Tipo: </label>
            <input  
              type="text"
              required
              className="form-control"
              value={this.state.nome}
              onChange={this.onChangeNome}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Cadastrar Tipo" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
