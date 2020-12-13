const stateDefault = {
  mangSinhVien: [
    {
      maSinhVien: "1",
      tenSinhVien: "Nguyen Van A",
      email: "a@gmail.com",
      soDienThoai: "0909090909",
    },
    {
      maSinhVien: "2",
      tenSinhVien: "Nguyen Van B",
      email: "b@gmail.com",
      soDienThoai: "0808080800",
    },
  ],

  sinhVienSua: {
    maSinhVien: "1",
    tenSinhVien: "a",
    email: "",
    soDienThoai: "",
  },

  sinhVienRedux: {
    values: { maSinhVien: "", tenSinhVien: "", email: "", soDienThoai: "" },
    error: {
      maSinhVien: "",
      tenSinhVien: "",
      email: "",
      soDienThoai: "",
    },
  },
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN": {
      //   const mangSinhVienCapNhat = [...state.mangSinhVien, action.sinhVien];

      //mangSinhVienCapNhat.push(action.sinhVien)

      //state.mangSinhVien =

      const mangSinhVienUpdate = [
        ...state.mangSinhVien,
        state.sinhVienRedux.values,
      ];
      return { ...state, mangSinhVien: mangSinhVienUpdate };
    }

    case "CAP_NHAT_SINH_VIEN": {
      const mangSinhVienCapNhat = [...state.mangSinhVien];
      let svUpdate = mangSinhVienCapNhat.find((sv) => {
        return sv.maSinhVien === state.sinhVienRedux.values.maSinhVien;
      });

      console.log("svCapNhat", svUpdate);

      if (svUpdate) {
        svUpdate.maSinhVien = state.sinhVienRedux.values.maSinhVien;
        svUpdate.tenSinhVien = state.sinhVienRedux.values.tenSinhVien;
        svUpdate.email = state.sinhVienRedux.values.email;
        svUpdate.soDienThoai = state.sinhVienRedux.values.soDienThoai;
      }

      state.mangSinhVien = mangSinhVienCapNhat;

      return { ...state };
    }

    case "SINH_VIEN_SUA": {
      //cap nhat la state
      state.sinhVienSua = { ...action.sinhVienSua };

      //cap nhat lai state cua form redux
      let newSinhVienRedux = { ...state.sinhVienRedux };

      newSinhVienRedux.values = { ...action.sinhVienSua };

      return { ...state, sinhVienRedux: newSinhVienRedux };
    }

    case "SET_SV_REDUX": {
      state.sinhVienRedux = action.sinhVienRedux;
      return { ...state };
    }
  }
  return { ...state };
};
