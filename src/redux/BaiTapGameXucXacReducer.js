const stateDefault = {
  datCuoc: false, //true: tai, false: xiu
  soBanThang: 0,
  soBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/img-game/6.png", diem: 6 },
    { hinhAnh: "./img/img-game/6.png", diem: 6 },
    { hinhAnh: "./img/img-game/6.png", diem: 6 },
  ],
};

export const BaiTapGameXucXacReducer = (state = stateDefault, action) => {
  return { ...state };
};
