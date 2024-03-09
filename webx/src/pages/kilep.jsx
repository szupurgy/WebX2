import React , { useContext } from 'react'
import userContext from '../context/UserContext';
const LogOut = () => {
    localStorage.removeItem("token");
    const {setToken,setUser} = useContext(userContext);
    setToken(null);
    setUser(null);
    location.href = '/home'
  return (
    <div className='w-screen h-screen flex justify-center items-center text-4xl'>Sikeres Kijelentkezés ...</div>
  )
}

export default LogOut