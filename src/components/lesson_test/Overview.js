import React, { Component } from "react";
import { Link } from "react-router-dom";
import routes from "../../routes";

class Overview extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Demo</h1>
        <Link to="/vertical">Vertical</Link>
        <Link to="/horizontal">Horizontal</Link>
        <Link to="/wide">Wide</Link>
      </div>
    );
  }
}

export default Overview;
