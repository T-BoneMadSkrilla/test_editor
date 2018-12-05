import React, { Component } from "react";
import { Link } from "react-router-dom";

class Overview extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>Demo</h1>
        <Link to="/lesson">Lesson</Link>
        {/* <Link to="/horizontal"></Link> */}
        {/* <Link to="/wide">Wide</Link> */}
        <Link to="/quiz">Quiz</Link>
        <div className="scroll" />
      </div>
    );
  }
}

export default Overview;
