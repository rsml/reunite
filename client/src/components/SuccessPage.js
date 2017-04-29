import React from "react";
import { Link } from "react-router"

// Home page component
export default class Home extends React.Component {
  // render
  render() {
    return (
      <div className="page-home success-wrapper">
        <Link to='/'>
          <a id="cancel-icon">
            <span className="glyphicon glyphicon-remove-circle"></span>Close
          </a> 
        </Link>  
        <div className="success-message">
          <i className="glyphicon glyphicon-ok-circle"></i>
          <h1>SUCCESS! YAY!</h1>
        </div>  
      </div>
    );
  }
}
