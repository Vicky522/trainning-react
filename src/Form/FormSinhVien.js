import React, { Component } from "react";

export default class FormSinhVien extends Component {
  state = {
    values: { maSinhVien: "", tenSinhVien: "", email: "", soDienThoai: "" },
    error: {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      soDienThoai: "",
    },
  };

  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let typeInput = event.target.getAttribute("typeInput"); //attribute la thuoc tinh nguoi dung tu them tren the
    console.log("tyoeIput", typeInput);
    // xu ly cap nhat values
    const newValues = { ...this.state.values }; // luu tru lai cac gia tri truoc user da nhap
    newValues[name] = value; // gan gia tri moi cho thuoc tinh dang nhap

    //xu ly error
    const newError = { ...this.state.error };
    newError[name] = value.trim() === "" ? name + "Khong duoc bo trong !" : "";
    if (typeInput === "email") {
      const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!regexEmail.test(value)) {
        newError[name] = name + "khong dung dinh dang !";
      }
    }

    if (typeInput === "phone") {
      const regexNumber = /^[0-9]+$/;
      if (!regexNumber.test(value)) {
        newError[name] = name + "khong dung dinh dang !";
      }
    }

    // setState lai
    this.setState(
      {
        values: newValues,
        error: newError,
      },
      () => {
        console.log("newValue", this.state);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault(); // chan su kien submit cua browser khi nguoi dung submit bang reactform

    //kiem tra du lieu nguoi dung hop le moi cho submit
    let valid = true;

    //kiem tra tat ca cac thuoc tinh trong this.state.values
    for (let key in this.state.values) {
      if (this.state.values[key].trim() === "") {
        valid = false;
      }
    }

    // kiem tra tat cac thuoc tinh cua error phai khac rong
    for (let key in this.state.error) {
      if (this.state.error[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Du lieu khong hop le");
      return;
    }
  };
  render() {
    return (
      <form className="card text-left" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-white">
          Thông tin sinh viên
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <h3>Ma SV</h3>
                <input
                  className="form-control"
                  name="maSinhVien"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text text-danger">
                  {this.state.error.maSinhVien}
                </p>
              </div>
              <div className="form-group">
                <h3>Ten sinh vien</h3>
                <input
                  className="form-control"
                  name="tenSinhVien"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text text-danger">
                  {this.state.error.tenSinhVien}
                </p>
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <h3>Email</h3>
                <input
                  typeInput="email"
                  className="form-control"
                  name="email"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text text-danger">{this.state.error.email}</p>
              </div>

              <div className="form-group">
                <h3>So dien thoai</h3>
                <input
                  typeInput="phone"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                ></input>
                <p className="text text-danger">
                  {this.state.error.soDienThoai}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <button class="btn btn-success" type="submit">
            Them sinh vien
          </button>
        </div>
      </form>
    );
  }
}
