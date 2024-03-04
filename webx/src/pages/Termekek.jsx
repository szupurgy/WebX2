import React, { useState } from 'react'
import TopBar from '../components/topbar/topbar'
import AllProducts from '../components/termekek/termekek'
import LeftBar from '../components/leftBar/LeftBar'

const TermekekOldal = () => {
  const [minar,setMinAr]=useState(0);
  const [maxar,setMaxAr]=useState(0);
  function arszuro(min,max){
    setMinAr(min);
    setMaxAr(max);
  }
  function ArSetter(){
    return
  }
  return (

    <div className='overflow-hidden'>
      <div className='h-24'></div>
      <TopBar />
      <LeftBar szuro={arszuro}/>
      <AllProducts maxp={maxar} minp={minar} />
    </div>
  )
}

export default TermekekOldal