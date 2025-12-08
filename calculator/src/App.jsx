import React, { useState } from "react";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  const number = ["C", "1", "2","+", "3", "4", "-","5", "6", "*","7", "8","/", "=","9", "0","."];
  const [value,setValue]=useState("");
  return (
    <div className="flex items-center justify-center min-h-screen bg-linear-to-br from-blue-50 to-indigo-100">
      <div className="bg-white rounded-lg shadow-2xl p-6 w-80">
        <Display value={value}></Display>
        <div className="grid grid-cols-3 gap-3 mt-6">
          {number.map((item) => (
            <Buttons key={item} name={item} value={value} setValue={setValue}></Buttons>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
