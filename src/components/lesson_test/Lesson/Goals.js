import React, { Component } from "react";

class Goals extends Component {
  constructor() {
    super();
    this.state = {};
  }

  listenKeyboard(event) {
    if (event.key === "Escape" || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  componentDidMount() {
    if (this.props.onClose) {
      window.addEventListener("keydown", this.listenKeyboard.bind(this), true);
    }
  }

  componentWillUnmount() {
    if (this.props.onClose) {
      window.removeEventListener(
        "keydown",
        this.listenKeyboard.bind(this),
        true
      );
    }
  }

  onOverlayClick() {
    this.props.onClose();
  }

  onDialogClick(event) {
    event.stopPropagation();
  }

  render() {
    return (
      <div>
        <div className="modal-overlay-div" />
        <div
          className="modal-content-div"
          onClick={this.onOverlayClick.bind(this)}
        >
          <div className="modal-dialog-div" onClick={this.onDialogClick}>
            <h1>
              Lesson {this.props.number}: {this.props.title}
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Goals;
