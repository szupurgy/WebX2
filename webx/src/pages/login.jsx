import React from 'react'
import TopBar from '../components/topbar/topbar'

const Belepes = () => {
  return (
    <>
    <div className='w-screen h-screen justify-center items-center flex flex-col'>
        <div className='bg-gray-50 m-6 p-10 shadow-md w-3/6 rounded-md border-stone-950 border-2'>
        <div>
            <a href="home">
            <img src="../public/logo.png" className='w-full h-full'/>
            </a>
        </div>
        <hr className=' shadow-lg ' />
        <div className='flex '>
            <form className='inline-flex w-full' action="login">
                <div className='w-1/2'>
                <h1 className='p-2 text-xl'>Felhasználónév:</h1>
                    <input id='Name' type='text' placeholder='Név' className='border rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>Jelszó:</h1>
                    <input id='Password' type="password" placeholder='Jelszó' className='border rounded-md p-2.5 shadow-md' />
                    <br />
                    <a href="signup" className='text-blue-600'>Regisztráció</a>
                </div>
                    <div className='w-1/2 flex justify-center items-center '>
                        <button id='Belepes' type="submit" className='text-2xl m-6 p-3 border rounded-md bg-green-700'>Belépés!</button>
                    </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Belepes