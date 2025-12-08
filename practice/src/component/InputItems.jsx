import React from "react";
import { useState } from "react";

function InputItems(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-green-300">
      <label className="block text-gray-700 font-semibold mb-3">
        Search or add items:
      </label>
      <input
        type="text"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            let newItems = e.target.value;
            e.target.value = "";
            let foodItem = [...props.text, newItems];
            props.setText(foodItem);
          }
        }}
        placeholder="Type to search items..."
        className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200"
      />
     
    </div>
  );
}

export default InputItems;
