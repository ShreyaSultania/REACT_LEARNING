import React from "react";
import AddItems from "./component/AddItems";
import InputItems from "./component/InputItems";
import { useState } from "react";
function App() {
  // const items = ["Dal", "Leafy vegetable", "Roti", "Salad", "Paneer", "ghee"];


  const [Text, setText] = useState([]);
  return (
    <div className="min-h-screen bg-linear-to-b from-green-50 to-green-100 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-bold text-4xl text-center text-green-700 mb-8 drop-shadow-md">
          🥗 Healthy Food Shopping
        </h1>
        <InputItems text={Text} setText={setText}></InputItems>
        <div className="mt-8 space-y-3">
          {Text.map((item) => (
            <AddItems key={item} item={item}></AddItems>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
