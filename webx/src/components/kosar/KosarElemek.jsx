import React, { useState } from 'react'
import {IoTrashBin} from "react-icons/io5"
const KosarElem = () => {
    const [mennyiseg, setMennyiseg]=useState(1);
    return (
        <div className='bg-slate-500 justify-between mb-4 flex flex-col rounded h-72'>
            <div className='flex'>
                <img src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png" className='size-40' />
                <h2 className='p-5 justify-between'>leiras</h2>
            </div>
            <div className='p-3'>
                <h1>nev</h1>
            </div>
            <hr className='m-2' />
            <div className='flex items-center text-2xl mb-3 justify-center'>
                <button onClick={()=>{setMennyiseg(0)}}><IoTrashBin className='size-6 text-red-700' /></button>
                <button onClick={()=>{setMennyiseg(mennyiseg-1)}}>➖</button>
                <span>{mennyiseg}</span>
                <button onClick={()=>{setMennyiseg(mennyiseg+1)}}>➕</button>
            </div>
        </div>
    )
}

export default KosarElem