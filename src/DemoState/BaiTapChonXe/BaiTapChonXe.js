import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  state = {
    imgSrc: "./img/car/products/red-car.jpg",
  };

  changeColor = (newColor) => {
    this.setState({
      imgSrc: `./img/car/products/${newColor}-car.jpg`,
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            {/* hinh anh cua xe */}
            <img src={this.state.imgSrc} className="w-100" />
          </div>

          <div className="col-6">
            {/* button chon mau xe */}
            <div className="card ">
              <div className="card-header text-white bg-dark ">
                Exterior color
              </div>
              <div className="card-body">
                <div className="row mt-3  p-2">
                  <div className="col-2">
                    <img
                      src="./img/car/icons/icon-black.jpg"
                      className="w-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("black");
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <h3>Black-color</h3>
                  </div>
                </div>

                <div className="row mt-3 p-2">
                  <div className="col-2">
                    <img
                      src="./img/car/icons/icon-red.jpg"
                      className="w-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("red");
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <h3>Red-color</h3>
                  </div>
                </div>

                <div className="row mt-3 p-2">
                  <div className="col-2">
                    <img
                      src="./img/car/icons/icon-silver.jpg"
                      className="w-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("silver");
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <h3>Silver-color</h3>
                  </div>
                </div>

                <div className="row mt-3 p-2">
                  <div className="col-2">
                    <img
                      src="./img/car/icons/icon-steel.jpg"
                      className="w-100"
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.changeColor("steel");
                      }}
                    />
                  </div>
                  <div className="col-10">
                    <h3>Steel-color</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
