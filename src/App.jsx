import { useState } from "react";
import "./App.css";
import CustomizedSwitches from "./Mode/Mode";
import Clock from "./Clock/Clock";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const lightModeHandler = (e) => {
    setDarkMode((value) => !value);
  };
  return (
    <div className=" relative">
      <button
        onClick={lightModeHandler}
        className="absolute top-5 right-10 text-white w-10 h-10 z-10 "
      >
        <CustomizedSwitches />
      </button>

      <div
        className={` bg-[url(${
          darkMode ? "./image/background.jpg" : "./image/background2.jpg"
        })] relative flex justify-center items-center w-full h-[70vh] bg-no-repeat bg-cover `}
      >
        <div className=" text-6xl">
          {" "}
          <Clock data={darkMode} />
        </div>
      </div>
    </div>
  );
}

export default App;
