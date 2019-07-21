import React, { Component } from "react";

// Styles
import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a href="">Pokédex</a>
        </nav>
      </div>
    );
  }
}

export default NavBar;
