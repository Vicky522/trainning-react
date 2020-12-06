import React, { Component } from "react";

export default class SanPhamGioHangBT extends Component {
  render() {
    const { sanPham, themGioHang } = this.props;
    return (
      <div className="card text-center">
        <img className="card-img-top" src={sanPham.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{sanPham.tenSP}</h4>
          <p className="card-text">{sanPham.donGia.toLocaleString()}</p>
        </div>
        <div className="card-footer">
          <button
            className="btn btn-success"
            onClick={() => {
              themGioHang(sanPham);
            }}
          >
            Thêm sản phẩm
          </button>
        </div>
      </div>
    );
  }
}
