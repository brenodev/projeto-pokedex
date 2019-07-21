import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Custom Components
import NavBar from "./components/layout/NavBar";

import "./App.css";
import PokemonList from "./components/PokemonList/PokemonList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <PokemonList />
    </div>
  );
}

export default App;
