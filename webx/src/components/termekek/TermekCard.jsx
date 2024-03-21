import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlinePercentage} from "react-icons/ai"

const TermekCard = ({termek}) => {
    console.log(termek.termekkepek[0].kep)
    return (
        <>
            <div className='main hover:scale-95 transition flex flex-col p-5 gap-5 rounded-2xl md:ml-8 md:pb-10 drop sm:w-1/2 md:size-80 md:gap-1 size-11/12 shadow-2xl justify-center items-center bg-gradient-to-t from-stone-500'>
                <div className={`w-full ${termek.akcios ? "": "hidden"} `}>
                    <AiOutlinePercentage title='Akciós' className='absolute size-10 hover:animate-pulse flex justify-end items-end' />
                </div>
                <div className='kep'>
                    <img src={`http://localhost:8000/uploads/${termek.termekkepek[0].kep}`} className='size-60 md:size-40 rounded-xl hover:scale-110 transition drop-shadow-2xl' />
                </div>
                <div className='szoveg flex flex-col gap-2 w-full'>
                    <span className='font-bold flex w-full items-center justify-center text-center text-2xl'>{termek.nev}</span>
                    <span className='flex w-full text-center items-center justify-center'>{ termek.akcios ? termek.ar-(termek.ar*(termek.akciosar/100)) : termek.ar} Ft</span>
                </div>
                <div className='buy w-full'>
                    <Link to={"/info/"+termek.id} className='flex hover:font-bold hover:bg-stone-300 rounded-lg p-2 justify-center items-center bg-stone-200 w-full font-medium'>Vásárlás</Link>
                </div>
            </div>
        </>
    )
}

export default TermekCard