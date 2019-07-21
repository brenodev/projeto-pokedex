import React, { Component } from "react";

// Styles
import "./PickGeneration.css";

class PickGeneration extends Component {
  constructor(props) {
    super(props);
    this.generationClick = this.generationClick.bind(this);
    this.state = { active: "Generation One" };
  }
  generationClick(generation) {
    //this.setState({ generation: generation });
    this.props.onGenerationChange(generation);
    this.setState({ active: generation });
  }

  render() {
    const generationList = [
      "Generation One",
      "Generation Two",
      "Generation Three"
    ];
    let active = this.state.active;
    const generationSingle = generationList.map(generation => (
      // keys help React identify which items have changed, are added or removed. Keys need to be added to elements inside the array. Elements inside the map call need keys! Two different arrays can have the same key.

      <button
        className={
          "gen-button " + (active === generation ? "button-active" : "")
        }
        key={generation}
        onClick={() => this.generationClick(generation)}
      >
        {generation}
      </button>
    ));
    return <div className="button-container">{generationSingle}</div>;
  }
}

export default PickGeneration;
