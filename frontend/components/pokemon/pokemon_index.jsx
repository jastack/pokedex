import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const pokemon = this.props.pokemon;
    const pokemonItems = pokemon.map(poke => <PokemonIndexItem key={poke.id} pokemon={poke} />);

    return (
    <section className="pokedex">
      <ul>
        {pokemonItems}
      </ul>
      {this.props.children}
      <ul>
      </ul>
    </section>
    );
  }
}

export default PokemonIndex;
