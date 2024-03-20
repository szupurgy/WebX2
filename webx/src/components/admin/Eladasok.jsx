import React, { useEffect, useState } from 'react'
import DataTable from "react-data-table-component";
const Eladasok = () => {
    const [rendelesek, setRendelesek] = useState()
    useEffect(() => {
        const rendelesek = async () => {
            const rendelesek = await fetch("http://localhost:8000/admin/rendelesek")
            const data = await rendelesek.json()
            setRendelesek(data)
        }
        rendelesek()
    }, [])
    const columns = [
        {
            name: "Rendelésazon",
            selector: row => row.rendelesazonosito
        },
        {
            name: "Dátum",
            selector: row => row.datum
        },
        {
            name: "Felhasználó",
            selector: row => row.Felhasznalo.felhasznalonev
        },
        {
            name: "Termék",
            selector: row => row.Termek.nev
        },
        {
            name: "Mennyiség",
            selector: row => row.mennyiseg
        },
        {
            name: "Jelenlegi ár",
            selector: row => row.jelenlegiar
        },
        {
            name: "Fizetési mód",
            selector: row => row.fizMod
        },
        {
            name: "Szállítási mód",
            selector: row => row.SzalMod
        },
        {
            name: "Cím",
            selector: row => (row.Cim.varos +" "+ row.Cim.utca +" "+ row.Cim.hazszam)
        },
    ]
    return (
        <div className='w-full p-2 h-full'>
            <h1 className='flex text-white justify-center items-center'>Eladások</h1>
            <div className='bg-gray-800 overflow-y-scroll p-5 mb-60 w-11/12 mx-auto h-5/6'>
                <DataTable
                    columns={columns}
                    data={rendelesek}
                ></DataTable>
            </div>
            <div className='mb-36'></div>
        </div>
    )
}

export default Eladasok