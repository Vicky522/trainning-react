import React, { Component } from "react";
import style from "./GameOanTuTi.module.css";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="mt-5">
        <h1 className={`${style["title"]} text-center mt-5`}>
          {this.props.ketQua}
        </h1>
        <p className={style.ketQuaTroChoi}>
          Số bàn thắng: <span>{this.props.soBanThang}</span>
        </p>

        <p className={style.ketQuaTroChoi}>
          Số bàn chơi: <span>{this.props.soBanChoi}</span>
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    soBanThang: state.stateGameOanTuTi.soBanThang,
    soBanChoi: state.stateGameOanTuTi.soBanChoi,
    ketQua: state.stateGameOanTuTi.ketQua,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
