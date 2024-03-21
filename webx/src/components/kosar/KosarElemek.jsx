import React, { useState, useContext, useEffect, useMemo } from 'react'
import { IoTrashBin } from "react-icons/io5"
import arContext from '../../context/ArContext';
const KosarElem = ({ termek, index }) => {
    const [mennyiseg, setMennyiseg] = useState(termek.darab);
    const {cart, ar, setAr, setCart } = useContext(arContext);

    const deleteTermek = () => {
        setCart(prev => {
            return prev.filter((item, i) => i !== index)
        })
    }

    useMemo(() => {
        setMennyiseg(termek.darab)
    }, [termek.darab])

    const MennyisegTobb = () => {
        setCart(
            cart.map((cartItem) =>
                cartItem.id === termek.id

                    ? { ...cartItem, darab: cartItem.darab >= 10 ? 10 : cartItem.darab + 1 }
                    : cartItem
            )
        )
    }

    const MennyisegKevesebb = () => {
        setCart(
            cart.map((cartItem) =>
                cartItem.id === termek.id

                    ? { ...cartItem, darab: cartItem.darab <= 1 ? 1 : cartItem.darab - 1 }
                    : cartItem
            )
        )
    }
    return (
        <div className='bg-stone-400 justify-between mb-4 flex flex-col rounded h-72'>
            <div className='flex justify-between'>
                <div className='flex p-3'>
                    <img src={`http://localhost:8000/uploads/${termek.termekkepek[0].kep}`} className='size-40' />
                    <div className='flex flex-col'>
                        <h2 className='px-5 pt-5 justify-between text-4xl text-indigo-800 font-bold'>{termek?.akcios ? (termek.ar-(termek.ar * (termek.akciosar / 100))) * termek.darab : (termek.ar) * termek.darab} Ft</h2>
                        <h2 className='px-5'><span className='font-bold'>Garancia:</span> 12hónap</h2>
                        <h2 className='px-5'><span className='font-bold'>Értékelés:</span> 84% pozitív</h2>
                    </div>
                </div>
                <div className='flex pr-5 pt-5 flex-col gap-3 items-center text-2xl mb-3 justify-center'>
                    <button onClick={() => { deleteTermek() }}><IoTrashBin className='size-6 text-red-700' /></button>
                    <button onClick={MennyisegTobb}>🔼</button>
                    <span className='text-3xl font-bold'>{mennyiseg}</span>
                    <button onClick={MennyisegKevesebb}>🔽</button>

                </div>
            </div>
            <div className='p-3'>
                <h1 className='text-4xl'>{termek.nev}</h1>
            </div>
            <hr className='m-2' />

        </div>
    )
}

export default KosarElem