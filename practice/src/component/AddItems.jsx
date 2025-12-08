import React from 'react'

function AddItems(Props) {
  return (
    <div className='bg-white rounded-lg shadow-md p-4 flex items-center justify-between border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300'>
      <div className='flex items-center gap-3'>
        <span className='text-2xl'>🛒</span>
        <span className='text-lg font-semibold text-gray-800'>{Props.item}</span>
      </div>
      <button 
        className='px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg' 
        onClick={()=>{
          
        }}
      >
       Buy
      </button>
    </div>
  )
}

export default AddItems