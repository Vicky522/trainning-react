import React, { Component } from "react";

export default class DemoState extends Component {
  // state la thuoc tinh co san trong component => dung de quan ly nguon du lieu thay doi tren giao dien khi nguoi dung thao tac (click, change, blur...)
  state = {
    isLogin: false,
  };

  //   isLogin = false;
  userName = "Van";

  renderContent = () => {
    if (this.state.isLogin) {
      return <p>Hello ! {this.userName}</p>;
    }
    return (
      <button
        className="btn btn-success"
        onClick={() => {
          this.handleLogin();
        }}
      >
        Dang nhap
      </button>
    );
  };

  handleLogin = () => {
    //   khong duoc thay doi state truc tiep ma phai thong qua phuong thuc this.setState
    // setState: la phuong thuc co san cua lop doi tuong component => dung de thay doi gia tri trong this.state dong thoi goi la ham render

    // this.state.isLogin = true;
    // console.log("isLogin", this.isLogin);

    this.setState({ isLogin: true });
  };

  render() {
    return (
      <div className="container">
        <h3>if else react</h3>
        {/* {this.isLogin ? (
          <p>hello {this.userName}</p>
        ) : (
          <button>Dang nhap</button>
        )} */}

        {this.renderContent()}
      </div>
    );
  }
}
