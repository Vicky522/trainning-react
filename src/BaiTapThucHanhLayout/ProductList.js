import React, { Component } from "react";
import Product from "./Product";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mb-4">
            <Product />
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <Product />
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <Product />
          </div>

          <div class="col-lg-3 col-md-6 mb-4">
            <Product />
          </div>
        </div>
      </div>
    );
  }
}
