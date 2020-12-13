import React, { Component } from "react";
import styleBooking from "./DatVeXemPhim.module.css";

export default class ThongTinDatGhe extends Component {
  render() {
    return (
      <div>
        <button className={styleBooking.gheDuocChon}></button>
        <span className="text-light ml-3" style={{ fontSize: "25px" }}>
          ghế được chọn
        </span>
        <br />

        <button className={styleBooking.gheDangChon}></button>
        <span className="text-light ml-3" style={{ fontSize: "25px" }}>
          ghế đang đặt
        </span>
        <br />

        <button
          className={styleBooking.ghe}
          style={{ marginLeft: "0" }}
        ></button>
        <span className="text-light ml-3" style={{ fontSize: "25px" }}>
          ghế chưa đặt
        </span>
        <br />

        <div className="mt-5">
          <table class="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "30px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
              <tr>
                <th>Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
