import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
const RemoveTermek = () => {
    const [termekek,settermekek] = useState()
    useEffect(()=>{
        const termekek = async() => {
            const termek= await fetch("http://localhost:8000/admin/alltermek")
            const data = await termek.json()
            settermekek(data)
        }
        termekek()
    },[])
    const torol= async(id)=>{
        const deltermek= await fetch("http://localhost:8000/admin/delete",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({id})
        })
        const data=await deltermek.json();
        console.log(data)
    }
    return ( 
        <div className='w-full p-2 m-5 h-full overflow-y-scroll grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
                termekek && termekek.map((termek,index)=>{
                    return(
                        <div className='w-44 h-44 rounded ring-2 bg-gray-600' key={index}>
                            <div className='flex'>
                                <img src={`http://localhost:8000/uploads/${termek.termekkepek[0].kep}`} className='w-3/4 h-32' alt="" />
                                <MdDeleteForever onClick={()=>{torol(termek.id)}} className='text-white cursor-pointer w-1/4 text-end flex justify-end size-10 items-end'/>
                            </div>
                            <div>
                                <h1>{termek.nev}</h1>
                                <h1>{termek.ar} Ft</h1>
                            </div>
                        </div>
                    )
               })
            }
            <div className='mb-36'></div>
        </div>
    )
}

export default RemoveTermek