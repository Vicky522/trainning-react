import React, { Component } from "react";

export default class BaiTapChonKinh extends Component {
  state = {
    srcImg: "./glassesImage/g1.jpg",
  };

  changeClasses = (newClasses) => {
    this.setState = { srcImge: `./glassesImage/${newClasses}.jpg` };
  };

  // listClasses
  arrProduct = [
    {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./glassesImage/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 3,
      price: 30,
      name: "DIOR D6700HQ",
      url: "./glassesImage/v3.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 4,
      price: 30,
      name: "DIOR D6005U",
      url: "./glassesImage/v4.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 5,
      price: 30,
      name: "PRADA P8750",
      url: "./glassesImage/v5.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 6,
      price: 30,
      name: "PRADA P9700",
      url: "./glassesImage/v6.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 7,
      price: 30,
      name: "FENDI F8750",
      url: "./glassesImage/v7.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 8,
      price: 30,
      name: "FENDI F8500",
      url: "./glassesImage/v8.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },

    {
      id: 9,
      price: 30,
      name: "FENDI F4300",
      url: "./glassesImage/v9.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  ];

  renderClassesWithMap = () => {
    const arrJSX = this.arrProduct.map((product, index) => {
      return (
        <div className="col-2 " key={index}>
          <img
            src={product.url}
            className="w-50 m-2 p-1 border border-dark"
            onClick={() => {
              this.changeClasses(product.url);
            }}
          />
        </div>
      );
    });

    return arrJSX;
  };

  render() {
    return (
      <div>
        <h1 className="text-white text-center bg-dark p-4">
          TRY CLASSES APP ONLINE
        </h1>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="changeClasses">
                <img src="./glassesImage/model.jpg" className="w-50"></img>
                <img src={this.state.srcImg} />
                <div
                  className="title "
                  style={{ backgroundColor: "orange", opacity: 0.8 }}
                >
                  <h3 className="text-primary">FENDI F8750</h3>
                  <p className="text-white">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore, est.
                  </p>
                </div>
              </div>
            </div>

            <div className="col-6">
              <img src="./glassesImage/model.jpg" className="w-50"></img>
            </div>
          </div>

          <div className="container">
            <div className="bg-light row">{this.renderClassesWithMap()}</div>
          </div>
        </div>
      </div>
    );
  }
}
