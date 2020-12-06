import React, { Component } from "react";
import { connect } from "react-redux";

class XucXac extends Component {
  renderXucXac = () => {
    return this.props.mangXucXac.map((xucXac, index) => {
      return <img key="index" src={xucXac.hinhAnh} width="50" height="50" />;
    });
  };

  render() {
    console.log(this.props);
    return (
      <div className="container">
        <div className="row text-center">
          <div className="col-4">
            <button className="btn btn-danger display-4 p-5">
              <span className="display-4">Tài</span>
            </button>
          </div>
          <div className="col-4">{this.renderXucXac()}</div>
          <div className="col-4">
            <button className="btn btn-danger display-4 p-5">
              <span className="display-4">Xỉu</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Tạo hàm mapStateToProps lấy gía trị từ store về
const mapStateToProps = (state) => {
  return {
    mangXucXac: state.stateGameXucXac.mangXucXac,
  };
};

export default connect(mapStateToProps)(XucXac);
