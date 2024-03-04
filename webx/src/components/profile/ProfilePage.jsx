import TopBar from '../topbar/topbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ProfileP = () => {
  const [profile, setProfile] = useState()
  const [delivery, setDelivery] = useState()
    const token = localStorage.getItem("token")
    if (!token) {
      return(
        <h1 className='text-4xl w-screen flex justify-center items-center bg-slate-100 h-screen  text-center md:text-start'>A profilhoz jelentkezzen be!</h1>
      )
    }

    const [nev,setNev] = useState();

    const [telefon,setTelefon] = useState();
    const [szuldatum,setSzuldatum] = useState();
    
    const [regijelszo,setRegiJelszo] = useState();
    const [ujjelszo,setUjJelszo] = useState();
    const [ujjelszoag,setUjJelszoag] = useState();

    const [orszag, setOrzsag] = useState();
    const [varos, setVaros] = useState();
    const [iranyitoszam,setIranyitoszam] = useState();
    const [utca,setUtca] = useState();
    const [hazszam,setHazszam]=useState();

    useEffect(() => {
        axios.get("http://localhost:8000/user/me", {
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        },)
            .then(({ data }) => {
                setProfile(data)
            })
        axios.get("http://localhost:8000/user/address", {
          headers: {
              'Content-Type': 'application/json',
              'authorization': `Bearer ${token}`
          }
        },)
          .then(({ data }) => {
            setDelivery(data)
          })
    }, [])

    const saveName=()=>{
      console.log(nev)
    }
    const saveJelszo=()=>{
      console.log(regijelszo);
      console.log(ujjelszo);
      console.log(ujjelszoag);
    }
    const saveTelSzul=()=>{
      console.log(telefon);
      console.log(szuldatum);
    }
    const saveDelivery=()=>{
      console.log(orszag);
      console.log(varos);
      console.log(iranyitoszam);
      console.log(utca);
      console.log(hazszam);
    }
    
  return (
    <>
      <TopBar/>

      {/* nev modositas */}
      <div className='w-screen bg-slate-200 h-full'>
        <div className='h-24'></div>
        <div className='w-full flex items-center justify-center text-4xl'>Adatlap</div>
        <hr className='bg-white mx-5 h-1' />
        <div className='border border-white mt-5 mx-5 p-2 gap-3 flex flex-col'>
          <div className='flex flex-col'>
            <label>Név:</label>
            <input className='p-2' type="text" onChange={()=>{setNev(event.target.value)}} defaultValue={profile?.felhasznalonev}/>
          </div>
          <div className='flex flex-col'>
            <label>E-mail cím:</label>
            <input className='p-2' type="text" disabled defaultValue={profile?.email}/>
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={saveName} className='bg-gray-500 rounded p-3 text-3xl'>
              Mentés
            </button>
          </div>
        </div>
        {/* jelszo modositas */}
        <div className='border border-white mt-5 mx-5 p-2 gap-3 flex flex-col'>
          <div className='flex flex-col'>
            <label>Régi jelszó:</label>
            <input className='p-2' type="password" onChange={()=>{setRegiJelszo(event.target.value)}} />
          </div>
          <div className='flex flex-col'>
            <label>Új jelszó:</label>
            <input className='p-2' type="password" onChange={()=>{setUjJelszo(event.target.value)}} />
          </div>
          <div className='flex flex-col'>
            <label>Új jelszó ismét:</label>
            <input className='p-2' type="password" onChange={()=>{setUjJelszoag(event.target.value)}} />
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={saveJelszo} className='bg-gray-500 rounded p-3 text-3xl'>
              Mentés
            </button>
          </div>
        </div>

        {/* szuldatum,telszam */}
        <div className='border border-white mt-5 mx-5 p-2 gap-3 flex flex-col'>
          <div className='flex flex-col'>
            <label>Szütelési dátum:</label>
            <input className='p-2' type="text" onChange={()=>{setSzuldatum(event.target.value)}} defaultValue={profile?.szuldatum} />
          </div>
          <div className='flex flex-col'>
            <label>Telefonszám:</label>
            <input className='p-2' type="number" onChange={()=>{setTelefon(event.target.value)}} defaultValue={profile?.telszam} />
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={saveTelSzul} className='bg-gray-500 rounded p-3 text-3xl'>
              Mentés
            </button>
          </div>
        </div>

        <div className='border border-white mt-5 mx-5 p-2 gap-3 flex flex-col'>
          <div>
            <h1 className='flex justify-center items-cente text-2xl'>Szállítási cím</h1>
          </div>
          <div className='flex flex-col'>
            <label>Szállítási név:</label>
            <input className='p-2' type="text" disabled defaultValue={profile?.felhasznalonev} />
          </div>
          <div className='flex flex-col'>
            <label>Ország:</label>
            <input className='p-2' type="text" onChange={()=>{setOrzsag(event.target.value)}} defaultValue={delivery && delivery.orszag ? delivery.orszag : ""} />
          </div>
          <div className='flex flex-col'>
            <label>Irányítószám:</label>
            <input className='p-2' type="number" onChange={()=>{setIranyitoszam(event.target.value)}} defaultValue={delivery?.iranyitoszam} />
          </div>
          <div className='flex flex-col'>
            <label>Város:</label>
            <input className='p-2' type="text" onChange={()=>{setVaros(event.target.value)}} defaultValue={delivery?.varos} />
          </div>
          <div className='flex flex-col'>
            <label>Utca:</label>
            <input className='p-2' type="text" onChange={()=>{setUtca(event.target.value)}} defaultValue={delivery?.utca} />
          </div>
          <div className='flex flex-col'>
            <label>házszám:</label>
            <input className='p-2' type="number" onChange={()=>{setHazszam(event.target.value)}} defaultValue={delivery?.hazszam} />
          </div>
          <div className='flex justify-center items-center'>
            <button onClick={saveDelivery} className='bg-gray-500 rounded p-3 text-3xl'>
              Mentés
            </button>
          </div>
        </div>

      </div>
    </>
  )
}

export default ProfileP