import React, { Children, useState } from 'react'

const LeftBar = () => {
  const [oldalBar, setOldalBar] = useState(false);
  return (
    <div className={`flex ${oldalBar ? 'w-14' : 'w-1/3'}`} >
      <div className={` ${oldalBar ? 'w-14' : 'w-1/3'} fixed border-r-2 bg-slate-100 h-screen`}>
        <div className='flex justify-between pl-3'>
          <h1 className={`text-center text-3xl ${oldalBar ? 'hidden' : 'flex'}`}>Szűrő</h1>
          <button className='ring-2 rounded-md m-3 bg-blue-500' onClick={() => { setOldalBar(!oldalBar) }}>{`${oldalBar ? 'Nyit' : 'Zár'}`}</button>
        </div>
        <hr className={`${oldalBar ? 'hidden' : 'flex'} mx-3 bg-black`} />
        <div className={`${oldalBar ? 'hidden' : 'flex'}`}>
          <div className='flex flex-col w-full justify-center items-center'>
            <h1>Termék neve:</h1>
            <input type="text" id='termeknev' className='ring-1 w-11/12 rounded-md text-center' />
            <h1>Termék ára:</h1>
            <div className='flex justify-between gap-2'>
            <input type="text" id='minar' placeholder='Min' className='ring-1 w-8/12 rounded-md ml-2 text-center' />
            <input type="text" id='maxar' placeholder='Max' className='ring-1 w-8/12 rounded-md mr-2 text-center' />
            </div>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar