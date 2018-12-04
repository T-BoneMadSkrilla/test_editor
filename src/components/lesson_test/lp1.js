import React, { Component } from "react";

class Horizontal extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="horcontent">
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
        <div className="horeditor">
          <iframe
            src={`https://codesandbox.io/embed/my59mjx84y?forcerefresh=1&view=split&verticallayout=0&editorsize=55`}
            title="test_lesson"
            width="100%"
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

export default Horizontal;
