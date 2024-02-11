import React from 'react'

const UtolsoLap = async(values) => {
    console.log(values.values)
    const Register=await fetch('http://localhost:8000/user/register',{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body:JSON.stringify({
          felhasznalonev:values.values.username,
          email:values.values.email,
          jelszo:values.values.password,
          telszam:values.values.telszam,
          szuldatum:values.values.szuldatum
      })
  })
  const data=await Register.json();
  console.log(data)
  window.localStorage.setItem('token',data.token);
    
  location.href="login";
  return (
    <div className='w-screen h-screen justify-center flex items-center text-4xl'>Sikeres Regisztráció</div>
  )
}

export default UtolsoLap