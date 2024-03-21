import React, { useState } from 'react'
import toast from "react-hot-toast"
import { useNavigate } from 'react-router-dom';
const AdminLogin = () => {
    const [ nev, setNev ] = useState();
    const [ jelszo, setJelszo ] = useState();
    const navigate=useNavigate();
    const login = async()=>{
        const response = await fetch('http://localhost:8000/admin/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                nev: nev,
                jelszo: jelszo
            })
        });
        const data = await response.json();
        if(data.token){
            toast.success("Sikeres bejelentkezés!")
            //atiranyit dashboardra
            localStorage.setItem("adminToken", data.token)
            navigate("/admindashboard",{replace:true})
        }else{
            toast.error("Nem megfelelő admin adatok!");
        }
    }
    return (
        <div className='w-screen flex justify-center items-center h-screen bg-black'>
            <div className="bg-gray-800 text-white rounded p-4 mb-4 mx-3 w-full sm:w-1/2 lg:w-1/3">
                <div className="flex items-center justify-between mb-3">
                    <a href="home" className="">
                        <h3 className="text-red-600 text-2xl">WEBX</h3>
                    </a>
                    <h3 className='text-xl mt-2'>Admin panel</h3>
                </div>
                <div>
                    <input onChange={()=>{setNev(event.target.value)}} type="email" className="bg-gray-500 rounded p-3 my-3 w-full border-spacing-2 " placeholder="admin" />
                    <input onChange={()=>{setJelszo(event.target.value)}} type="password" className="bg-gray-500 rounded p-3 my-3 w-full border-spacing-2 " placeholder="Password" />
                </div> 
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <span className='px-2 flex text-sm '>Minden illetéktelen bejelentkezés jogi következményeket von maga után. Amennyiben nem rendelkezik admin jogosultsággal hagyja el ezt az oldalt.</span>
                </div>
                <button onClick={login} className="bg-red-600 w-full py-3 mb-4 text-xl">Belépés</button>
            </div>
        </div>
    )
}

export default AdminLogin