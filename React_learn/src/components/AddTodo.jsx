import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function AddTodo({todo,setTodo}) {
//   const [text,setText]=useState("");
// const [date,setdate]=useState("");
const text=useRef("");
const date=useRef("");
  return (
    <div className='flex gap-3 mb-6 p-4 bg-gradient-to-red from-blue-50 to-indigo-50 rounded-lg shadow-md border border-blue-100'>
      <input
        type="text" ref={text}
        placeholder="Enter Todo here"
        className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 h-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition font-medium text-gray-700 placeholder-gray-400" 
        // onChange={(e)=>{
        //   const ele=e.target.value;
          // console.log(ele);
          // setText(ele);
          // setText("");
          // e.target.value="";
        // }}
      />
      <input
        type="date" ref={date}
        className="border-2 border-gray-300 rounded-lg px-4 py-2 h-10 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition text-gray-700"
        // onChange={(e)=>{
        //   const date=e.target.value;
        //   console.log(date);
        //   setdate(date);
          // setdate("")
          // e.target.value="";
        // }}
      />
      <button className="bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-semibold h-10 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" onClick={()=>{
        let prev=[...todo,{text:text.current.value,date:date.current.value}];
        setTodo(prev);
        text.current.value = "";
        date.current.value = "";
        // setText("");
        // setdate("");
      }}>
        Add
      </button>
    </div>
  )
}

export default AddTodo