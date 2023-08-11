"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'


export default function Home() {

  const [pass, setPass] = useState("");
  const [data, SetData] = useState([]);
  const [show,setShow] = useState(false);

  useEffect(()=>{

    if(pass=="mujiii"){

      setTimeout(()=>{
      
        setShow(true);
        console.log("KIRTAN")

      },400)

      
    }
    

  },[pass])

  return (
    <div class=" h-screen flex flex-col items-center">
      {/* <Image alt="Image"> */}

      <div className='flex flex-col items-center pt-20'>
        {show ?

          <div className='flex flex-col items-center gap-9'>

            <div>
              <label>Enter Data You Want To Add : </label>
              <textarea className='bg-gray-300 text-[#006a4e] rounded-xl w-96 h-36' />
            </div>


            <input type='button' className='rounded bg-[#006a4e] text-gray-100 w-32 h-16 cursor-pointer hover:bg-[#2a8000]' value="ADD" onClick={() => console.log("clicked")}></input>

            {
              data && data.map((e) => (

                <div key={e.id}> {e.url} </div>

              ))
            }

          </div>
          :
          <div className={` ${pass=="mujiii" && "opacity-0 ease-in-out duration-300"} flex flex-col items-center `}>

            <div>ENTER PASSWORD</div>
            <input type='name' className= {` bg-transparent border-x-4 border-r-gray-50 text-white rounded-xl w-60 h-10 `} onChange={(e) => setPass(e.target.value)} ></input>

          </div>}



      </div>


    </div>


  )
}
