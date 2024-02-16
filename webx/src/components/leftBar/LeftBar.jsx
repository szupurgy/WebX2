import React, { Children } from 'react'

const LeftBar = ({children}) => {
  return (
    <div className='flex'>
        <div className='w-1/3 bg-gray-300 sticky h-full  left-0'>
            awd
        </div>
        {children}
    </div>
  )
}

export default LeftBar