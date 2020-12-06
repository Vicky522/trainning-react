import React, { Component } from "react";
import DanhSachSanPhamGioHangBT from "./DanhSachSanPhamGioHangBT";
import ModalGioHangBT from "./ModalGioHangBT";
import data from "../Props/data/data.json";

export default class BaiTapThucHanhGioHang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gioHang: [],
    };
  }

  //   thêm giỏ hàng
  themGioHang = (sanPhamChon) => {
    // this.setState({
    //   gioHang: [...this.state.gioHang, sanPhamChon],
    // });
    //b1: tu sp duoc chon tao ra gio hang
    let spGH = {
      maSP: sanPhamChon.maSP,
      tenSP: sanPhamChon.tenSP,
      soLuong: 1,
      donGia: sanPhamChon.donGia,
      hinhAnh: sanPhamChon.hinhAnh,
    };
    //b2: kiem tra san pham chon co trong gio hang chua
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === spGH.maSP);
    if (index !== -1) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      gioHangCapNhat.push(spGH);
    }
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  //   Xoa gio hang
  xoaGioHang = (maSPXoa) => {
    // tim trong gio hang co masp = maSPXoa ko
    // let gioHangCapNhat = [...this.state.gioHang];
    // const index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSPXoa);
    // if (index !== -1) {
    //   gioHangCapNhat.splice(index, 1);
    // }

    // c2:
    let gioHangCapNhat = [...this.state.gioHang].filter(
      (sp) => sp.maSP !== maSPXoa
    );

    // //cap nhat lai gio hang
    this.setState({
      gioHang: gioHangCapNhat,
    });
    console.log(maSPXoa);
  };

  //   Tang giam so luong san pham trong gio hang
  tangGiamSoLuong = (maSP, tangGiam) => {
    let gioHangCapNhat = [...this.state.gioHang];
    let index = gioHangCapNhat.findIndex((sp) => sp.maSP === maSP);
    // true :tang, false:giam
    if (tangGiam) {
      gioHangCapNhat[index].soLuong += 1;
    } else {
      if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      }
    }

    // cap nhat lai gio hang
    this.setState({
      gioHang: gioHangCapNhat,
    });
  };

  render() {
    let tongSoLuong = this.state.gioHang.reduce((tsl, spGH, index) => {
      return (tsl += spGH.soLuong);
    }, 0);

    return (
      <div className="container">
        <h3 className="text-center text-success">Bài tập thực hành giỏ hàng</h3>
        {/* Button trigger modal */}
        <button
          type="button"
          className="btn btn-primary text-right m-4"
          data-toggle="modal"
          data-target="#modelId"
        >
          Giỏ hàng ({tongSoLuong})
        </button>
        <ModalGioHangBT
          gioHang={this.state.gioHang}
          xoaGioHang={this.xoaGioHang}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />
        <DanhSachSanPhamGioHangBT
          mangSanPham={data}
          themGioHang={this.themGioHang}
        />
      </div>
    );
  }
}
