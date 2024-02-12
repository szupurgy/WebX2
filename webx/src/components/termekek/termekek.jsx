import React from 'react'

const AllProducts = () => {
    let termekek= [];
    const getAllProducts = async() => {
        const response = await fetch('http://localhost:8000/product/all');
        const data = await response.json();
        termekek=data;
        console.log(termekek);
    }
    getAllProducts();
  return (
    <>
        <div className='flex mt-1'>
            <div className='hidden w-1/6 bg-slate-50 border-r border-gray-200'>filter</div>
            <div className='w-full sm:w-5/6 justify-center gap-3 items-center flex flex-col'>
                <div className='flex rounded-md w-5/6 border p-2'>
                    <div className=''>
                        <img className='h-full' src="https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg"/>
                    </div>
                    <div className='flex flex-col p-2 justify-center items-center'>
                        <h1 className='text-2xl'>Iphone 15 Pro Max</h1>
                        <h2 className='text-xl'>592000ft</h2>
                        <button className='ring-2 rounded-md p-2 bg-indigo-300 ring-indigo-400'>
                            Vásárlás
                        </button>
                    </div>
                </div>
                <div>b</div>
            </div>
        </div>
    </>
  )
}

export default AllProducts