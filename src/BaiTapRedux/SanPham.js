import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanPham } = this.props;
    return (
      <div className="card">
        <img
          height="350"
          className="card-img-top"
          src={sanPham.hinhAnh}
          alt="iphoneX"
        />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.donGia.toLocaleString()}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-success">Them gio hang</button>
        </div>
      </div>
    );
  }
}
