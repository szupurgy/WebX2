import TopBar from '../topbar/topbar'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from "react-hot-toast"

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
    const saveName=(async()=>{
      if (nev=="" || nev==null || nev.length==0) {
        toast.error("A név megadása kötelező!");
        return;
      } else if (nev=="Ferenczi Tímea"){
        toast.error("A név nem lehet 'Ferenczi Tímea'!");
        return;
      }
      const response= await fetch("http://localhost:8000/new/changename",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body:JSON.stringify({"set":nev})
      })
      const data=await response.json();
      toast.success("Sikeres név változtatás!")
    })

    const saveJelszo=async()=>{
      toast.error("Ez a funció jelenleg nem elérhető")
      return;
      if (regijelszo==null || regijelszo.length==0 ||ujjelszo==null ||ujjelszo.length==0 || ujjelszoag==null || ujjelszoag.length==0) {
        toast.error("Minden mező kitöltése kötelező!");
        return;
      }
      if (ujjelszo.length < 8) {
        toast.error("Az új jelszó nem megfelelő!")
        return;
      }
      const testField={
        "email": profile.email,
        "jelszo": regijelszo
      }
      const testoldpassword= await fetch("http://localhost:8000/user/login",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body:JSON.stringify(testField)
      })
      const oldpData= await testoldpassword.json();
      if (oldpData.token) {}
      else {
        toast.error("Hibás Jelszó!")
        return;
      }
      if (ujjelszo!=ujjelszoag) {
        toast.error("Nem eggyezik a két jelszó!")
        return;
      }
      const response = await fetch("http://localhost:8000/new/changepassword",{
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
        body:JSON.stringify({"set":ujjelszo})
      })
      const data=await response.json();
      console.log(data);
      toast.success("Sikeres jelszó változtatás!")

    }
    const saveTelSzul=()=>{
      toast.error("Ez a funció jelenleg nem elérhető")
      return;
      console.log(telefon);
      console.log(szuldatum);
    }
    const saveDelivery=()=>{
      toast.error("Ez a funció jelenleg nem elérhető")
      return;
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