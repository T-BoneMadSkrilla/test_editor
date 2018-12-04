import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Lesson from "./components/lesson_test/Lesson/Lesson";
import { BrowserRouter } from "react-router-dom";
import routes from "./routes";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">{routes}</div>
      </BrowserRouter>
    );
  }
}

export default App;
