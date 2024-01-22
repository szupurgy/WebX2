import React, {useState} from 'react'
import { FaSearch } from "react-icons/fa";

const TopBar = () => {
  return (
    <>
    <div className='
    bg-gray-300 
      overflow-hidden 
      fixed
      w-full
      h-28 
      p-6
      absoulte
      flex 
      shadow-lg '>
        <img src="../public/logo.png" className='inline-flex w-28'/>
        <div className='hidden md:flex lg:flex text-2xl justify-normal text-center p-5 gap-6'>
        <a href="Home" className=''>Home</a>
        <a href="Products" className=''>Termékek</a>
        </div>
        <div id='SearcBar' className='
        lg:flex
        sm:flex 
        md:flex 
        hidden
        w-full
        relative
        items-center
        '>
          <input type="text" className=' p-5 rounded-full w-full text-2xl'/>
          <FaSearch className='cursor-pointer absolute right-5 h-full overflow-auto' />
        </div>
        <div className='gap-5 text-2xl justify-center items-center text-center lg:flex sm:flex md:flex hidden'>
        <a href="login">Belépés</a>
        <a href="signup">Regisztráció</a>
        </div>
        <div className=' justify-center text-center p-5'>
        <button onClick={()=>setVisible(!rigtBar)}>
          <img src="/public/menuicon.svg" className='w-8 flex sm:hidden lg:hidden md:hidden' />
        </button>
        </div>
    </div>
    <div className='w-full h-28 z-10'></div>
    </>
  )
}

export default TopBar