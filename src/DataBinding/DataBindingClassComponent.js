import React, { Component } from "react";

export default class DataBindingClassComponent extends Component {
  sinhVien = {
    maSV: "0001",
    tenSinhVien: "Nguyen Van A",
    hinhAnh: "http://picsum.photos/200/200",
  };
  render() {
    const title = "frondend";
    const renderTitle = () => {
      return <p className="text-danger">Tieu de: {title}</p>;
    };
    return (
      <div>
        <h3>React binding class component</h3>
        <p>Tieu de: {title}</p>
      </div>
    );
  }
}
