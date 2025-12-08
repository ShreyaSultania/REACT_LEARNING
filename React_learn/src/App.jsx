import React from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import { useState } from "react";
const name = "shreya";

function App() {
//   const TodoItems=[{
//     name:"buy milk",
//     date:'23/5/25',
//   },
// {
//    name:"go to college",
//     date:'3/5/25',
// }
// ]
const [todo,setTodo]=useState([]);
// const [date,setDate]=useState([]);
  return (
    <>
      <AppName></AppName>
      <AddTodo setTodo={setTodo} todo={todo}></AddTodo>
      {todo.map((item) => (
        <TodoItem text={item.text} date={item.date} todo={todo} setTodo={setTodo}></TodoItem>
      ))}
      
    </>
  );
}

export default App;
