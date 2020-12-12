import React, { Component } from "react";
import style from "./GameOanTuTi.module.css";

import KetQuaTroChoi from "./KetQuaTroChoi";
import Player from "./Player";
import Bot from "./Bot";

export default class GameOanTuTi extends Component {
  render() {
    return (
      <div className={style.bgGame}>
        <div className="container">
          <div className="row">
            {/* iron man */}
            <div className="col-4 text-center">
              <Player />
            </div>

            {/* ket qua */}
            <div className="col-4 text-center">
              <KetQuaTroChoi />
              <button className="btn btn-success">Play Game</button>
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
