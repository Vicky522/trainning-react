import React, { Component } from "react";
import style from "./GameOanTuTi.module.css";
import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import Bot from "./Bot";
import { connect } from "react-redux";

class GameOanTuTi extends Component {
  render() {
    return (
      <div className={style.bgGame}>
        <div className="container">
          <div className="row mt-2">
            {/* iron man */}
            <div className="col-4 text-center">
              <Player />
            </div>

            {/* ket qua */}
            <div className="col-4 text-center">
              <KetQuaTroChoi />
              <button
                className="btn btn-success"
                onClick={() => {
                  this.props.playGame();
                }}
              >
                Play Game
              </button>
            </div>

            {/* bot */}
            <div className="col-4 text-center">
              <Bot />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;

      let randomBotItem = setInterval(() => {
        dispatch({
          type: "RANDOM",
        });

        count++;
        if (count > 10) {
          clearInterval(randomBotItem);
          dispatch({
            type: "END_GAME",
          });
        }
      }, 100);
    },
  };
};

export default connect(null, mapDispatchToProps)(GameOanTuTi);
