import React from 'react'

function Time(Props) {
  return (
    <p className='text-2xl text-center'>This is the current Time : {Props.date} - {Props.time}</p>
  )
}

export default Time