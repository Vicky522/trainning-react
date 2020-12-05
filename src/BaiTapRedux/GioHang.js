import React, { Component } from "react";
import { connect } from "react-redux";

class GioHang extends Component {
  render() {
    console.log(this.props.gioHang);
    return (
      <div>
        <h1 className="text-center display-4">Gio hang</h1>
        <table className="table">
          <thead>
            <tr>
              <th>Ma sp</th>
              <th>Ten sp</th>
              <th>Hinh anh</th>
              <th>So luong</th>
              <th>Don gia</th>
              <th>Thanh tien</th>
            </tr>
          </thead>

          <tbody>
            {this.props.gioHang.map((spGH, index) => {
              return (
                <tr>
                  <td>{spGH.maSP}</td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <img width="50" height="50" src={spGH.hinhAnh} />
                  </td>
                  <td>{spGH.soLuong}</td>
                  <td>{spGH.donGia}</td>
                  <td>{spGH.donGia * spGH.soLuong}</td>
                  <td>
                    <button className="btn btn-danger">Xoa</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

// đinh nghĩa hàm lấy từ redux về biến thành props của react component
const mapStateToProps = (state) => {
  // state dai dien cho rootReducer
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

// Kết nối component với reactStore tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps)(GioHang);
