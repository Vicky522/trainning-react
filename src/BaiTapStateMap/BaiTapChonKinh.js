import React, { Component } from "react";
import style from "./BaiTapChonKinh.module.css";
// listClasses
let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc:
      ".Light pink square lenses define these sunglasses, ending with amother of pearl effect tip ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];

export default class BaiTapChonKinh extends Component {
  state = {
    imgSrc: "./img/glassesImage/v1.png",
    name: "GUCCI G8850U",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip",
  };

  changeClasses = (idImg) => {
    this.setState({
      imgSrc: `./img/glassesImage/v${idImg}.png`,
      name: "",
      desc: "",
    });
  };

  renderClasses = () => {
    const arrJSX = arrProduct.map((classes, index) => {
      return (
        <div className="col-2 m-2" key={index}>
          <img
            src={classes.url}
            className=" w-50"
            onClick={() => {
              this.changeClasses(classes.id);
              this.setState({
                name: classes.name,
                desc: classes.desc,
              });
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
              <img src="./img/glassesImage/model.jpg" className="w-50" />
              <img src={this.state.imgSrc} />
              <div className="info">
                <h3>{this.state.name}</h3>

                <p>{this.state.desc}</p>
              </div>
            </div>

            <div className="col-6">
              <img src="./img/glassesImage/model.jpg" className="w-50" />
            </div>
          </div>

          <div className="container">
            <div className="row bg-white">{this.renderClasses()}</div>
          </div>
        </div>
      </div>
    );
  }
}
