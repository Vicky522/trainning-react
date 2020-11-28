import React, { Component } from "react";
import ProductRFC from "./ProductRFC";

export default class DemoProps extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="row">
          <div className="col-3">
            <ProductRFC name="iphone" price="1,0000$" />
          </div>

          <div className="col-3">
            <ProductRFC name="samsung" price="1,2000$" />
          </div>

          <div className="col-3">
            <ProductRFC name="sony" price="1,4000$" />
          </div>

          <div className="col-3">
            <ProductRFC name="xiaomi" price="1,6000$" />
          </div>
        </div>
      </div>
    );
  }
}
