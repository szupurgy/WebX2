import React, { useEffect, useState } from 'react'
import {IoTrashBin} from "react-icons/io5";
import KosarElem from './kosarElemek';
const KosarPage = () => {
    const [termekek, setTermekek] = useState(null)
    const [vantermek,setVanTermek] = useState(true);
    const token= localStorage.getItem("token");
    useEffect(() =>{
        const kosarTartalma = (async() =>{
            const response = await fetch("http://localhost:8000/product/kosaram",{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                    'authorization':`Bearer ${token}`
                }
            })
            const data= await response.json();
            setTermekek(data);
        });
        kosarTartalma();
    },[])
    const elem=()=>{
        if (termekek==null || termekek.length==0) {
            return(
                <h1 className='text-4xl text-center md:text-start'>Nincsenek termékek a kosárban!</h1>
            )
        }
    }

    return (
        <>
            <div className='w-full flex md:flex-row flex-col bg-stone-100 h-full '>
                <div className='w-full md:w-4/6 p-3 gap-3 h-full border-r-2'>
                    {
                        termekek && termekek.map((termek) => {
                            return (
                                <KosarElem termek={termek} key={termek.id}/>
                            )
                        })                   
                    }
                    {
                        elem()
                    }
                </div>
                {/* fenti a jobb oldala , alsó a bal. */}
                <div className='w-full md:w-2/6 h-full flex flex-col '>
                    <div className='text-4xl flex justify-center items-center'>Kosár összesítő</div>
                    <hr className='mx-5' />
                    <div className='m-5 border rounded'>
                        <div className='w-full'>
                            <h1 className='flex justify-center items-center'>Termék összesítő</h1>
                        </div>
                        <hr className='mx-5' />
                        <div id='termekek' className='flex flex-col mx-5 gap-2 mt-2 mb-2'>
                            <h2>2x iphone 14 pro max</h2>
                            <h2>1x iphone 15 pro max</h2>
                            {/* kodbol ide a termekek neve x mennyiseg */}
                        </div>
                    </div>
                    <div className='flex justify-end '>
                        <button className={`${setVanTermek ? "flex":"hidden"} border bg-slate-300 border-slate-400 rounded-s-md p-2 w-20 duration-300 after:content-["Vásárlás"] hover:after:content-["Tovább_az_adatok_megadásához"] h-10 hover:h-full hover:w-64`}></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KosarPage