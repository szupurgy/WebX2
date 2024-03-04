import React, { useState } from 'react'
import { IoTrashBin } from "react-icons/io5"
const KosarElem = ({termek}) => {
    const [mennyiseg, setMennyiseg] = useState(1);
    const token = localStorage.getItem("token");
    const deleteTermek = async () => {
        const response = await fetch("http://localhost:8000/product/delete", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ id: termek.id })
        })
        location.reload();
    }
    const MennyisegTobb = () => {
        setMennyiseg(mennyiseg + 1);
        if (mennyiseg==10) {
            setMennyiseg(10)
        }
    }
    const MennyisegKevesebb = () => {
        setMennyiseg(mennyiseg - 1)
        if (mennyiseg == 1) {
            setMennyiseg(1)
        }
    }
    return (
        <div className='bg-slate-500 justify-between mb-4 flex flex-col rounded h-72'>
            <div className='flex'>
                <img src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png" className='size-40' />
                <div className='flex flex-col'>
                    <h2 className='px-5 pt-5 justify-between text-4xl text-indigo-800 font-bold'>{(termek.Termek.ar) * mennyiseg} Ft</h2>
                    <h2 className='px-5'><span className='font-bold'>Garancia:</span> 12hónap</h2>
                    <h2 className='px-5'><span className='font-bold'>Értékelés:</span> 84% pozitív</h2>
                </div>
            </div>
            <div className='p-3'>
                <h1 className='text-4xl'>{termek.Termek.nev}</h1>
            </div>
            <hr className='m-2' />
            <div className='flex items-center text-2xl mb-3 justify-center'>
                <button onClick={() => { deleteTermek() }}><IoTrashBin className='size-6 text-red-700' /></button>
                <button onClick={MennyisegKevesebb}>➖</button>
                <span>{mennyiseg}</span>
                <button onClick={MennyisegTobb}>➕</button>
            </div>
        </div>
    )
}

export default KosarElem