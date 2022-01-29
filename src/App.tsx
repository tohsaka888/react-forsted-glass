import React from "react";
import "./App.css";
import ForstedGlass from "./components/ForstedGlass";

function App() {
  const imgUrl = "https://w.wallhaven.cc/full/y8/wallhaven-y8k2wk.jpg";
  return (
    <div className="App">
      <ForstedGlass
        imgUrl={imgUrl}
        blur={"20px"}
        topBottom={"10vh"}
        leftRight={"5vw"}
        width={"100%"}
        height={"100vh"}
      >
        <div style={{ textAlign: "left", color: "white", fontSize: "2rem" }}>
          这是一个示例
        </div>
      </ForstedGlass>
    </div>
  );
}

export default App;
