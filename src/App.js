import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lesson from "./components/lesson_test/Lesson/Lesson";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Lesson />
      </div>
    );
  }
}

export default App;
