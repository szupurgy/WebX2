import React from 'react'
import TopBar from '../components/topbar/topbar'

const HomePage = () => {
  return (
    <>
      <TopBar />
      <div className='mt-8 w-2/3 mx-auto'>
        <div className='flex gap-4'>
          <img
            src="https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg"
            alt=""
            className='w-[400px] h-[225px] cursor-pointer'
          />
          <div className='flex flex-col m-4'>
            <h1 className='text-3xl font-medium'>Apple iPhone 15 128GB Mobiltelefon</h1>
            <span className='my-3'>Raktáron</span>
            <span className='text-4xl font-semibold my-8'>357 790 Ft-tól</span>
            <span className='p-4 bg-slate-500 rounded-full max-w-36 cursor-pointer'>
              <h1 className='text-xl text-white text-center'>Vásárlás</h1>
            </span>
          </div>
        </div>
        <div className='bg-slate-100 rounded-lg p-4 w-2/3 m-4 mx-auto'>
          <h1 className='text-3xl font-semibold text-center line'>Termék adatlapja</h1>
          <h1 className='text-2xl text-center'>Apple iPhone 15 128GB</h1>
          <div className='flex flex-col justify-between mt-12 w-3/4 mx-auto text-slate-500 gap-4'>
            <div className='flex justify-between'>
              <h1>Kialakítás</h1>
              <h1>Érintőképernyős</h1>
            </div>
            <div className='flex justify-between'>
              <h1>SIM kártya típusa</h1>
              <h1>nano-SIM és eSIM</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage