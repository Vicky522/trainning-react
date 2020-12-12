import React, { Component } from "react";
import style from "./GameOanTuTi.module.css";
import { connect } from "react-redux";

class Player extends Component {
  renderMangKeoBuaBao = () => {
    return this.props.mangKeoBuaBao.map((item, index) => {
      let border = null;
      if (item.datCuoc) {
        border = { border: "3px solid orange" };
      }

      return (
        <button
          style={border}
          onClick={() => {
            this.props.datCuoc();
          }}
        >
          <img key={index} src={item.hinhAnh} alt={item.hinhAnh} />
        </button>
      );
    });
  };

  render() {
    return (
      <div>
        {/* player */}
        <div className="thinker">
          <img
            className={style.keoBuaBao}
            src={
              this.props.mangKeoBuaBao.find((item) => item.datCuoc === true)
                .hinhAnh
            }
          />
        </div>
        <div className={`${style["speech-bubble"]}`}></div>
        <img src="./img/gameOanTuTi/player.png" width="200px" height="200px" />

        <div className={`${style.chonKeoBuaBao} text-center `}>
          {this.renderMangKeoBuaBao()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangKeoBuaBao: state.stateGameOanTuTi.mangKeoBuaBao,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      dispatch({
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
