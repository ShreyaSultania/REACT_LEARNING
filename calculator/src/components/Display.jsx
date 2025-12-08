import React from "react";

function Display(props) {
  return (
    <div className="w-full">
      <input
        type="text"
        className="w-full h-16 border-2 border-indigo-300 rounded-lg px-4 py-2 text-right text-2xl font-semibold focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 bg-gray-50"
        placeholder="0" 
        value={props.value}
      />
    </div>
  );
}

export default Display;
