import React from 'react'
import youtube from "../../assets/youtube.png"
import logo from "../../assets/logo.png"

function EntrancePage() {
  return (
    <div className='flex justify-center items-center bg-red-700 min-h-screen flex-col '>
          <img src={youtube} alt='' className='w-[500px] h-[300px]' loading='eager'/>
          <img src={logo} alt='' className='text-black -my-[4.5rem]' loading='eager'/>
          
    </div>
  )
}

export default EntrancePage