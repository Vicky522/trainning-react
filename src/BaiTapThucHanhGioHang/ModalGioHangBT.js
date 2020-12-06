import React, { Component } from "react";

export default class ModalGioHangBT extends Component {
  render() {
    const { gioHang, xoaGioHang, tangGiamSoLuong } = this.props;
    return (
      <div>
        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div className="modal-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <td>Mã sản phẩm</td>
                          <td>Hình ảnh</td>
                          <td>Tên sản phẩm</td>
                          <td>Số lượng</td>
                          <td>Đơn giá</td>
                          <td>Thành tiền</td>
                        </tr>
                      </thead>
                      <tbody>
                        {gioHang.map((product, index) => {
                          return (
                            <tr key={index}>
                              <td>{product.maSP}</td>
                              <td>
                                <img
                                  src={product.hinhAnh}
                                  width="30"
                                  height="50"
                                />
                              </td>
                              <td>{product.tenSP}</td>
                              <td>
                                <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    // xu ly tang
                                    {
                                      tangGiamSoLuong(product.maSP, true);
                                    }
                                  }}
                                >
                                  +
                                </button>
                                {product.soLuong}
                                <button
                                  className="btn btn-primary"
                                  onClick={() => {
                                    {
                                      tangGiamSoLuong(product.maSP, false);
                                    }
                                  }}
                                >
                                  -
                                </button>
                              </td>

                              <td>{product.donGia.toLocaleString()}</td>
                              <td>
                                {(
                                  product.soLuong * product.donGia
                                ).toLocaleString()}
                              </td>
                              <td>
                                <button
                                  className="btn btn-danger"
                                  onClick={() => {
                                    xoaGioHang(product.maSP);
                                  }}
                                >
                                  Xoá
                                </button>
                              </td>
                            </tr>
                          );
                        })}
                        <tfoot className="text-right">
                          <tr>
                            <td colSpan="5"></td>
                            <td>Tổng tiền</td>
                            <td>
                              {gioHang
                                .reduce((tongTien, spGH, index) => {
                                  return (tongTien +=
                                    spGH.soLuong * spGH.donGia);
                                }, 0)
                                .toLocaleString()}
                            </td>
                          </tr>
                        </tfoot>
                      </tbody>
                    </table>
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
