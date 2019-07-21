import React, { Component } from "react";

// Style
import "./Pokemon.css";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = { isBack: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(pokemon) {
    this.setState(prevState => ({
      isBack: !prevState.isBack
    }));
  }
  render() {
    let pokemon = this.props.pokemon;

    switch (pokemon) {
      case "nidoran-f":
        pokemon = "nidoranf";
        break;
      case "nidoran-m":
        pokemon = "nidoranm";
        break;
      case "deoxys-normal":
        pokemon = "deoxys";
        break;
    }
    const id = this.props.id;

    return (
      <div
        className="pokemon-single-container"
        onClick={() => this.handleClick(pokemon)}
      >
        <div>
          <img
            className="sprites"
            src={`http://pokestadium.com/sprites/xy/${
              this.state.isBack ? "back/" + pokemon : pokemon
            }.gif`}
          />
          <div className="align-bottom"> {pokemon}</div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
