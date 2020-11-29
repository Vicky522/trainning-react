import React, { Component } from "react";
import data from "../data/data.json";
import Modal from "./Modal";
import ProductWithEvent from "./ProductWithEvent";

export default class ProductListWithEvent extends Component {
  state = {
    productDetail: data[0],
    cart: [
      {
        maSP: 1,
        tenSP: "VinSmart Live",
        donGia: 5700000,
        hinhAnh: "./img/vsphone.jpg",
        soLuong: 1,
      },
    ],
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

  render() {
    const { productDetail, cart } = this.state;
    return (
      <>
        {/* Modal giỏ hàng */}
        <Modal cart={cart} />

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
