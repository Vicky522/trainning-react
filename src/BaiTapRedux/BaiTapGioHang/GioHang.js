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
                  <td>
                    <button
                      onClick={() => {
                        this.props.tangGiamSoluong(spGH.maSP, 1);
                      }}
                    >
                      +
                    </button>
                    {spGH.soLuong}
                    <button
                      onClick={() => {
                        this.props.tangGiamSoluong(spGH.maSP, -1);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{spGH.donGia}</td>
                  <td>{spGH.donGia * spGH.soLuong}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        this.props.xoaGioHang(spGH.maSP);
                      }}
                    >
                      Xoa
                    </button>
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

// muốn gửi dữ liệu đi cứ viết hàm mapDispatchToProps
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSPClick) => {
      console.log(maSPClick);
      // dua du lieu len redux store (reducer)
      const action = {
        type: "XOA_GIO_HANG",
        maSPXoa: maSPClick,
      };
      // dung ham dispatch gui action la reducer
      dispatch(action);
    },

    tangGiamSoluong: (maSPClick, soLuong) => {
      // tao ra action
      const action = {
        type: "TANG_GIAM_SO_LUONG",
        maSPClick: maSPClick,
        soLuong: soLuong,
      };

      // dua du lieu len reducer
      dispatch(action);
    },
  };
};

// Kết nối component với reactStore tạo ra 1 component mới export ra ngoài
export default connect(mapStateToProps, mapDispatchToProps)(GioHang);
