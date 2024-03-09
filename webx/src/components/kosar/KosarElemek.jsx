import React, { useState, useContext, useEffect } from 'react'
import { IoTrashBin } from "react-icons/io5"
import arContext from '../../context/ArContext';
const KosarElem = ({termek,index}) => {
    const [mennyiseg, setMennyiseg] = useState(termek.darab);
    const token = localStorage.getItem("token");
    const {ar,setAr, total,setCart}=useContext(arContext);
    const deleteTermek = () => {
        console.log("termék törlése: nip");
        console.log(index)
        setCart(prev => {
            return prev.filter((item, i) => i !== index)
        })
    }

    const MennyisegTobb = () => {
        termek.darab+=1;
        setMennyiseg(termek.darab)
        if (termek.darab==11) {
            termek.darab = 10;
            setMennyiseg(termek.darab)
        }
    }

    const MennyisegKevesebb = () => {
        termek.darab -= 1;
        setMennyiseg(termek.darab)
        if (termek.darab == 0) {
            termek.darab = 1;
            setMennyiseg(termek.darab)
        }
    }
    return (
        <div className='bg-stone-400 justify-between mb-4 flex flex-col rounded h-72'>
            <div className='flex'>
                <img src="https://pngimg.com/uploads/iphone_14/iphone_14_PNG6.png" className='size-40' />
                <div className='flex flex-col'>
                    <h2 className='px-5 pt-5 justify-between text-4xl text-indigo-800 font-bold'>{termek?.akcios ? (termek.ar*(termek.akciosar/100)) * termek.darab : (termek.ar) * termek.darab} Ft</h2>
                    <h2 className='px-5'><span className='font-bold'>Garancia:</span> 12hónap</h2>
                    <h2 className='px-5'><span className='font-bold'>Értékelés:</span> 84% pozitív</h2>
                </div>
            </div>
            <div className='p-3'>
                <h1 className='text-4xl'>{termek.nev}</h1>
            </div>
            <hr className='m-2' />
            <div className='flex gap-3 items-center text-2xl mb-3 justify-center'>
                <button onClick={() => { deleteTermek() }}><IoTrashBin className='size-6 text-red-700' /></button>
                <button className='text-black' onClick={MennyisegKevesebb}>🔽</button>
                <span className='text-3xl font-bold'>{mennyiseg}</span>
                <button onClick={MennyisegTobb}>🔼</button>
            </div>
        </div>
    )
}

export default KosarElem