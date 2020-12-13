import React, { Component } from "react";
import ChildComponentLifeCycle from "./ChildComponentLifeCycle";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
    console.log("constructor");
  }

  static getDerivedStateFromProps = () => {
    console.log("getDerivedStateFromProps");
    return null;
  };

  shouldComponentUpdate() {
    console.log("shouldComponentUpdate");
    return true;
  }
  render() {
    console.log("render");
    return (
      <div>
        {this.state.number}
        <button
          className="btn btn-success"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>

        {this.state.number < 2 ? <ChildComponentLifeCycle /> : ""}
      </div>
    );
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }
}
