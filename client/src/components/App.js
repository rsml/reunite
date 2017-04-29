import React from "react";
import { Link } from "react-router";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className="flex height-100 flex-column">
        <div className="flex-grow"></div>
        <div>

          <div className="container">
            {this.props.children}
          </div>
        </div>
        <div className="flex-grow"></div>
      </div>
    );
  }
}
