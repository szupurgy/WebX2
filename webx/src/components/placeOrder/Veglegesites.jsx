import React, { useContext, useMemo, useState } from 'react'
import arContext from '../../context/ArContext'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const OrderPlace = () => {
    const { cart } = useContext(arContext)
    let alma = 0;
    useMemo(() => {
        alma = 0
        cart.map((i) => {
            alma += i.ar * i.darab
        })
    }, [cart])

    const [arrow, setarrow] = useState(false);


    return (
        <>
            <div className='m-5 border rounded md:hidden'>
                <div className='w-full'>
                    <h1 className='flex justify-center items-center'>Termék összesítő</h1>
                </div>
                <hr className='mx-5' />
                <div id='termekek' className='flex flex-col mx-5 gap-2 mt-2 mb-2'>
                    {
                        cart && cart.map((termek, index) => (
                            <h2 key={index}>{termek.darab} X {termek.nev}</h2>
                        ))
                    }
                    {/* kodbol ide a termekek neve x mennyiseg */}
                </div>
                <hr className='mx-5' />
                <h2 className='p-2 text-xl gap-2 text-indigo-800'><span className='text-2xl text-black font-bold'>Végösszeg:</span> {alma} Ft</h2>
            </div>
            <div className='hidden md:flex'>
                <div onClick={()=>{setarrow(!arrow)}} className='flex flex-col justify-center items-center'>
                    <h1>Termékek</h1>
                    <h1>{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}</h1>
                </div>

                <div></div>
            </div>
        </>
    )
}

export default OrderPlace