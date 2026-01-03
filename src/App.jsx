import { useState } from "react";

import "./App.css";
import InputEle from "./components/InputEle";

function App() {
  return (
    <>
      <h1>
        Weather App <span id="sun">🌤️</span>
      </h1>
      <InputEle/>
    </>
  );
}

export default App;
