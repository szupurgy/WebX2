import React from 'react'
import { Link } from 'react-router-dom'

const TermekCard = ({termek}) => {
    return (
        <>
            <div className='main hover:scale-95 transition flex flex-col p-5 gap-5 rounded-2xl md:ml-8 md:pb-10 drop sm:w-1/2 md:size-80 md:gap-1 size-11/12 shadow-2xl justify-center items-center bg-gradient-to-t from-stone-500'>
                <div className='kep'>
                    <img src='https://media-play.pl/ecommerce/medias/productimages/48733/TE-AP-12PM1-PL1-BU/square.png' className='size-60 md:size-40 hover:scale-110 transition drop-shadow-2xl' />
                </div>
                <div className='szoveg flex flex-col gap-2 w-full'>
                    <span className='termeknev font-bold flex w-full items-center justify-center text-center text-2xl'>{termek.nev}</span>
                    <span className='rovidleiras flex w-full text-center items-center justify-center'>{termek.ar} Ft</span>
                </div>
                <div className='buy w-full'>
                    <Link to={"/info/"+termek.id} className='flex hover:font-bold hover:bg-stone-300 rounded-lg p-2 justify-center items-center bg-stone-200 w-full font-medium'>Vásárlás</Link>
                </div>
            </div>
        </>
    )
}

export default TermekCard