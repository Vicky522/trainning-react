const stateGioHang = {
  gioHang: [
    // {
    //   maSP: 1,
    //   tenSP: "Iphone X",
    //   donGia: 1000,
    //   hinhAnh: "./img/applephone.jpg",
    //   soLuong: 5,
    // },
  ],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  console.log("action", action);
  switch (action.type) {
    case "THEM_GIO_HANG": {
      // Xu ly cap nhat state gio hang
      let gioHangCapNhat = [...state.gioHang];

      // tim trong gio hang co ma  = ma sp Cick hay ko?
      let spGioHang = gioHangCapNhat.find(
        (sp) => sp.maSP === action.sanPhamClick.maSP
      );
      if (spGioHang) {
        // tim thay => tang so luong
        spGioHang.soLuong += 1;
      } else {
        gioHangCapNhat.push(action.sanPhamClick);
      }
      //cap nhat lai state
      state.gioHang = gioHangCapNhat;
      console.log(state);
      // tính bất biến của redux: giá trị state mới trả về khác state cũ
      return { ...state };
    }

    case "XOA_GIO_HANG": {
      let gioHangCapNhat = [...state.gioHang];

      // Tim trong gio hang co san pham ko
      let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSPXoa);

      // if (index !== -1) {
      //   gioHangCapNhat.slice(index, 1);
      // }

      gioHangCapNhat = gioHangCapNhat.filter(
        (sp) => sp.maSP !== action.maSPXoa
      );
      // cap nhat lai state gio hang
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    case "TANG_GIAM_SO_LUONG": {
      let gioHangCapNhat = [...state.gioHang];

      // tim san pham duoc click trong gio hang
      let spGH = gioHangCapNhat.find((sp) => sp.maSP === action.maSPClick);

      if (spGH) {
        if (action.soLuong === -1 && spGH.soLuong <= 1) {
          return { ...state };
        }
        spGH.soLuong += action.soLuong;
      }

      // cap nhat lai gio

      state.gioHang = gioHangCapNhat;

      return { ...state };
    }
  }
  return state;
};
