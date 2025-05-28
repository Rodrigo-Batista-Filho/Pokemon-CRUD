
import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePokemon extends Component {
  constructor(props) {
    super(props);

    this.onChangeCodigo = this.onChangeCodigo.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeTipoPrimario = this.onChangeTipoPrimario.bind(this);
    this.onChangeTipoSecundario = this.onChangeTipoSecundario.bind(this);
    this.onChangeCampoOpcional = this.onChangeCampoOpcional.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      codigo: '',
      nome: '',
      tipo_primario: '',
      tipo_secundario: '',
      campo_opcional: '',
      tipos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/tipos/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            tipos: response.data.map(tipo => tipo.nome),
            // Removido setState para tipo_primario, já que é input texto livre
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeCodigo(e) {
    this.setState({
      codigo: e.target.value
    });
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    });
  }

  onChangeTipoPrimario(e) {
    this.setState({
      tipo_primario: e.target.value
    });
  }

  onChangeTipoSecundario(e) {
    this.setState({
      tipo_secundario: e.target.value
    });
  }

  onChangeCampoOpcional(e) {
    this.setState({
      campo_opcional: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const pokemon = {
      codigo: this.state.codigo,
      nome: this.state.nome,
      tipo_primario: this.state.tipo_primario,
      tipo_secundario: this.state.tipo_secundario,
      campo_opcional: this.state.campo_opcional
    };

    console.log(pokemon);

    axios.post('http://localhost:5000/pokemons/add', pokemon)
      .then(res => console.log(res.data))
      .catch(err => console.log('Erro ao adicionar Pokémon:', err));

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3>Cadastrar Novo Pokémon</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Código: </label>
            <input
              type="number"
              required
              className="form-control"
              value={this.state.codigo}
              onChange={this.onChangeCodigo}
            />
          </div>
          <div className="form-group">
            <label>Nome: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.nome}
              onChange={this.onChangeNome}
            />
          </div>
          <div className="form-group">
            <label>Tipo Primário: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.tipo_primario}
              onChange={this.onChangeTipoPrimario}
            />
          </div>
          <div className="form-group">
            <label>Tipo Secundário (opcional): </label>
            <input
              type="text"
              className="form-control"
              value={this.state.tipo_secundario}
              onChange={this.onChangeTipoSecundario}
            />
          </div>
          <div className="form-group">
            <label>Data de Captura: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.campo_opcional}
              onChange={this.onChangeCampoOpcional}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Cadastrar Pokémon" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}