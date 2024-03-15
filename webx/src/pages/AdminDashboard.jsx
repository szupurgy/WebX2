import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { IoChatboxEllipses } from "react-icons/io5";
import { BsShop } from "react-icons/bs";
import { FaUsersCog } from "react-icons/fa";
import { BsCartPlus } from "react-icons/bs";
import { TbShoppingCartX } from "react-icons/tb";
import Uzenofal from '../components/admin/Uzenofal';
import Felhasznalok from '../components/admin/Felhasznalok';
import Eladasok from '../components/admin/Eladasok';
import Panel from '../components/admin/Panel';
import AddTermek from '../components/admin/AddTermek';
import RemoveTermek from '../components/admin/RemoveTermek';

const AdminDashBoard = () => {
  const admintoken = localStorage.getItem('adminToken');
  const navigate = useNavigate()
  useEffect(() => {
    if (!admintoken) {
      navigate("/admin", { replace: true })
    }
  }, [])

  const [page, setPage] = useState(0);
  const pages = [<Panel/>, <Uzenofal/>, <Eladasok/>, <Felhasznalok/>, <AddTermek/>, <RemoveTermek/>,]
  return (
    <div className='h-screen overflow-hidden w-screen bg-black'>
      <nav className='w-full flex h-24 bg-slate-800 drop-shadow-2xl decoration-purple-700 rounded-b '>
        <div className='w-32 h-24'>
          <img src="goldlogo.png" className='w-full shadow-lg h-full' />
        </div>
        <div className='flex w-full px-5 items-center justify-between'>
          <div className='text-2xl text-red-600 font-bold'>WEBX</div>
          <div className='text-xl text-white'>Admin panel</div>
        </div>
      </nav>
      {/* topbar */}
      <div className='flex w-screen h-full'>
        <nav className='w-40 sm:w-80 h-full p-2 bg-gray-600'>
          <div onClick={()=>{setPage(0)}} className={`flex  hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4`}>
            <MdDashboard className='size-6' />
            <h1>Panel</h1>
          </div>
          <div onClick={()=>{setPage(1)}} className='flex hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4'>
            <IoChatboxEllipses className='size-6' />
            Üzenőfal
          </div>
          <div onClick={()=>{setPage(2)}} className='flex hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4'>
            <BsShop className='size-6' />
            <h1>Eladások</h1>
          </div>
          <div onClick={()=>{setPage(3)}} className='flex hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4'>
            <FaUsersCog className='size-6' />
            <h1>Felhasználók</h1>
          </div>
          <div>
            <div>
              <h1 className='text-sm text-slate-300'>Termék kezelő</h1>
            </div>
            <div onClick={()=>{setPage(4)}} className='flex hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4'>
              <BsCartPlus className='size-6' />
              <h1>Termék hozzáadása</h1>
            </div>
            <div onClick={()=>{setPage(5)}} className='flex hover:text-gray-400 text-white sm:text-2xl gap-2 cursor-pointer items-center px-2 sm:px-4'>
              <TbShoppingCartX className='size-6' />
              <h1>Termék eltávolítása</h1>
            </div>
          </div>
        </nav>
        <div className='text-white w-full sticky'>
          {
            pages[page]
          }
        </div>
      </div>
    </div>
  )
}

export default AdminDashBoard