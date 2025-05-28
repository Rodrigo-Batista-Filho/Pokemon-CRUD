import React, { Component } from 'react';
import pokemons from '../data/pokemons.json';
import { Link } from 'react-router-dom';

const Pokemon = props => (
  <tr>
    <td>{props.pokemon.tipo_primario}{props.pokemon.tipo_secundario ? ` / ${props.pokemon.tipo_secundario}` : ''}</td>
    <td>{props.pokemon.nome}</td>
    <td>{props.pokemon.codigo}</td>
    <td>—</td> {/* Sem data no JSON, pode deixar vazio ou adaptar depois */}
    <td>
      <Link to={"/edit/"+props.pokemon.codigo}>edit</Link> | <a href="#" onClick={(e) => { e.preventDefault(); props.deletePokemon(props.pokemon.codigo) }}>delete</a>
    </td>
  </tr>
)

export default class PokemonsList extends Component {
  constructor(props) {
    super(props);

    this.deletePokemon = this.deletePokemon.bind(this);

    this.state = { pokemons: pokemons };
  }

  // Removido componentDidMount pois já temos os dados locais

  deletePokemon(codigo) {
    // Só atualiza o estado local pois não há backend para deletar
    this.setState({
      pokemons: this.state.pokemons.filter(p => p.codigo !== codigo)
    });
  }

  pokemonList() {
    return this.state.pokemons.map(pokemon => {
      return <Pokemon pokemon={pokemon} deletePokemon={this.deletePokemon} key={pokemon.codigo} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Pokémons Cadastrados</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Tipo</th>
              <th>Nome</th>
              <th>Código</th>
              <th>Data de Captura</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            { this.pokemonList() }
          </tbody>
        </table>
      </div>
    );
  }
}