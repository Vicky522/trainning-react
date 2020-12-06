import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./components/DemoFunctionComponent";
import DemoReactClassComponent from "./components/DemoReactClassComponent";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";
import DataBindingClassComponent from "./DataBinding/DataBindingClassComponent";
import HandlEvent from "./HandleEvent/HandlEvent";
import DemoState from "./DemoState/DemoState";
import BaiTapChonXe from "./DemoState/BaiTapChonXe/BaiTapChonXe";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import BaiTapThucHanhLayout from "./BaiTapThucHanhLayout/BaiTapThucHanhLayout";
import BaiTapChonKinh from "./BaiTapStateMap/BaiTapChonKinh";
import BaiTapRenderDanhSachPhim from "./RenderWithMap/BaiTapRenderDanhSachPhim";
import DemoProps from "./Props/DemoProps";
import ProductList from "./components/BaiTapLayout/ProductList";
import ProductListRCC from "./Props/ProductListRCC";
import PropsWithEvent from "./Props/PropsWithEvent";
import BaiTapGioHangRedux from "./BaiTapRedux/BaiTapGioHang/BaiTapGioHangRedux";
import BaiTapGamXucXac from "./BaiTapRedux/BaiTapGameXucXac/BaiTapGamXucXac";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent /> */}
      {/* <HandlEvent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      {/* <RenderWithMap /> */}
      {/* <BaiTapThucHanhLayout /> */}
      {/* <BaiTapChonKinh /> */}
      {/* <BaiTapRenderDanhSachPhim /> */}
      {/* <DemoProps /> */}
      {/* <ProductListRCC /> */}
      {/* <PropsWithEvent /> */}
      {/* <BaiTapGioHangRedux /> */}
      <BaiTapGamXucXac />
    </div>
  );
}

export default App;
