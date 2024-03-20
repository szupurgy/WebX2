import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
const Felhasznalok = () => {
  const [felhasznalok, setFelhasznalok] = useState()
  useEffect(() => {
    const users = async () => {
      const felhasznalok = await fetch("http://localhost:8000/admin/users")
      const data = await felhasznalok.json()
      setFelhasznalok(data)
      console.log(data)
    }
    users()
  }, [])
  const columns=[
    {
      name:"Név",
      selector: row=>row.felhasznalonev
    },
    {
      name:"email",
      selector: row=>row.email
    },
    {
      name:"Születési dátum",
      selector: row=>row.szuldatum
    },
    {
      name:"telszam",
      selector: row=>row.telszam
    }
  ]
  return (
    <div className='w-full p-2 h-full'>
      <h1 className='flex text-white justify-center items-center'>Felhasználók</h1>
      <div className='bg-gray-800 overflow-y-scroll p-5 mb-60 w-11/12 mx-auto h-5/6'>
        <DataTable
          columns={columns}
          data={felhasznalok}
        ></DataTable>
      </div>
      <div className='mb-36'></div>
    </div>
  )
}

export default Felhasznalok