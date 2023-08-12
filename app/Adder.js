import React, { useEffect, useState } from 'react'

const Adder = ({showAdder,changeSA}) => {

    const [dispaly,setDisplay] = useState(false);

    useEffect(()=>{
        setDisplay(true);
        

    },[])

    function closeAdder(e){
        if(e.target.id == "adderBG"){

            setDisplay(false)
            setTimeout(() => {
                
                changeSA(false);
            }, 1000);     
       
        }
        
        
    }

  return (
    <div id="adderBG" className={` w-screen flex items-center justify-center h-screen ease-in-out duration-1000 bg-[rgba(0,0,0,0.4)] top-0 absolute ${dispaly ? "opacity-100" : "opacity-0" }`}
    onClick={(e)=>closeAdder(e)}
    >

        <div  className={`w-96 h-96 bg-lime-500 justify-center rounded-md`}>
        <div className="text-black font-bold flex flex-col gap-9 items-center">
      <label>Enter Data You Want To Add : </label>
      <input type='text' className='bg-gray-300 text-[#006a4e] rounded-xl' />


    <button  className='rounded bg-[#006a4e] text-gray-100 w-20 h-12 cursor-pointer hover:bg-[#2a8000]' onClick={() => alert("ADDED TO NOWWHERE")}>Add</button>
    </div>

    </div>


        

    </div>
  )
}

export default Adder