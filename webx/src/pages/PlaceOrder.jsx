import React, { useMemo,useContext } from 'react'
import arContext from "../context/ArContext"
import TopBar from '../components/topbar/topbar'
import OrderPlace from '../components/placeOrder/Veglegesites'
const PlaceOrder = () => {
    let vegar =0
    const {cart}=useContext(arContext);
    useMemo(()=>{
        vegar=0
        cart.map((i)=>{
            vegar+=i.ar*i.darab
        })
    },[cart])
    if (cart?.length==0){
        return(
            <h1 className='w-screen h-screen flex justify-center items-center text-6xl'>A kosár tartalma üres</h1>
        )
    }
  return (
    <>
        <TopBar />
        <div className='h-24'></div>
        <OrderPlace/>
    </>
  )
}

export default PlaceOrder