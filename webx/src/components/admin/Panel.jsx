import React from 'react'

const Panel = () => {
    return (
        <div className='w-full p-2 m-5 h-full overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Teljes</h2>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Elmúlt 24 óra</h2>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Elmúlt 1 hét</h2>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Elmúlt 1 hónap</h2>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Elmúlt 1 év</h2>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Új felhasználók száma</h1>
                </div>
                <div>
                    <h1 className='text-white'>500</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Legeladottabb termék</h1>
                </div>
                <div>
                    <h1 className='text-white'>Iphone 13 pro max</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Legújjabb termék</h1>
                </div>
                <div>
                    <h1 className='text-white'>Iphone 15 pro max</h1>
                </div>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default Panel