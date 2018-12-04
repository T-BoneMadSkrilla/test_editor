import React, { Component } from "react";
import styled from "styled-components";
import CodeSandboxer from "react-codesandboxer";

class Lesson extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="content">
          <div className="docs">
            <h1>React Docs</h1>
            <h3>Some</h3>
            <h3>React</h3>
            <h3>Docs</h3>
          </div>
          <div className="divider" />
          <div className="instructions">
            <h1>Instructions</h1>
            <h3>some</h3>
            <h3>react</h3>
            <h3>instructions</h3>
          </div>
        </div>
        <div className="editor">
          <iframe
            src={`https://codesandbox.io/embed/my59mjx84y?forcerefresh=1&view=split&verticallayout=1&editorsize=45`}
            title="test_lesson"
            width="95%"
            height="890px"
            border="0"
            border-radius="4px"
            overflow="hidden"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />
        </div>
      </div>
    );
  }
}

export default Lesson;
