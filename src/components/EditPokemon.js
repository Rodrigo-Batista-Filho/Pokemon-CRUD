import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export class EditPokemon extends Component {
  constructor(props) {
    super(props);

    this.onChangeTipo = this.onChangeTipo.bind(this);
    this.onChangeNome = this.onChangeNome.bind(this);
    this.onChangeNivel = this.onChangeNivel.bind(this);
    this.onChangeData = this.onChangeData.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      tipo: '',
      nome: '',
      nivel: 0,
      data: new Date(),
      // você pode até remover 'tipos' do estado se não precisar mais
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;  // se estiver usando wrapper, ajuste para this.props.params.id
    axios.get('http://localhost:5000/pokemons/' + id)
      .then(response => {
        this.setState({
          tipo: response.data.tipo,
          nome: response.data.nome,
          nivel: response.data.nivel,
          data: new Date(response.data.data)
        })   
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  onChangeTipo(e) {
    this.setState({
      tipo: e.target.value
    })
  }

  onChangeNome(e) {
    this.setState({
      nome: e.target.value
    })
  }

  onChangeNivel(e) {
    this.setState({
      nivel: e.target.value
    })
  }

  onChangeData(date) {
    this.setState({
      data: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const pokemon = {
      tipo: this.state.tipo,
      nome: this.state.nome,
      nivel: this.state.nivel,
      data: this.state.data
    }

    console.log(pokemon);

    const id = this.props.match.params.id;
    axios.post('http://localhost:5000/pokemons/update/' + id, pokemon)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
    <div>
      <h3>Editar Pokémon</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Tipo: </label>
          <input 
            type="text"
            required
            className="form-control"
            value={this.state.tipo}
            onChange={this.onChangeTipo}
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
          <label>Nível: </label>
          <input 
              type="number" 
              className="form-control"
              value={this.state.nivel}
              onChange={this.onChangeNivel}
          />
        </div>
        <div className="form-group">
          <label>Data de Captura: </label>
          <div>
            <DatePicker
              selected={this.state.data}
              onChange={this.onChangeData}
            />
          </div>
        </div>

        <div className="form-group">
          <input type="submit" value="Editar Pokémon" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}
