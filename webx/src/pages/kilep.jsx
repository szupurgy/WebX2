import React from 'react'

const LogOut = () => {
    localStorage.removeItem("token");
    location.href = '/home'
  return (
    <div className='w-screen h-screen flex justify-center items-center text-4xl'>Sikeres Kijelentkezés ...</div>
  )
}

export default LogOut