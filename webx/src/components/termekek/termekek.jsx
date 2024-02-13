import React, { useEffect, useState } from 'react'

const AllProducts = () => {
    const [termekek, setTermekek] = useState(null)

    useEffect(() => {
        const getAllProducts = async () => {
            const response = await fetch('http://localhost:8000/product/all');
            const data = await response.json();
            setTermekek(data)
        }
        getAllProducts();
    }, [])
    return (
        <>
            <div className='flex mt-1'>
                <div className='hidden w-1/6 bg-slate-50 border-r border-gray-200'>filter</div>
                <div id='alltermek' className='w-full sm:w-5/6 justify-center gap-3 items-center flex flex-col'>
                            <div className='flex bg-zinc-300 rounded-md w-5/6 border p-2'>
                                <div className=''>
                                    <img className='h-full' src="https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg" />
                                </div>
                                <div className='flex flex-col p-2 justify-center items-center'>
                                    <h1 className='text-2xl'>Telefon neve</h1>
                                    <h2 className='text-xl'>999999Ft</h2>
                                    <button className='ring-2 rounded-md p-2 bg-indigo-300 ring-indigo-400'>
                                        Vásárlás
                                    </button>
                                </div>
                            </div>
                </div>
            </div>
        </>
    )
}

export default AllProducts