import React, { useContext, useEffect, useMemo, useState } from 'react'
import arContext from '../../context/ArContext'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import fizetesContext from '../../context/FizetesContext';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import toast from "react-hot-toast"
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const OrderPlace = () => {
    const navigate = useNavigate();
    const { cart } = useContext(arContext)
    const [vegar, setVegar] = useState()
    let vegosszeg = 0;
    useMemo(() => {
        vegosszeg = 0
        cart.map((i) => {
            let ar = `${i.akcios ? i.ar - (i.ar * (i.akciosar / 100)) : i.ar}`
            setVegar(vegosszeg += ar * i.darab)
        })
    }, [cart])

    const [arrow, setarrow] = useState(false);
    const { szalmodok, fizmodok } = useContext(fizetesContext)
    const [user, setuser] = useState(null);
    const token = localStorage.getItem("token");

    useMemo(() => {
        axios.get("http://localhost:8000/user/me", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        },)
            .then(({ data }) => {
                setuser(data)
            })
    }, [])

    const [sznev, SetNev] = useState();
    const [irszam, SetIrszam] = useState();
    const [varos, SetVaros] = useState();
    const [utca, SetUtca] = useState();
    const [hazszam, SetHazszam] = useState();

    const [sztipus, SetSztipus] = useState();
    const [ftipus, SetFtipus] = useState();

    const CheckData = async() => {
        if (!sznev || !irszam || !varos || !hazszam || !utca || !sztipus || !ftipus) {
            toast.error("Minden adat kitöltése kötelező!")
            return;
        }
        const szalCimAdd=async()=>{
            const response = await fetch("http://localhost:8000/new/changedelivery", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    orszag: "Magyarország",
                    varos: varos,
                    iranyitoszam: Number(irszam),
                    utca: utca,
                    hazszam: Number(hazszam),
                })
            })
            const data = await response.json()
            console.log(data)
        }
        await szalCimAdd()
        const rendelesid = uuidv4();
        cart && cart.map(async (termek, index) => {
            const rendelesleadas = await fetch("http://localhost:8000/order/MakeOrder", {
                method:"POST",
                headers: {
                    'Content-Type': 'application/json',
                    'authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    tmkid: termek.id,
                    szalmod: sztipus,
                    fizmod: ftipus,
                    jelenlegiar: termek.ar,
                    mennyiseg: termek.darab,
                    rendelesazonosito: rendelesid
                })
            })
            const data = await rendelesleadas.json();
            console.log(data);
            if (data=="Sikeres megrendelés") {
                navigate('/success/'+rendelesid)
            }
            
        })
        toast.success("Sikeres rendelés!")
    }
    return (
        <>
            <div className='mt-20'>
                <div className='mx-5 md:m-auto md:w-2/3 lg:w-1/3 md:flex md:flex-col'>
                    <hr />
                    <div className='p-2'>
                        <h1 className='text-2xl mb-2'>Átvételi mód</h1>
                        <form className='p-2'>
                            {
                                szalmodok && szalmodok.map((item, index) => {
                                    return (
                                        <div className='gap-2 flex justify-between' key={index}>
                                            <div className='gap-2 flex'>
                                                <input type='radio' onClick={() => { SetSztipus(event.target.value) }} name='tipus' id={`tipus${index}`} key={index} value={item.tipus} />
                                                <label htmlFor={`tipus${index}`}>{item.tipus}</label>
                                            </div>
                                            <label htmlFor={`tipus${index}`}>{item.ár} Ft</label>
                                        </div>
                                    )
                                })
                            }
                        </form>
                    </div>
                </div>

                <div className='mx-5 md:m-auto md:w-2/3 lg:w-1/3 md:flex md:flex-col'>
                    <hr />
                    <div className='p-2'>
                        <h1 className='text-2xl mb-2'>Fizetési mód</h1>
                        <form className='p-2'>
                            {
                                fizmodok && fizmodok.map((item, index) => {
                                    return (
                                        <div className='gap-2 flex justify-between' key={index}>
                                            <div className='gap-2 flex'>
                                                <input type='radio' onClick={() => { SetFtipus(event.target.value) }} name='ftipus' id={`ftipus${index}`} key={index} value={item.tipus} />
                                                <label htmlFor={`ftipus${index}`}>{item.tipus}</label>
                                            </div>
                                            <label htmlFor={`ftipus${index}`}>{item.ár} Ft</label>
                                        </div>
                                    )
                                })
                            }
                        </form>
                    </div>
                </div>

                <div className='mx-5 md:m-auto md:w-2/3 lg:w-1/3 md:flex md:flex-col'>
                    <hr />
                    <div className='p-2'>
                        <h1 className='text-2xl mb-2'>Számlázási adatok</h1>
                        <div className='gap-2 p-2 flex flex-col'>
                            <input type="text" onChange={() => { SetNev(event.target.value) }} className='border-2' placeholder='Számlázási név' />
                            <input type="text" onChange={() => { SetIrszam(event.target.value) }} className='border-2' placeholder='Irányítószám' />
                            <input type="text" onChange={() => { SetVaros(event.target.value) }} className='border-2' placeholder='Város' />
                            <input type="text" onChange={() => { SetUtca(event.target.value) }} className='border-2' placeholder='Utca' />
                            <input type="text" onChange={() => { SetHazszam(event.target.value) }} className='border-2' placeholder='Házszám' />
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-5 md:m-auto md:w-2/3 lg:w-1/3 md:flex md:flex-col'>
                <hr />
                <div className='p-2'>
                    <span className='text-red-400 flex '>Rendelésével kapcsolatban a következő helyeken kap információt:</span>
                    <div className='flex w-full gap-2 p-2 flex-col lg:flex-row'>
                        <input type="text" className='border w-full py-1 select-none' disabled title='Amennyien a feltüntetett információk nem felelnek meg a valóságnak, a profil fülön tudja módosítani.' value={user ? user.email : ""} />
                        <input type="text" className='border w-full py-1 select-none' disabled title='Amennyien a feltüntetett információk nem felelnek meg a valóságnak, a profil fülön tudja módosítani.' value={user ? user.telszam : ""} />
                    </div>
                </div>
            </div>

            <div className='mx-5 md:m-auto md:w-2/3 lg:w-1/3 '>
                <hr />
                <div className='mx-5 my-5 text-white flex justify-between'>
                    <Link to="/kosar" className='bg-slate-400 p-2'>Vissza a kosár tartalmához</Link>
                    <button onClick={CheckData} className='bg-green-500 p-2' >Tovább </button>
                </div>
            </div>


            <div className='fixed flex-col right-0 top-24 z-10 flex bg-sky-200 w-64 justify-center items-center ring-2 rounded-b'>
                <div onClick={() => { setarrow(!arrow) }} className='flex flex-col justify-center items-center'>
                    <h1>Termékek <span className='text-xs align-top'>{cart.length}</span></h1>
                    <h1>{arrow ? <IoIosArrowUp /> : <IoIosArrowDown />}</h1>
                </div>
                <div className={`${arrow ? "flex" : "hidden"} flex-col`}>
                    {
                        cart && cart.map((termek, index) => (
                            <div key={index} className='flex'>
                                <img src={`http://localhost:8000/uploads/${termek.termekkepek[0].kep}`} className='w-10 h-10' />
                                <div>
                                    <a href={`/info/${termek.id}`} key={index}>{termek.nev}</a>
                                    <h2 className='text-indigo-800'>
                                    {Math.round(termek?.akcios ? (termek.ar - (termek.ar * (termek.akciosar / 100))) * termek.darab : (termek.ar) * termek.darab)} Ft
                                    </h2>
                                </div>
                            </div>
                        ))
                    }
                    <hr />
                    <dir className="-mt-0">
                        <h1 className='text-indigo-800 text-xl'>{Math.round(vegar)}ft</h1>
                    </dir>
                </div>
            </div>
        </>
    )
}

export default OrderPlace