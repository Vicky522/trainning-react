import React, { Component } from "react";
import { connect } from "react-redux";

class KetQuaTroChoi extends Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="display-4">
          Ban chon:{" "}
          <span className="display-4 text-success">
            {this.props.datCuoc ? "Tài" : "Xỉu"}
          </span>
        </h1>
        <h1 className="display-4">
          So ban thang:{" "}
          <span className="display-4 text-warning">
            {this.props.soBanThang}
          </span>
        </h1>
        <h1 className="display-4">
          So ban choi:{" "}
          <span className="display-4 text-primary">{this.props.soBanChoi}</span>
        </h1>
      </div>
    );
  }
}

// lay state tu redux ve bien thanh props component
const mapStateToProps = (state) => {
  return {
    datCuoc: state.stateGameXucXac.datCuoc,
    soBanThang: state.stateGameXucXac.soBanThang,
    soBanChoi: state.stateGameXucXac.soBanChoi,
  };
};

export default connect(mapStateToProps)(KetQuaTroChoi);
