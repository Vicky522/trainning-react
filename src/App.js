import logo from "./logo.svg";
import "./App.css";
import DemoFunctionComponent from "./components/DemoFunctionComponent";
import DemoReactClassComponent from "./components/DemoReactClassComponent";
import BaiTapLayout from "./components/BaiTapLayout/BaiTapLayout";
import DataBinding from "./DataBinding/DataBinding";

function App() {
  return (
    <div className="App">
      {/* <BaiTapLayout /> */}
      <DataBinding />
    </div>
  );
}

export default App;
