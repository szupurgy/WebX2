import React, { Children, useState } from 'react'

const LeftBar = () => {
  const [oldalBar, setOldalBar] = useState(true);
  return (
    <div className={`flex z-40 ${oldalBar ? 'w-14' : 'w-1/3'}`} >
      <div className={` ${oldalBar ? 'w-14' : 'w-1/2 md:w-1/3'} fixed z-40 duration-300 transition-all ease-in border-r-2 bg-slate-100 h-screen`}>
        <div className='flex justify-between pl-3'>
          <h1 className={`text-center items-center justify-center  text-3xl ${oldalBar ? 'hidden' : 'flex'}`}>Szűrő</h1>
          <button className='ring-2 ring-stone-400 rounded-md p-1 justify-center items-center flex text-2xl m-3 ml-0 bg-stone-200' onClick={() => { setOldalBar(!oldalBar) }}><ion-icon name={`${oldalBar ? 'chevron-forward-outline' : 'chevron-back-outline'}`}></ion-icon> </button>
        </div>
        <hr className={`${oldalBar ? 'hidden' : 'flex'} mx-3 bg-black`} />
        <div className={`${oldalBar ? 'hidden' : 'flex'}`}>
          <div className='flex flex-col w-full justify-center items-center'>
            <h1>Termék neve:</h1>
            <input type="text" id='termeknev' className='ring-1 ring-stone-400 w-11/12 rounded-md text-center' />
            <h1>Termék ára:</h1>
            <div className='flex w-full justify-between'>
              <input type="text" id='minar' placeholder='Min' className='ring-1 ring-stone-400 w-full mx-5 rounded-md text-center' />
              <input type="text" id='maxar' placeholder='Max' className='ring-1 ring-stone-400 w-full mx-5 rounded-md text-center' />
            </div>
            <hr className=' w-11/12 flex ml-5 mx-5 mt-5 ' />
            <div>
              <button className='text-2xl m-6 p-3 rounded-md bg-stone-300 shadow-sm'>Keresés!</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftBar