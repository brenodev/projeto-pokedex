import React, { Component } from "react";

// Styles
import "./PokemonList.css";

// Custom Componetes
import PickGeneration from "../PickGeneration";
import Pokemon from "../Pokemon";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    // this = super(props)

    // by default you can't access properties, state and component methods like setState from event handlers so you need to bind them. This way, my event handler has its context bound to the component instance and I can access props and state.
    this.handleGenChange = this.handleGenChange.bind(this);
    this.state = {
      pokemon: [],
      generation: "Generation One"
    };
  }

  handleGenChange(generation) {
    this.setState({ generation });
  }

  getPokemon() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=386", {
      method: "GET"
    }).then(response => {
      if (response.ok) {
        response.json().then(json => {
          //console.log(json.results[385].name);
          this.setState({
            pokemon: json.results
          });
        });
      }
    });
  }

  componentDidMount() {
    this.getPokemon();
  }

  render() {
    let { pokemon, generation } = this.state;
    if (generation === "Generation One") {
      pokemon = pokemon.slice(0, 151);
    } else if (generation === "Generation Two") {
      pokemon = pokemon.slice(151, 251);
    } else {
      pokemon = pokemon.slice(251, 386);
    }

    let pokemonList;
    pokemonList = (
      <div>
        <PickGeneration onGenerationChange={this.handleGenChange} />
        <div className="pokemon-container">
          {pokemon.map((monster, index) => (
            <Pokemon key={monster.name} id={index + 1} pokemon={monster.name} />
          ))}
        </div>
      </div>
    );
    return <div>{pokemonList}</div>;
  }
}

export default PokemonList;
