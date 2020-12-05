import React, { Component } from "react";
import data from "../data/data.json";
import Modal from "./Modal";
import ProductWithEvent from "./ProductWithEvent";

export default class ProductListWithEvent extends Component {
  state = {
    productDetail: data[0],
    cart: [],
  };

  renderProductListHandler = () => {
    return data.map((product, index) => {
      return (
        <ProductWithEvent
          onViewDetail={this.viewDetailHandler}
          prod={product}
          key={index}
          addToCart={this.addToCard}
        />
      );
    });
  };

  viewDetailHandler = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  addToCard = (product) => {
    const productUpdate = { ...product, soLuong: 1 };

    // tìm vị trí của sản phẩm
    const index = this.state.cart.findIndex(
      (product) => product.maSP === productUpdate.maSP
    );

    //nếu tìm thấy
    if (index !== -1) {
      //update số lượng sau đó setState
      const newCart = [...this.state.cart];
      newCart[index].soLuong += 1;

      this.setState({
        cart: newCart,
      });
    } else {
      this.setState({
        cart: [...this.state.cart, productUpdate],
      });
    }
  };

  //Định nghĩa sự kiện xoá giỏ hàng tại nơi chứa state giỏ hàng
  deleteItem = (maSPClick) => {
    // console.log(maSP);
    //Tạo ra 1 giỏ hàng mới giống giá trị giỏ hàng cũ
    let gioHangCapNhat = [...this.state.cart];
    //Xử lý xoá trên giỏ hàng mới
    let index = gioHangCapNhat.findIndex((spGH) => spGH.maSP === maSPClick);
    if (index !== -1) {
      gioHangCapNhat.splice(index, 1);
    }

    //Gán lại giỏ hàng cũ bằng giỏ hàng mới
    this.setState({
      cart: gioHangCapNhat,
    });
  };

  tangGiamSoLuong = (maSPClick, soLuong) => {
    // console.log(maSP, soLuong);

    let gioHangCapNhat = [...this.state.cart];

    // tim trong gio hang san pham ma == voi san pham duoc click + hoac -
    let spGioHang = gioHangCapNhat.find((spGH) => spGH.maSP === maSPClick);

    // tim thay san pham trong gio hang
    if (spGioHang) {
      spGioHang.soLuong += soLuong;
    }
    // gan lai gio hang cu bang gio hang moi
    this.setState({
      cart: gioHangCapNhat,
    });
  };

  render() {
    const { productDetail, cart } = this.state;
    return (
      <>
        {/* Modal giỏ hàng */}
        <Modal
          cart={cart}
          deleteItem={this.deleteItem}
          tangGiamSoLuong={this.tangGiamSoLuong}
        />

        <div className="row">{this.renderProductListHandler()}</div>

        {/* Thông tin chi tiết sản phẩm */}
        <div className="row">
          <div className="col-6">
            <h5>{productDetail.tenSP}</h5>
            <img src={productDetail.hinhAnh} width="300" />
          </div>

          <div className="col-6">
            <h3>Thông số kỹ thuật</h3>
            <table className="table">
              <tr>
                <th>Màn hình</th>
                <td>{productDetail.manHinh}</td>
              </tr>

              <tr>
                <th>Hệ điều hành</th>
                <td>{productDetail.heDieuHanh}</td>
              </tr>

              <tr>
                <th>Camera trước</th>
                <td>{productDetail.cameraTruoc}</td>
              </tr>

              <tr>
                <th>Cammera sau</th>
                <td>{productDetail.cameraSau}</td>
              </tr>

              <tr>
                <th>RAM</th>
                <td>{productDetail.ram}</td>
              </tr>

              <tr>
                <th>ROM</th>
                <td>{productDetail.rom}</td>
              </tr>
            </table>
          </div>
        </div>
      </>
    );
  }
}
