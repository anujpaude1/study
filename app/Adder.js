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
    <div id="adderBG" className={` w-screen flex  items-center justify-center h-screen ease-in-out duration-1000 bg-[rgba(0,0,0,0.4)] top-0 absolute ${dispaly ? "opacity-100" : "opacity-0" }`}
    onClick={(e)=>closeAdder(e)}
    >

        <div  className={` w-[30rem] h-[35rem] bg-[#74c4c9] text-white justify-center rounded-md`}>
        <div className="p-4 font-bold flex flex-col gap-9 items-center">
      <label>Enter Data You Want To Add : </label>
      <input type='text' className='bg-gray-300 rounded-xl' />


    <button disabled={!dispaly} className={`rounded bg-[#f4ade8] w-20 h-12 cursor-pointer hover:bg-[#a877a0]`} onClick={() => alert("ADDED TO NOWWHERE")}>Add</button>
    </div>

    </div>


        

    </div>
  )
}

export default Adder