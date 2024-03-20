import React, { useEffect, useState } from 'react'
import { IoSend } from "react-icons/io5";
const Uzenofal = () => {
  const token = localStorage.getItem("adminToken");
  const [uzenet, setUzenet] = useState()
  const [chat,setChat]=useState()
  const [ki, setKi] = useState()
  useEffect(() => {
    const fullchat = async () => {
      const res = await fetch("http://localhost:8000/admin/chat")
      const data = await res.json()
      setChat(data)
    }
    const whoami = async () => {
      const res = await fetch("http://localhost:8000/admin/who", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        }
      })
      const data = await res.json()
      setKi(data)
    }
    fullchat()
    whoami()
  }, [])
  const kuldes = async () => {
    const res = await fetch("http://localhost:8000/admin/sendmsg", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify({
        text: uzenet
      })
    })
    const data = await res.json();
    document.querySelector("#szovegfield").value = "";
    fullchat()
  }
  const fullchat = async () => {
    const res = await fetch("http://localhost:8000/admin/chat")
    const data = await res.json()
    setChat(data)
  }
  return (
    <div className='w-full p-2 overflow-scroll h-full'>
      <h1 className='flex text-white text-4xl justify-center items-center'>Admin üzenőfal</h1>
      <div className='bg-gray-800 justify-end items-end flex flex-col p-2 mb-60 w-11/12 mx-auto h-5/6'>
        <div className='h-5/6 bg-gray-600 w-full'>
          {/* chat */}
          {
            chat?.map((item, index) => {
              if (item?.userid == ki?.id) {
                return (
                  <div key={index} className='text-xl my-2 px-2 flex flex-col'>
                    <div className="flex gap-5">
                      <label className='text-sm'>{ki?.nev}</label>
                      <label className='text-sm'>{item?.datum}</label>
                    </div>
                    <label>{item?.message}</label>
                  </div>
                )
              } else {
                return (
                  <div key={index} className='text-xl flex flex-col'>
                    <div className="flex gap-5">
                      <label>{item?.userid}</label>
                      <label>{item?.datum}</label>
                    </div>
                    <label>{item?.message}</label>
                  </div>
                )
              }
            })
          }
        </div>
        <div className='flex bg-black p-2 w-full'>
          <input type="text" id='szovegfield' onChange={() => { setUzenet(event.target.value) }} placeholder='Üzenet írása...' className='w-full h-10 text-white bg-black' />
          <button onClick={kuldes} className='ml-2'>
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Uzenofal