import React, { useEffect, useState } from 'react'

const Panel = () => {
    const [rendelesek,setRendelesek] = useState()
    const [felhasznalok,setFelhasznalok] = useState()
    const [termekek,setTermekek] = useState()
    const [hnrendeles,setHNRendeles] = useState(0)
    const [horendeles,setHoRendeles] = useState(0)
    const [lgujjabb,setlgujjabb]=useState();
    useEffect(()=>{
        const rendelesek= async()=>{
            const rendelesek = await fetch("http://localhost:8000/admin/rendelesek")
            const data = await rendelesek.json()
            setRendelesek(data)
            huszonnegy()
            egyhonap()
            legujabbtelo()
        }
        const felhasznalok = async()=>{
            const felhasznalok= await fetch("http://localhost:8000/admin/users")
            const data= await felhasznalok.json()
            setFelhasznalok(data)
        }
        felhasznalok()
        rendelesek()
    },[])
    const legujabbtelo= async()=>{
        const termek= await fetch("http://localhost:8000/admin/alltermek")
        const data= await termek.json();
        setTermekek(data);
        let hossz=data.length
        setlgujjabb(data[hossz-1].nev)
    }
    const huszonnegy = ()=>{
        var currentTime = new Date();
        rendelesek && rendelesek.map((rendeles,index)=>{
            var mainap=rendeles.datum;
            if (Number(mainap[8] + mainap[9])==currentTime.getDate()) {
                setHNRendeles(hnrendeles+1);
            }
        })
    }
    const egyhonap = ()=>{
        var currentTime = new Date();
        rendelesek && rendelesek.map((rendeles,index)=>{
            var mainap=rendeles.datum;
            if (Number(mainap[5] + mainap[6]) == currentTime.getMonth()+1) {
                setHoRendeles(horendeles+1);
            }
        })
    }
    return (
        <div className='w-full p-2 m-5 h-full overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Teljes</h2>
                </div>
                <div>
                    <h1 className='text-white'>{
                        rendelesek?.length
                    }</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Mai nap</h2>
                </div>
                <div>
                    <h1 className='text-white'>{hnrendeles}</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Eladások száma</h1>
                    <h2 className='text-stone-500 flex items-center justify-center'>Ez a hónap</h2>
                </div>
                <div>
                    <h1 className='text-white'>{horendeles? horendeles : horendeles}</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Felhasználók száma</h1>
                </div>
                <div>
                    <h1 className='text-white'>{felhasznalok?.length}</h1>
                </div>
            </div>
            <div className='ring-2 ring-gray-600 bg-gray-800 flex flex-col justify-center items-center rounded w-40 h-40'>
                <div className=''>
                    <h1 className='text-stone-400'>Legújabb termék</h1>
                </div>
                <div>
                    <h1 className='text-white'>{lgujjabb? lgujjabb:lgujjabb}</h1>
                </div>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default Panel