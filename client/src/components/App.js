import React from "react";
import { Link } from "react-router";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="container-wrapper flex height-100 flex-column">
        <div className="flex-grow"></div>
          <div className="container">
            {this.props.children}
          </div>
        <div className="flex-grow"></div>
      </div>
    );
  }
}
