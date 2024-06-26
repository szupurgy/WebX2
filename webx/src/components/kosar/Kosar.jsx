import React, { useContext, useMemo, useState } from 'react'
import toast from "react-hot-toast"
import KosarElem from './KosarElemek';
import arContext from '../../context/ArContext';
import axios from 'axios';
const KosarPage = () => {
    const {cart}=useContext(arContext);
    const [vegar, setVegar] = useState()
    const [user,setUser]= useState()
    let vegosszeg = 0;
    useMemo(()=>{
        vegosszeg=0
        cart.map((i)=>{
            let ar = `${i.akcios ? i.ar-(i.ar *(i.akciosar / 100)) : i.ar}`
            setVegar(vegosszeg+=ar*i.darab)
        })
    },[cart])

    const token = localStorage.getItem("token");
    if (!token) {
        return (
            <h1 className='text-4xl w-screen flex justify-center items-center bg-slate-100 h-screen  text-center md:text-start'>A kosárhoz jelentkezzen be!</h1>
        )
    }
    useMemo(() => {
        axios.get("http://localhost:8000/user/me", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        },)
            .then(({ data }) => {
                setUser(data)
                if (data==null) {
                    localStorage.removeItem("token")
                }
            })
    }, [])
    
    const elem = () => {
        if (cart == null || cart.length == 0) {
            return (
                <h1 className='text-4xl text-center md:text-start'>Nincsenek termékek a kosárban!</h1>
            )
        }
    }
    
    const veglegesit= () => {
        if (cart == null || cart.length == 0) {
            toast.error("A kosár üres!");
            return;
        }
        location.href = "/placeorder";
    }
    return (
        <>
            <div className='h-24'></div>
            <div className='w-full flex md:flex-row flex-col bg-stone-100 h-full '>
                <div className='w-full md:w-4/6 p-3 gap-3 h-full border-r-2'>
                    {
                        cart && cart.map((termek,i) => {
                            return (
                                <KosarElem termek={termek} index={i} key={termek.id} />
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
                            {
                                cart && cart.map((termek, index) => (
                                    <h2 key={index}>{termek.darab} X {termek.nev}</h2>
                                ))
                            }
                        </div>
                        <hr className='mx-5' />
                        <h2 className='p-2 text-xl gap-2 text-indigo-800'><span className='text-2xl text-black font-bold'>Végösszeg:</span> {Math.round(vegar)} Ft</h2>
                    </div>
                    <div className='flex justify-end '>
                        <button onClick={veglegesit} className={`border bg-slate-300 border-slate-400 rounded-s-md p-2 w-20 duration-300 after:content-["Vásárlás"] hover:after:content-["Tovább_az_adatok_megadásához"] h-10 text-nowrap hover:w-64`}></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default KosarPage