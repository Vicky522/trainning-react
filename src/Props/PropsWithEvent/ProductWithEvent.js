import React, { Component } from "react";

export default class ProductWithEvent extends Component {
  render() {
    const { prod, onViewDetail, addToCart } = this.props;
    return (
      <>
        <div className="col-4">
          <div className="card text-dark ">
            <img className="card-img-top" src={prod.hinhAnh} alt height="300" />
            <div className="card-body text-center">
              <h4 className="card-title">{prod.tenSP}</h4>
              <button
                className="btn btn-success"
                onClick={() => {
                  onViewDetail(prod);
                  console.log(prod);
                }}
              >
                Xem chi tiết
              </button>

              <button
                className="btn btn-danger ml-2"
                onClick={() => {
                  addToCart(prod);
                }}
              >
                Thêm giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
