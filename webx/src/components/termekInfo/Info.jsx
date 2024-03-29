import React, {useContext} from 'react'
import arContext from '../../context/ArContext';
import { toast } from 'react-hot-toast';
const TInfo = ({ data }) => {
  const {cart,setCart}=useContext(arContext);
  const kosarba = () => {
    const isItemInCart= cart?.find((item)=>item.id === data.id);
    if (isItemInCart) {
      setCart(
      cart.map((cartItem)=>
        cartItem.id === data.id
        
       ? {...cartItem, darab: cartItem.darab>=10? 10 : cartItem.darab + 1, kep:data?.termekkepek.kep }
       : cartItem
       )
      )
    } else {
      setCart([...cart,{ ...data,darab:1}])
    }
    toast.success("Termék sikeres a kosárhoz adva!");
  }
  return (
    <>
      <div className='h-24'></div>
      <div className='block md:flex md:border'>
        <div className='md:w-1/2 md:border-r'>
          <img src={`http://localhost:8000/uploads/${data?.termekkepek[0].kep}`} className='m-auto size-60' />
        </div>
        <div className='md:w-1/2 md:mt-2'>
          <h1 className='text-center text-2xl'>{data?.nev}</h1>
          <hr className='mx-5 mt-2' />
          <div className='w-full flex justify-center md:m-3 mt-3 items-center'>
            <h1 onClick={kosarba} className='text-center w-full md:w-1/2 flex justify-center items-center cursor-pointer bg-stone-400 p-3 rounded-2xl text-3xl font-semibold font-sans'>Kosárba</h1>
          </div>
          <hr className='mx-5 mt-2' />
          <h1 className={`text-4xl mx-5 ${data?.akcios ? "line-through font-normal text-xl text-red-700" : "text-green-600 font-bold"}`}>{data?.ar} Ft</h1><span className={`${data?.akcios ? "flex" : "hidden"} no-underline text-2xl p-5 flex justify-end absolute -mt-3 right-0 font-normal text-black`}>-{data?.akcios ? data?.akciosar : ""} %</span>
          <h1 className={`text-green-500 text-4xl mx-5 font-bold ${data?.akcios ? "" : "hidden"} `}>{Math.round(data?.akcios ? (data?.ar-(data?.ar * (data?.akciosar / 100))) : (data?.ar))} Ft</h1>
          <h2 className='mx-5'>Garancia: 12 hónap</h2>
        </div>
      </div>
      <div>
        <h2 className='flex justify-between px-5 py-3 text-xl'>{data?.leiras}</h2>
      </div>
      {/* <h1><span className='font-bold'></span></h1> */}
      <div className='w-full bg-slate-100 m-4 mx-auto rounded-lg p-4'>
        <h1 className='text-xl font-bold text-slate-500'>Termék adatai</h1>
        <div className='flex'>
          <div className='w-1/2 flex flex-col'>
            <h1><span className='font-bold'>Kijelző mérete:</span> {data?.termekparams[0]?.kijelzo}"</h1>
            <h1><span className='font-bold'>Magasság:</span> {data?.termekparams[0]?.magassag} mm</h1>
            <h1><span className='font-bold'>Szélesség:</span>{data?.termekparams[0]?.szelesseg} mm</h1>
            <h1><span className='font-bold'>Vastagság:</span>{data?.termekparams[0]?.vastagsag} mm</h1>
            <h1><span className='font-bold'>Tömeg:</span>{data?.termekparams[0]?.tomeg} g</h1>
            <h1><span className='font-bold'>Szín:</span>{data?.termekparams[0]?.szin}</h1>
          </div>
          <div className='w-1/2'>
            <h1><span className='font-bold'>USB:</span> {data?.termekparams[0]?.usb}</h1>
            <h1><span className='font-bold'>Vízálló:</span> {data?.termekparams[0]?.vizallo}</h1>
            <h1><span className='font-bold'>Wifi:</span> {data?.termekparams[0]?.wifi}</h1>
            <h1><span className='font-bold'>Fő kamera:</span> {data?.termekparams[0]?.kamera}</h1>
            <h1><span className='font-bold'>GPU:</span>{data?.termekparams[0]?.gpu}</h1>
            <h1><span className='font-bold'>CPU:</span>{data?.termekparams[0]?.CPU}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default TInfo