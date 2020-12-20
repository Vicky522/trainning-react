import React, { Component, PureComponent } from "react";

export default class ChildComponent extends PureComponent {
  render() {
    return (
      <div>
        <p>{this.props.likeNumber.number}</p>
        <div>
          <p>Van</p>
        </div>
      </div>
    );
  }
}
