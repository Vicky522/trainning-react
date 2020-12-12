const stateDefault = {
  soBanThang: 0,
  soBanChoi: 0,
  mangKeoBuaBao: [
    { ma: "keo", hinhAnh: "./img/gameOanTuTi/keo.png", datCuoc: true },
    { ma: "bua", hinhAnh: "./img/gameOanTuTi/bua.png", datCuoc: false },
    { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png", datCuoc: false },
  ],
  ketQua: "I'm iron man, I love you 3000",
  bot: { ma: "bao", hinhAnh: "./img/gameOanTuTi/bao.png" },
};

export const GameOanTuTiReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHON_KEO_BUA_BAO": {
      let mangKeoBuaBaoUpdate = [...state.mangKeoBuaBao];

      // reset lai mangCuoc
      mangKeoBuaBaoUpdate = mangKeoBuaBaoUpdate.map((item, index) => {
        return { ...item, datCuoc: false };
      });
      console.log(action);
      console.log("mangCuoc:", mangKeoBuaBaoUpdate);
    }
    default:
      return { ...state };
  }
};
