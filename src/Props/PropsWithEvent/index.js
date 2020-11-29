import React, { Component } from "react";
import Modal from "./Modal";
import ProductListWithEvent from "./ProductListWithEvent";

export class PropsWithEvent extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-right">
          <button data-toggle="modal" data-target="#modelId">
            Giỏ hàng (0)
          </button>
        </div>
        <h3>Danh sách sản phẩm</h3>
        <ProductListWithEvent />
      </div>
    );
  }
}
export default PropsWithEvent;
