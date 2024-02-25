import React, { useEffect, useState } from 'react'
import TermekCard from './TermekCard'
const AllProducts = (prop) => {
    const [termekek, setTermekek] = useState(null)
    useEffect(() => {
        const termekContainer = document.querySelector("#termekek");
        const getAllProducts = async () => {
            const response = await fetch('http://localhost:8000/product/all');
            const data = await response.json();
            setTermekek(data)
        }
        getAllProducts();
    }, [])
    return (
        <>
            <div id='termekek' className="flex overflow-y-visible p-10 flex-col gap-10 md:grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-center items-center">
                {
                    termekek && termekek.map((termek) => {
                        return (
                            <TermekCard termek={termek} key={termek.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default AllProducts