import React, { useContext } from 'react'
import axios from "axios"
import toast from 'react-hot-toast';
import userContext from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Belepes = () => {
    const navigate = useNavigate();
    const { setToken, token } = useContext(userContext);
    const belepes = async (e) => {
        e.preventDefault();
        const email = document.querySelector("#Name").value;
        const jelszo = document.querySelector("#Password").value;
        axios.post("http://localhost:8000/user/login", {
            email: email,
            jelszo: jelszo,
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                if (res.data == "Hiányzó adat!") {
                    toast.error("Hiányzó adatok!");
                } else if (res.data.message == "Felhasználó nem található!") {
                    toast.error("Felhasználó nem található!");
                } else if (res.data.message == "Nem megfelelő jelszó!") {
                    toast.error("Hibás jelszó!");
                } else {
                    localStorage.setItem("token", res.data.token)
                    setToken(res.data.token)
                    navigate("/home", { replace: true })
                }
            })
    }
    return (
        <>
            <div className='w-screen h-screen justify-center items-center flex flex-col'>
                <div className='bg-gray-50 m-6 p-10 w-screen h-screen sm:h-auto sm:w-3/6 rounded-md border-stone-950 border-2 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]'>
                    <div>
                        <a href="home">
                            <img src="../public/logo.png" className='' />
                        </a>
                    </div>
                    <hr className=' shadow-lg ' />
                    <div>
                        <form className='inline-flex w-full' onSubmit={belepes}>
                            <div className='w-1/2'>
                                <h1 className='p-2 text-xl'>E-mail cím:</h1>
                                <input id='Name' type='email' placeholder='E-mail:' className='border rounded-md p-2.5 shadow-md' />
                                <h1 className='p-2 text-xl'>Jelszó:</h1>
                                <input id='Password' type="password" placeholder='Jelszó' className='border rounded-md p-2.5 shadow-md' />
                                <br />
                                <a href="signup" className='text-blue-600'>Regisztráció</a>

                                <div className=' flex justify-center items-center'>
                                    <button id='Belepes' type="submit" className='text-2xl m-6 p-3 border rounded-md text-white bg-indigo-700'>Belépés!</button>
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