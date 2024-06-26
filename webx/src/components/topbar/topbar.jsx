import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg"
import { CgLogOut } from "react-icons/cg";
import { FaCartShopping} from "react-icons/fa6";
const TopBar = () => {
  const token = localStorage.getItem("token");
  
  if (!token) {
  } else {
  }
  let Links = [];
  if (!token) {
    Links = [
      { id:1, name: "Kezdőlap", link: "/home" },
      { id:2, name: "Termékek", link: "/products" },
      { id:3, name: <hr /> },
      { id:4, name: <FaCartShopping className='text-3xl'/>, link: "/kosar" },
      { id:5, name: <CgProfile className='text-3xl' />, link: `/login` }
    ]
  } else {
    Links = [
      { id:1, name: "Kezdőlap", link: "/home" },
      { id:2, name: "Termékek", link: "/products" },
      { id:3, name: <hr /> },
      { id:4, name: <FaCartShopping/>, link: "/kosar" },
      { id:5, name: <CgProfile className='text-3xl' />, link: `/profile` },
      { id:6, name: <CgLogOut className='text-4xl' />, link: "/logout" }
    ]
  }

  let [MenuBar, setMenuBar] = useState(false);
  return (
    <>
      <div className='w-full fixed bg-white z-50 h-24 top-0 left-0 shadow-md'>
        <div className='md:flex md:justify-between py-4 px-7 md:px-10'>
          <div className='text-2xl flex items-center border-gray-400'>
            <img src="../public/logo.png" className='w-24 border-r-2' />
          </div>
          <div onClick={() => { setMenuBar(!MenuBar); }} className='text-5xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={MenuBar ? 'close' : 'menu'}></ion-icon>
          </div>
          <ul className={`md:flex md:items-center pb-12 md:pb-0 absolute md:static bg-white shadow-md md:shadow-none
        md:z-auto z-[-1] left-0 w-full md:w-auto pl-9 md:pl-0 transition-all duration-500 ease-in 
        ${MenuBar ? 'top-20 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0 `}>
            {
              Links.map((gombok) => (
                <li key={gombok.id} className='md:ml-8 text-lg pr-6 my-7 md:my-0'>
                  <Link to={gombok.link} className='text-gray-800 hover:text-gray-400 cursor-pointer duration-500'>{gombok.name}</Link>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </>
  )
}

export default TopBar