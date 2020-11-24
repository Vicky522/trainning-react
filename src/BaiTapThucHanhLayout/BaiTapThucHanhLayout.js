import React, { Component } from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}
