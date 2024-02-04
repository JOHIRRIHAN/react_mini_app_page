import React from 'react'

function background() {
  return (
   <>
    <div className='fixed z-[2] w-full h-screen'>
      <div className=" absolute top-[5%] w-full py-10 flex justify-center text-xl text-zinc-600 font-semibold">Document.</div>
      <h1 className='text-[12vw] leading-none font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute text-zinc-600'>Docs.</h1>

    </div>
   
   </>
  )
}

export default background