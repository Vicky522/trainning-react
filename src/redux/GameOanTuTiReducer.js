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
        if (item.ma === action.maCuoc) {
          return { ...item, datCuoc: true };
        }
        return { ...item, datCuoc: false };
      });

      //console.log("actionMaCuoc: ", action);
      //console.log("mangCuoc:", mangKeoBuaBaoUpdate);

      state.mangKeoBuaBao = mangKeoBuaBaoUpdate;
      return { ...state };
    }

    case "RANDOM": {
      //console.log("actionRandom", action);

      let soNN = Math.floor(Math.random() * 3);
      let quanCuocNgauNhien = state.mangKeoBuaBao[soNN];

      state.bot = quanCuocNgauNhien;
      return { ...state };
    }

    case "END_GAME": {
      state.soBanChoi += 1;

      let player = state.mangKeoBuaBao.find((item) => item.datCuoc === true);
      let bot = state.bot;

      switch (player.ma) {
        case "keo":
          {
            if (bot.ma === "keo") {
              state.ketQua = "Hoà nhé :v";
            } else if (bot.ma === "bua") {
              state.ketQua = "huhu :T Thua rồi :(";
            } else {
              state.ketQua = "hehe. Thắng rồi :v";
              state.soBanThang += 1;
            }
          }
          break;
        case "bua":
          {
            if (bot.ma === "bua") {
              state.ketQua = "Hoà nhé :v";
            } else if (bot.ma === "bao") {
              state.ketQua = "huhu :T Thua rồi :(";
            } else {
              state.ketQua = "hehe. Thắng rồi :v";
              state.soBanThang += 1;
            }
          }
          break;
        case "bao": {
          if (bot.ma === "bao") {
            state.ketQua = "Hoà nhé :v";
          } else if (bot.ma === "keo") {
            state.ketQua = "huhu :T Thua rồi :(";
          } else {
            state.ketQua = "hehe. Thắng rồi :v";
            state.soBanThang += 1;
          }
        }

        default:
          state.ketQua = "hehe. Thắng rồi :v";
          break;
          return { ...state };
      }
      return { ...state };
    }

    default:
      return { ...state };
  }
};
