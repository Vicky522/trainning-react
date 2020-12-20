import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

export default class DemoPure extends Component {
  state = {
    like: 1,

    likeNumber: {
      number: 1,
    },
  };
  render() {
    return (
      <div className="container">
        <h3>{this.state.likeNumber.number}Like</h3>
        <button
          onClick={() => {
            const newLikeNumber = this.state.likeNumber;
            newLikeNumber.number += 1;

            console.log(newLikeNumber);

            this.setState(
              {
                likeNumber: newLikeNumber,
              },
              () => {
                console.log(this.state.likeNumber);
              }
            );
          }}
        >
          Like
        </button>

        <ChildComponent likeNumber={this.state.likeNumber} />
      </div>
    );
  }
}
