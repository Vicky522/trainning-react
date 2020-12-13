import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVienRedux extends Component {
  //   state = {
  //     values: { maSinhVien: "", tenSinhVien: "", email: "", soDienThoai: "" },
  //     error: {
  //       maSinhVien: "",
  //       tenSinhVien: "",
  //       email: "",
  //       soDienThoai: "",
  //     },
  //   };

  handleChangeInput = (event) => {
    let { value, name } = event.target;
    let typeInput = event.target.getAttribute("typeInput"); //attribute la thuoc tinh nguoi dung tu them tren the
    console.log("tyoeIput", typeInput);
    // xu ly cap nhat values
    const newValues = { ...this.props.sinhVienRedux.values }; // luu tru lai cac gia tri truoc user da nhap
    newValues[name] = value; // gan gia tri moi cho thuoc tinh dang nhap

    //xu ly error
    const newError = { ...this.props.sinhVienRedux.error };
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

    this.props.dispatch({
      type: "SET_SV_REDUX",
      sinhVienRedux: {
        values: newValues,
        error: newError,
      },
    });

    // setState lai
    // this.setState(
    //   {
    //     values: newValues,
    //     error: newError,
    //   },
    //   () => {
    //     console.log("newValue", this.props.sinhVienRedux);
    //   }
    // );
  };

  handleSubmit = (event) => {
    event.preventDefault(); // chan su kien submit cua browser khi nguoi dung submit bang reactform

    //kiem tra du lieu nguoi dung hop le moi cho submit
    let valid = true;

    //kiem tra tat ca cac thuoc tinh trong this.props.sinhVienRedux.values
    for (let key in this.props.sinhVienRedux.values) {
      if (this.props.sinhVienRedux.values[key].trim() === "") {
        valid = false;
      }
    }

    // kiem tra tat cac thuoc tinh cua error phai khac rong
    for (let key in this.props.sinhVienRedux.error) {
      if (this.props.sinhVienRedux.error[key] !== "") {
        valid = false;
      }
    }

    if (!valid) {
      alert("Du lieu khong hop le");
      return;
    }

    // xu li submit => api or redux (dispatch)
    this.props.dispatch({
      type: "THEM_SINH_VIEN",
      sinhVien: this.props.sinhVienRedux.values,
    });
  };

  //   componentWillReceiveProps(newProps) {
  //     // lay props tu redux gan vao state component
  //     this.setState({
  //       values: newProps.sinhVienSua,
  //     });

  //     // sau do biding gia tri nay len giao dien tu state
  //   }
  render() {
    let {
      maSinhVien,
      tenSinhVien,
      email,
      soDienThoai,
    } = this.props.sinhVienRedux.values;

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
                  value={maSinhVien}
                ></input>
                <p className="text text-danger">
                  {this.props.sinhVienRedux.error.maSinhVien}
                </p>
              </div>
              <div className="form-group">
                <h3>Ten sinh vien</h3>
                <input
                  className="form-control"
                  name="tenSinhVien"
                  onChange={this.handleChangeInput}
                  value={tenSinhVien}
                ></input>
                <p className="text text-danger">
                  {this.props.sinhVienRedux.error.tenSinhVien}
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
                  value={email}
                ></input>
                <p className="text text-danger">
                  {this.props.sinhVienRedux.error.email}
                </p>
              </div>

              <div className="form-group">
                <h3>So dien thoai</h3>
                <input
                  typeInput="phone"
                  className="form-control"
                  name="soDienThoai"
                  onChange={this.handleChangeInput}
                  value={soDienThoai}
                ></input>
                <p className="text text-danger">
                  {this.props.sinhVienRedux.error.soDienThoai}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <button class="btn btn-success" type="submit">
            Them sinh vien
          </button>

          <button
            class="btn btn-primary"
            type="button"
            onClick={() => {
              this.props.dispatch({
                type: "CAP_NHAT_SINH_VIEN",
              });
            }}
          >
            Cap nhat sinh vien
          </button>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sinhVienRedux: state.QuanLySinhVienReducer.sinhVienRedux,
  };
};

export default connect(mapStateToProps)(FormSinhVienRedux);
