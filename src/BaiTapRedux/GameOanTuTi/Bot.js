import React, { Component } from "react";
import style from "./GameOanTuTi.module.css";
import { connect } from "react-redux";

class Bot extends Component {
  render() {
    return (
      <div>
        <div className="thinker">
          <img src={this.props.bot.hinhAnh} className={`${style.keoBuaBao} `} />
        </div>
        <div className={`${style["speech-bubble"]}`}></div>
        <img
          src="./img/gameOanTuTi/playerComputer.png"
          width="200px"
          height="200px"
          className="mt-2"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bot: state.stateGameOanTuTi.bot,
  };
};

export default connect(mapStateToProps)(Bot);
