import React, { Component } from "react";
import axios from "axios";

export default class RequestAPI extends Component {
  state = {
    mangPhim: [],
  };

  renderPhim = async () => {
    // axios({
    //   method: "GET",
    //   url:
    //     "https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01",
    // })
    //   .then((res) => {
    //     this.setState({
    //       mangPhim: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    let result = await axios({
      method: "GET",
      url:
        "https://movie0706.cybersoft.edu.vn/api/quanlyphim/laydanhsachphim?manhom=GP01",
    });

    this.setState({
      mangPhim: result.data,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.state.mangPhim.map((phim, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img className="card-img-top" src={phim.hinhAnh} alt />
                  <div className="card-body">
                    <h4 className="card-title">{phim.tenPhim}</h4>
                    <p className="card-text">{phim.moTa}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.renderPhim();
  }
}
