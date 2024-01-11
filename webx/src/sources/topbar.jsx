import React from 'react'

const TopBar = () => {
  return (
    <div className='bg-gray-500 overflow-hidden h-24 p-3 flex shadow-lg '>
        <img src="../public/logo.png" className='inline-flex w-24' title='WebX logo' alt="logo" />
        <div className=''>
        <a href="#">Home</a>
        <a href="#Termekek">Termékek</a>
        </div>
    </div>
  )
}

export default TopBar