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

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      {/* <DataBinding /> */}
      {/* <DataBindingClassComponent /> */}
      {/* <HandlEvent /> */}
      {/* <DemoState /> */}
      {/* <BaiTapChonXe /> */}
      <RenderWithMap />
    </div>
  );
}

export default App;
