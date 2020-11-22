import React, { Component } from "react";

export default class RenderWithMap extends Component {
  products = [
    { id: 1, name: "iphone", price: 1000 },
    { id: 2, name: "iphoneX", price: 2000 },
    { id: 3, name: "iphoneXS", price: 3000 },
  ];

  //   renderProduct = () => {
  //     let arrJSX = [];

  //     for (let index in this.products) {
  //       //   loi lan duyet lay ra 1 doi tuong san pham
  //       let product = this.products[index];
  //       // tu doi tuong san pham tao ra doi tuong jsx
  //       let jsxProduct = (
  //         <div className="col-4">
  //           <div className="card text-white bg-primary">
  //             <img
  //               className="card-img-top"
  //               src="http://picsum.photos/200/200"
  //               alt="123"
  //             />
  //             <div className="card-body">
  //               <h4 className="card-title">{product.name}</h4>
  //               <p className="card-text">{product.price}</p>
  //             </div>
  //           </div>
  //         </div>
  //       );

  //       arrJSX.push(jsxProduct); //dua phan tu jsx duoc tu du lieu san pham
  //     }
  //     return arrJSX;
  //   };

  renderProductWithMap = () => {
    const arrJSX = this.products.map((product, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card text-white bg-primary">
            <img
              className="card-img-top"
              src="http://picsum.photos/200/200"
              alt="123"
            />
            <div className="card-body">
              <h4 className="card-title">{product.name}</h4>
              <p className="card-text">{product.price}</p>
            </div>
          </div>
        </div>
      );
    });
    return arrJSX;
  };

  renderTable = () => {
    return this.products.map((product, index) => {
      return (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row">{this.renderProductWithMap()}</div>
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
            </tr>
          </thead>

          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
