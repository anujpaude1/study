import React from 'react'

const Password = ({delay,pass,setPass}) => {
  return (
    <div style={{transitionDuration:`${String(delay)}ms`}}  className={` ${pass=="prajwalchaudhary" && `opacity-0 ease-in-out`} flex flex-col items-center `}>

    <div className="text-black font-bold">ENTER PASSWORD</div>
    <input type='name' disabled={pass == "prajwalchaudhary" ? true : false} 
    className= {` bg-transparent border-x-4 border-black text-black rounded-xl w-60 h-10 `} onChange={(e) => setPass(e.target.value)} >

    </input>
    

  </div>
  )
}

export default Password