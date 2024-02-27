import React from 'react'
import axios from "axios"
import toast, { Toaster } from 'react-hot-toast';

const Belepes = () => {
    const belepes= async()=> {
        const email=document.querySelector("#Name").value;
        const jelszo=document.querySelector("#Password").value;
        axios.post("http://localhost:8000/user/login", {
        email: email,
        jelszo: jelszo,
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then((res) => {
            console.log(res)
            if (res.data=="Hiányzó adat!") {
                toast.error("Hiányzó adatok!");
            } else if (res.data.message == "Felhasználó nem található!") {
                toast.error("Felhasználó nem található!");
            } else{
                localStorage.setItem("token", res.data.token)
                location.href = '/home'
            }
        })
    }
  return (
    <>
    <div className='w-screen h-screen justify-center items-center sm:flex'>
        <div className='bg-gray-50 sm:m-6 sm:p-10 w-screen h-full sm:h-auto sm:w-3/6 rounded-md border-stone-950 border-2 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]'>
        <div>
            <a href="home">
            <img src="../public/logo.png" className='w-full h-full'/>
            </a>
        </div>
        <hr className=' shadow-lg ' />
        <div>
            <form className='inline-flex w-full' action="login">
                <div className='w-full md:w-1/2'>
                    <h1 className='p-2 text-xl text-center sm:text-start'>Felhasználónév:</h1>
                    <input id='Name' type='text' placeholder='Név' className='border w-full rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl text-center sm:text-start'>Jelszó:</h1>
                    <input id='Password' type="password" placeholder='Jelszó' className='border w-full rounded-md p-2.5 shadow-md' />
                    <br />
                    <a href="signup" className='text-blue-600'>Regisztráció</a>
                    
                        <div className=' flex justify-center items-center'>
                            <button id='Belepes' onClick={belepes} type="button" className='text-2xl m-6 p-3 border rounded-md bg-green-700'>Belépés!</button>
                        </div>
                   
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Belepes