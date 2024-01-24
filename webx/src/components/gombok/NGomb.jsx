import React from 'react'

const NormalButton = (szoveg) => {
  return (
    <button className='bg-blue-300'>
        {szoveg.children}
    </button>
  )
}

export default NormalButton