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
        
       ? {...cartItem, darab: cartItem.darab>=10? 10 : cartItem.darab + 1 }
       : cartItem
       )
      )
    } else {
      setCart([...cart,{ ...data,darab:1}])
    }
    
  }
  return (
    <>
      <div className='h-24'></div>
      <div className='block md:flex md:border'>
        <div className='md:w-1/2 md:border-r'>
          <img src="https://images.macrumors.com/t/OGS-wMpuHXbX6VkpJd6urJH1rEg=/1600x0/article-new/2023/09/iphone-15-pro-gray.jpg" />
        </div>
        <div className='md:w-1/2 md:mt-2'>
          <h1 className='text-center text-2xl'>{data?.nev}</h1>
          <hr className='mx-5 mt-2' />
          <div className='w-full flex justify-center md:m-3 mt-3 items-center'>
            <h1 onClick={kosarba} className='text-center w-full md:w-1/2 flex justify-center items-center cursor-pointer bg-stone-400 p-3 rounded-2xl text-3xl font-semibold font-sans'>Kosárba</h1>
          </div>
          <hr className='mx-5 mt-2' />
          <h1 className={`text-4xl mx-5 ${data?.akcios ? "line-through font-normal text-xl text-red-700" : "text-green-600 font-bold"}`}>{data?.ar} Ft</h1>
          <h1 className={`text-green-500 text-4xl mx-5 font-bold ${data?.akcios ? "" : "hidden"} `}>{data?.ar*(data?.akciosar/100)} Ft</h1>
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
            <h1><span className='font-bold'>Kijelző mérete:</span> 6,1"</h1>
            <h1><span className='font-bold'>Magasság:</span> 146.6 mm</h1>
            <h1><span className='font-bold'>Szélesség:</span>70.6 mm</h1>
            <h1><span className='font-bold'>Vastagság:</span>8.3 mm</h1>
            <h1><span className='font-bold'>Tömeg:</span>187 g</h1>
            <h1><span className='font-bold'>Szín:</span>Kék</h1>
          </div>
          <div className='w-1/2'>
            <h1><span className='font-bold'>USB:</span> type-c</h1>
            <h1><span className='font-bold'>Vízálló:</span> igen</h1>
            <h1><span className='font-bold'>Wifi:</span> igen</h1>
            <h1><span className='font-bold'>Fő kamera:</span> 12 MP</h1>
            <h1><span className='font-bold'>GPU:</span>Apple GPU (6-core graphics)</h1>
            <h1><span className='font-bold'>CPU:</span>Hexa-core (2x3.78 GHz + 4x2.11 GHz)</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default TInfo