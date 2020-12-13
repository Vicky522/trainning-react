import React, { Component } from "react";
import styleBooking from "./DatVeXemPhim.module.css";
import danhSachGhe from "../../data/danhSachGhe.json";
import ThongTinDatGhe from "./ThongTinDatGhe";

export default class DatVeXemPhim extends Component {
  render() {
    return (
      <div className={styleBooking.bookingMovie}>
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-8 text-center">
                <h1 className="text-warning display-4 text-center mt-3">
                  BÀI TẬP ĐẶT VÉ XIM PHIM
                </h1>

                <div>
                  <p className="text-light text-center">Màn hình</p>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <div className={styleBooking.screen}></div>
                  </div>
                </div>
              </div>

              <div className="col-4">
                <p
                  className="text-light  text-center mt-5"
                  style={{ fontSize: "35px" }}
                >
                  Danh sách ghế bạn chọn
                </p>

                <ThongTinDatGhe />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
