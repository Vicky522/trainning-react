import React, { Component } from "react";
import SanPhamGioHangBT from "./SanPhamGioHangBT";

export default class DanhSachSanPhamGioHangBT extends Component {
  render() {
    const { mangSanPham, themGioHang } = this.props;
    return (
      <div className="container">
        <div className="row">
          {mangSanPham.map((spGH, index) => {
            return (
              <div className="col-4" key={index}>
                <SanPhamGioHangBT sanPham={spGH} themGioHang={themGioHang} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
