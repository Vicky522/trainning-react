// file quan ly tat ca cac state cu ung dung (thay vi dat tai component ta dat tai store)
import { combineReducers, createStore } from "redux";

// import stateGioHang
import { GioHangReducer } from "../redux/GioHangReducer";
import { BaiTapGameXucXacReducer } from "../redux/BaiTapGameXucXacReducer";

const rootReducer = combineReducers({
  // cac state sau nay khai bao tai day
  stateGioHang: GioHangReducer,
  stateGameXucXac: BaiTapGameXucXacReducer,
});

// tao ra cac state chua rootReducers (xem nhu state tong cua ung dung)
export const store = createStore(rootReducer);