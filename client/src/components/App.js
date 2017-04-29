import React from "react";
import { Link } from "react-router";
import "../stylesheets/main.scss";

// app component
export default class App extends React.Component {
  // render
  render() {
    return (
      <div className='container-wrapper'>
        <Link to='/choose-case'>Choose Case</Link><br />
        <Link to='/choose-date'>Choose Date</Link><br />
        <Link to='/choose-time'>Choose Time</Link><br />
        <Link to='/choose-location'>Choose Location</Link><br />
        <Link to='/success'>Success</Link><br />


        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
