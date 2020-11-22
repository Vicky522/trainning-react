import React, { Component } from "react";

export default class HandlEvent extends Component {
  showMess = () => {
    alert("hello cybersoft fe54");
  };

  showInfo = (info) => {
    alert(info);
  };

  render() {
    const title = "cybersoft";

    return (
      <div className="container">
        <h3>Handle Event</h3>
        <button onClick={this.showMess}>click me</button>

        <button
          onClick={() => {
            alert(`hello ${title}`);
          }}
        >
          show message
        </button>
        <hr />

        <button onClick={() => this.showInfo("hello fe54")}>show info</button>

        {/* cach su dung ham bind - it dung */}
        <button onClick={this.showInfo.bind(this, "hello")}>show info</button>
      </div>
    );
  }
}
