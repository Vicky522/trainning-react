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
  switch (action.type) {
    case "DAT_CUOC": {
      state.datCuoc = action.datCuoc;
      return { ...state };
    }
    case "RANDOM_XUC_XAC": {
      // console.log("action", action);
      // tao 1 mang xuc xac ngau nhien
      const mangXXNN = [];

      for (let i = 0; i < 3; i++) {
        // random so tu 1->6
        const soNN = Math.floor(Math.random() * 6) + 1;
        const xxNN = { hinhAnh: `./img/img-game/${soNN}.png`, diem: soNN };
        mangXXNN.push(xxNN);
      }
      // gan lai state cua mangXucXac = mangXXNN
      state.mangXucXac = mangXXNN;

      // cap nhat state.soBanThang
      const tongDiem = state.mangXucXac.reduce((td, xucXac, index) => {
        return (td += xucXac.diem);
      }, 0);

      if (
        (state.datCuoc && tongDiem > 10) ||
        (!state.datCuoc && tongDiem <= 10)
      ) {
        state.soBanThang += 1;
      }

      //cap nhat so ban choi
      state.soBanChoi += 1;

      return { ...state };
    }
  }
  return { ...state };
};
