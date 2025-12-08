import React from 'react'

function TodoItem(props) {
  return (
    <div className="flex items-center justify-between gap-4 p-4 mb-3 bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-xl hover:border-blue-400 transition-all duration-200 group">
      <p className="flex-1 text-gray-800 font-medium truncate group-hover:text-gray-900">{props.text}</p>
      <p className="text-gray-500 text-sm whitespace-nowrap font-medium group-hover:text-gray-700">{props.date}</p>
      <button className="bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold h-10 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 shrink-0" onClick={()=>{
        let ele=props.todo.filter((t)=>t.text!=props.text);
        console.log(`item deleted ${props.text}`)
        props.setTodo(ele);
      }}>
        Delete
      </button>
    </div>
  )
}

export default TodoItem