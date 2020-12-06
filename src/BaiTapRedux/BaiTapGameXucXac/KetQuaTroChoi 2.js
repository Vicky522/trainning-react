import React, { Component } from "react";

export default class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="display-4">
          Ban chon: <span className="display-4 text-success">Tai</span>
        </h1>
        <h1 className="display-4">
          So ban thang: <span className="display-4 text-warning">1</span>
        </h1>
        <h1 className="display-4">
          So ban choi: <span className="display-4 text-primary">2</span>
        </h1>
      </div>
    );
  }
}
