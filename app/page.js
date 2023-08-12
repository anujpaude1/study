"use client"
import { useEffect, useState } from 'react'
import Password from './Password';
import Enter from './Enter';


export default function Home() {
  const delay = 1000;
  const [pass, setPass] = useState();
  const [data, SetData] = useState([
    {"id":"2",
    "user" : "kirtan",
  "url": "https://nhentai.net/g/177013"
,}
  ]);
  const [show,setShow] = useState(false);

  useEffect(()=>{

    if(pass=="mujiii"){

      setTimeout(()=>{
      
        setShow(true);
        // console.log("KIRTAN")
        setPass("")

      },delay)

      
    }
    

  },[pass])

  return (
    <div className=" h-screen flex items-center  w-screen">
      {/* <Image alt="Image"> */}

      <div className='flex flex-col justify-center w-full h-full' >

      
      <div className='flex flex-col items-center'>
        {show ?

         <Enter data={data} setShow={setShow}/>

          :
          <Password delay={delay} pass={pass} setPass={setPass}/>
          }


      </div>
    
      </div>


    </div>


  )
}
