import React, { Component } from "react";
import Header from "./Header";
import ProductList from "./ProductList";

import Promotion from "./Promotion";
import Slider from "./Slider";

export default class BaiTapLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Slider />
        <ProductList />
        <Promotion />
      </div>
    );
  }
}
