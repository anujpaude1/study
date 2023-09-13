import React, { useState } from 'react'
import Adder from './Adder'

const Enter = ({data,setShow}) => {
  const [showAdder,changeSA] = useState(false);
  return (
    <div className='flex flex-col items-center'>
      <button className='w-10 h-10 bg-[#74c4c9] hover:bg-[#37767d] rounded-md text-3xl font-bold' onClick={()=>changeSA(true)}>+</button>
     
      {
        showAdder && 
        
        
          <Adder showAdder={showAdder} changeSA={changeSA}/>        
        
        
      }



   

    {
      data && data.map((e) => (

        <div className='rounded w-96 h-8 bg-[#74c4c9]' key={e.id}><a  href={e.url}> OOP LAB </a></div>

      ))
    }

<button className='bg-red-600 hover:bg-red-500 w-20  rounded-md h-10' onClick={()=>setShow(false)} >back</button>
  </div>
  )
}

export default Enter