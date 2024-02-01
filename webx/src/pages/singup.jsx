import React from 'react'

const SignUp = () => {
    window.onload = () => {
        const regBTN=document.getElementById('Regisztracio');
        regBTN.addEventListener('click',async ()=> {
            const Register=await fetch('http://localhost:8000/user/register',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    felhasznalonev:document.getElementById('Name').value,
                    email:document.getElementById('Email').value,
                    jelszo:document.getElementById('Password').value,
                    telszam:document.getElementById('Telszam').value,
                    szuldatum:document.getElementById('szuldate').value
                })
            })
            const data=await Register.json();
            console.log(data)
            if(!user){
                alert("Hiba történt!");
                return;
            }
            window.localStorage.setItem('token',data.token);
        })
    }
  return (
    <>
    <div className='w-screen h-screen justify-center items-center flex flex-col'>
        <div className='bg-gray-50 p-10 w-screen h-screen sm:h-auto sm:w-1/2 rounded-md border-stone-950 border-2 shadow-[rgba(0,0,0,0.25)_0px_54px_55px,rgba(0,0,0,0.12)_0px_-12px_30px,rgba(0,0,0,0.12)_0px_4px_6px,rgba(0,0,0,0.17)_0px_12px_13px,rgba(0,0,0,0.09)_0px_-3px_5px]'>
        <div>
            <a href="home">
            <img src="../public/logo.png" className='w-full h-full'/>
            </a>
        </div>
        <hr className=' shadow-lg ' />
        <div className=''>
            <form className='inline-flex w-full' action="login">
                <div className='w-1/2'>
                    <h1 className='p-2 text-xl'>Felhasználónév:</h1>
                    <input id='Name' type='text' placeholder='Név' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>E-mail:</h1>
                    <input id='Email' type='email' placeholder='E-mail' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>Telefonszám:</h1>
                    <input id='Telszam' type='number' placeholder='Telefonszám' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>Születési dátum:</h1>
                    <input id='szuldate' type='date' placeholder='Születési dátum' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>Jelszó:</h1>
                    <input id='Password' type="password" placeholder='Jelszó' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <h1 className='p-2 text-xl'>Jelszó ismét:</h1>
                    <input id='Password_again' type="password" placeholder='Jelszó ismét' className='border ring-2 rounded-md p-2.5 shadow-md' />
                    <br />
                    <a href="login" className='text-blue-600'>Belépés</a>
                    <div>
                        <button id='Regisztracio' type="button" className='text-2xl m-6 p-3 border rounded-md bg-green-700'>Regisztráció</button>
                    </div>
                </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default SignUp