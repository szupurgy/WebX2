import React from 'react'

const Gomb = (szoveg) => {
  return (
    <button className='bg-gray-200 text-white flex justify-center my-8 mx-10 items-center w-10 h-10 rounded-full md:ml-8 hover:bg-gray-500 duration-500'>
        {
            szoveg.children
        }
    </button>
  )
}

export default Gomb