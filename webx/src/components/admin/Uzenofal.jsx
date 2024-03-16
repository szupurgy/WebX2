import React from 'react'
import { IoSend } from "react-icons/io5";
const Uzenofal = () => {
  return (
    <div className='w-full p-2 overflow-scroll h-full'>
        <h1 className='flex text-white text-4xl justify-center items-center'>Admin üzenőfal</h1>
        <div className='bg-gray-800 justify-end items-end flex flex-col p-2 mb-60 w-11/12 mx-auto h-5/6'>
            <div className='h-5/6 bg-gray-600 w-full'>
              
            </div>
            <div className='flex bg-black p-2 w-full'>
              <input type="text" placeholder='Üzenet írása...' className='w-full h-10 text-white bg-black' />
              <button className='ml-2'>
                <IoSend/>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Uzenofal