import React, { useState } from "react";
import "./InputEle.css";
import WeatherDec from "./WeatherDec";

const InputEle = () => {
  const [input, setInput] = useState("");
  const [city, setCity] = useState("");
  
  const handleSearch = () => {
    if (!input.trim()) return;
    setCity(input);
    setInput("");
  };
  return (
    <>
    <div className="InputDiv">
      <input
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            setCity(input);
            setInput("");
          }
        }}
        type="text"
        name="Enter city..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" onClick={handleSearch}>
        search
      </button>
    </div>
    <div className="weatherDesc">
        <WeatherDec city={city}/>
    </div>
    </>
  );
};

export default InputEle;
