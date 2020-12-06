import React, { Component } from "react";
import { connect } from "react-redux";
class SanPham extends Component {
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
          <button
            className="btn btn-success"
            onClick={() => {
              this.props.themGioHang(sanPham);
            }}
          >
            Them gio hang
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // dispatch la tham so tu redux tra ra (no la 1 ham dung de gui gia tri len store)
  return {
    themGioHang: (spClick) => {
      // gui du lieu len redux

      // buoc1 : tao action
      const action = {
        // type thuoc tinh bat buoc
        type: "THEM_GIO_HANG",
        sanPhamClick: { ...spClick, soLuong: 1 }, // thuoc tinh thu 2 la gia tri gui len redux
      };
      // buoc2: su dung phuong thuc dispatch de dua action len redux(reducer)
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(SanPham);
