import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlinePercentage } from "react-icons/ai"

const Home = () => {
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
        <div>
            <div className='h-24'></div>
            <img src="landing.png" />
            <hr />
            <div>
                <h1 className='text-2xl font-bold'>Akciós termékek:</h1>
                <div className='grid border grid-flow-col gap-5 overflow-x-scroll bg-gray-50'>
                    {
                        termekek && termekek.map((termek, index) => {
                            if (termek.akcios == true) {
                                return (
                                    <div key={index} className='hover:scale-95 w-72 transition flex flex-col p-5 gap-5 rounded-2xl md:ml-8 md:pb-10 drop sm:w-1/2 md:size-80 md:gap-1 size-11/12 shadow-2xl justify-center items-center bg-gradient-to-t from-stone-500'>
                                        <div className={`w-full ${termek.akcios ? "" : "hidden"} `}>
                                            <AiOutlinePercentage title='Akciós' className='absolute size-10 hover:animate-pulse flex justify-end items-end' />
                                        </div>
                                        <div>
                                            <img src='https://media-play.pl/ecommerce/medias/productimages/48733/TE-AP-12PM1-PL1-BU/square.png' className='size-60 md:size-40 hover:scale-110 transition drop-shadow-2xl' />
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <span className='font-bold flex w-full items-center justify-center text-center text-2xl'>{termek.nev}</span>
                                            <span className='flex w-full text-center items-center justify-center'>{termek.akcios ? termek.ar - (termek.ar * (termek.akciosar / 100)) : termek.ar} Ft</span>
                                        </div>
                                        <div className='buy w-full'>
                                            <Link to={"/info/" + termek.id} className='flex hover:font-bold hover:bg-stone-300 rounded-lg p-2 justify-center items-center bg-stone-200 w-full font-medium'>Vásárlás</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
                <h1 className='text-2xl font-bold'>Legújabb termékek:</h1>
                <div className='flex border justify-center items-center bg-gray-50'>
                    {
                        termekek && termekek.map((termek, index) => {
                            if ((index+1) == termekek.length) {
                                return (
                                    <div key={index} className='hover:scale-95 w-72 transition flex flex-col p-5 gap-5 rounded-2xl md:ml-8 md:pb-10 drop sm:w-1/2 md:size-80 md:gap-1 size-11/12 shadow-2xl justify-center items-center bg-gradient-to-t from-stone-500'>
                                        <div className={`w-full ${termek.akcios ? "" : "hidden"} `}>
                                            <AiOutlinePercentage title='Akciós' className='absolute size-10 hover:animate-pulse flex justify-end items-end' />
                                        </div>
                                        <div>
                                            <img src='https://media-play.pl/ecommerce/medias/productimages/48733/TE-AP-12PM1-PL1-BU/square.png' className='size-60 md:size-40 hover:scale-110 transition drop-shadow-2xl' />
                                        </div>
                                        <div className='flex flex-col gap-2 w-full'>
                                            <span className='font-bold flex w-full items-center justify-center text-center text-2xl'>{termek.nev}</span>
                                            <span className='flex w-full text-center items-center justify-center'>{termek.akcios ? termek.ar - (termek.ar * (termek.akciosar / 100)) : termek.ar} Ft</span>
                                        </div>
                                        <div className='buy w-full'>
                                            <Link to={"/info/" + termek.id} className='flex hover:font-bold hover:bg-stone-300 rounded-lg p-2 justify-center items-center bg-stone-200 w-full font-medium'>Vásárlás</Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home