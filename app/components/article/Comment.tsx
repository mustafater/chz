import React from 'react'

function Comment( {com}:any) {
  return (
    <>
   
    <div className='px-12 mx-20 space-y-0.5 '>
      <div className="border shadow-teal-500 shadow-md  p-6 rounded-lg bg-gray-800 text-gray-300">
       
        <p className='list-disc text-lg px-6'>{com?.comment}</p>
       </div>
     </div>
  
  
    </>
  )
}

export default Comment