import React, { useEffect, useState } from 'react'
import toast from "react-hot-toast"
const AddParameter = () => {
    const [kijelzo, setKijelzo] = useState();
    const [magassag, setMagassag] = useState();
    const [szelesseg, setSzelesseg] = useState();
    const [vastagsag, setVastagsag] = useState();
    const [tomeg, setTomeg] = useState();
    const [szin, setSzin] = useState();
    const [usb, setUSB] = useState();
    const [vizallo, setVizallo] = useState();
    const [wifi, setWifi] = useState();
    const [kamera, setKamera] = useState();
    const [gpu, setGPU] = useState();
    const [CPU, setCPU] = useState();
    const [selected, setselected]= useState();
    const [termekek, setTermekek]=useState()
    useEffect(()=>{
        const termekek= async() => {
            const termek= await fetch("http://localhost:8000/admin/alltermek")
            const data = await termek.json()
            setTermekek(data)
        }
        termekek()
    },[])

    const paramadd= async() => {
        const paramadd= await fetch("http://localhost:8000/admin/addparams",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                selected:Number(selected),
                kijelzo:Number(kijelzo),
                magassag: Number(magassag),
                szelesseg:Number(szelesseg),
                vastagsag:Number(vastagsag),
                tomeg:Number(tomeg),
                szin:szin,
                usb:usb,
                vizallo:vizallo,
                wifi:wifi,
                kamera:kamera,
                gpu:gpu,
                CPU:CPU,
            })
        })
        const data = await paramadd.json()
        if(data.message){
            toast.success(data.message)
        } else{
            toast.error(data)
        }
    }
    return (
        <div className='w-full flex overflow-scroll flex-col p-2 m-5 h-full '>
            <div className='bg-stone-400 text-black w-fit p-5 m-5'>
                <div>
                    <h1 className='text-4xl'>Paraméterek megadása</h1>
                </div>
                <div>
                    <select id="" onChange={(e)=>{setselected(e.target.value)}} className='w-full p-2 text-2xl border rounded'>
                    <option selected value={null} disabled>Termék kiválasztása</option>
                        {
                            termekek && termekek.map((termek, index) => (
                                <option key={index} value={termek.id}>{termek.nev}</option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    <div>
                        <h1 className=''>Kijelző mérete:</h1>
                        <input type="number" onChange={(e)=>{setKijelzo(e.target.value)}} id='km' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Magasság:</h1>
                        <input type="number" onChange={(e)=>{setMagassag(e.target.value)}} id='ms' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Szélesség:</h1>
                        <input type="number" onChange={(e)=>{setSzelesseg(e.target.value)}} id='szs' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Vastagság:</h1>
                        <input type="number" onChange={(e)=>{setVastagsag(e.target.value)}} id='vs' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Tömege:</h1>
                        <input type="number" onChange={(e)=>{setTomeg(e.target.value)}} id='tm' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Szín:</h1>
                        <input type="text" onChange={(e)=>{setSzin(e.target.value)}} id='szin' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>USB csatlakozó:</h1>
                        <input type="text" onChange={(e)=>{setUSB(e.target.value)}} id='usb' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Vízálló:</h1>
                        <input type="text" onChange={(e)=>{setVizallo(e.target.value)}} id='vp' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Wifi:</h1>
                        <input type="text" onChange={(e)=>{setWifi(e.target.value)}} id='wif' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>Fő kamera:</h1>
                        <input type="text" onChange={(e)=>{setKamera(e.target.value)}} id='kam' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>GPU:</h1>
                        <input type="text" onChange={(e)=>{setGPU(e.target.value)}} id='gpu' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                    <div>
                        <h1 className=''>CPU:</h1>
                        <input type="text" onChange={(e)=>{setCPU(e.target.value)}} id='cpu' className='ring-1 text-2xl ring-stone-400 w-11/12 p-2 rounded-md ' />
                    </div>
                </div>
                <div className='flex mt-5 justify-center items-center'>
                    <button onClick={paramadd} className='bg-gray-500 rounded p-3 text-3xl'>
                        Paraméter hozzáadása
                    </button>
                </div>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default AddParameter