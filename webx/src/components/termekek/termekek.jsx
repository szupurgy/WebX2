import React, { useEffect, useState } from 'react'

const AllProducts = () => {
    const [termekek, setTermekek] = useState(null)
    useEffect(() => {
        const termekContainer = document.querySelector("#termekek");
        const getAllProducts = async () => {
            const response = await fetch('http://localhost:8000/product/all');
            const data = await response.json();
            setTermekek(data)
            for (let i = 0; i < data.length; i++) {
                termekContainer.innerHTML += `<div class='main hover:scale-95 transition flex flex-col p-5 gap-5 rounded-2xl md:pb-10 drop sm:w-1/2 md:size-80 md:gap-1 size-11/12 shadow-2xl justify-center items-center bg-gradient-to-t from-stone-500'>
                <div class='kep'>
                    <img src='https://media-play.pl/ecommerce/medias/productimages/48733/TE-AP-12PM1-PL1-BU/square.png' class='size-60 md:size-40 hover:scale-110 transition drop-shadow-2xl' >
                </div>
                <div class='szoveg flex flex-col gap-2 w-full'>
                    <span class='termeknev font-bold flex w-full items-center justify-center text-center text-2xl'>${data[i].nev}</span>
                    <span class='rovidleiras flex w-full text-center items-center justify-center'>${data[i].ar} Ft</span>
                </div>
                <div class='buy w-full '>
                    <a href='/info/:${data[i].id}' class='flex hover:font-bold hover:bg-stone-300 rounded-lg p-2 justify-center items-center bg-stone-200 w-full font-medium'>Buy now</a>
                </div>
                </div>`
            }
        }
        getAllProducts();
    }, [])
    console.log(termekek)
    return (
        <>
            <div id='termekek' className="flex p-10 flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 justify-center items-center">

            </div>
        </>
    )
}

export default AllProducts