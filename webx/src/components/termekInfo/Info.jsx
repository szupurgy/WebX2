import React from 'react'
import toast from 'react-hot-toast';
const TInfo = ({ data }) => {
  //{nev,leiras,ar,link}
  const kosarba = async () => {
    const response = await fetch("http://localhost:8000/product/addCart",{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'authorization':`Bearer ${localStorage.getItem("token")}`
      },
      body:JSON.stringify({tid:data.id})
    })
    const adat= await response.json();
    toast.success("Termék sikeres a kosárba helyezve!");
  }
  return (
    <>
    <div className='h-24'></div>
      <div>
        <div>
          <img src="https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg"/>
        </div>
        <div>
          <h1 className='text-center text-2xl'>{data?.nev}</h1>
          <hr className='mx-5 mt-2'/>
          <h2 className='flex justify-between px-5 py-3 text-xl'>{data?.leiras}</h2>
        </div>
        <hr className='mx-5'/>
        <div className='w-full flex justify-center md:m-3 mt-3 items-center'>
          <h1 onClick={kosarba} className='text-center w-full md:w-1/2 flex justify-center items-center cursor-pointer bg-stone-400 p-3 rounded-2xl text-3xl font-semibold font-sans'>Vásárlás</h1>
        </div>
      </div>
      <div className='bg-slate-100 rounded-lg p-4 w-2/3 m-4 mx-auto'>
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
    </>
  )
}

export default TInfo