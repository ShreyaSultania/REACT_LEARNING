import React from 'react'
import AppName from './components/AppName'
import Headlines from './components/Headlines'
import Time from './components/Time'
function App() {
  const D=new Date();
  console.log();
  const date=D.toLocaleDateString();
  const time=D.toLocaleTimeString();
  return (
    <>
   
    <AppName></AppName>
    <Headlines></Headlines>
    <Time date={date} time={time}></Time>
    
    </>
  )
}

export default App