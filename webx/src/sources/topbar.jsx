import React, {useState} from 'react'
import Selector from './selectorbar'

const TopBar = () => {
  const [rigtBar, setVisible] = useState(false);
  return (
    <>
    <div className='bg-gray-500 overflow-hidden h-24 p-3 flex shadow-lg '>
        <img src="../public/logo.png" className='inline-flex w-24' title='WebX logo' alt="logo" />
        <div className='flex w-full justify-center text-center p-5 gap-6'>
        <a href="#" className='lg:flex sm:block md:block hidden'>Home</a>
        <a href="#Termekek" className='lg:block md:block sm:block hidden'>Termékek</a>
        </div>
        <div className=' justify-center text-center p-5'>
        <button onClick={()=>setVisible(!rigtBar)}>
          <img src="/public/menuicon.svg" className='w-8 flex sm:hidden lg:hidden md:hidden' />
        </button>
        </div>
    </div>
    <div id='new'>
      {
        rigtBar ? (
          <Selector/>
        ) : null
      }
    </div>
    </>
  )
}

export default TopBar