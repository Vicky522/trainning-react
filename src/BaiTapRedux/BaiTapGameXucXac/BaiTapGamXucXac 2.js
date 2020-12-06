import React, { Component } from "react";
import KetQuaTroChoi from "./KetQuaTroChoi";
import XucXac from "./XucXac";

export default class BaiTapGamXucXac extends Component {
  render() {
    return (
      <div>
        <XucXac />
        <KetQuaTroChoi />
      </div>
    );
  }
}
