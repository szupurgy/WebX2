import React from 'react'
import TopBar from '../components/topbar/topbar'
import Szamla from '../components/szamla/Szamla'
import { useParams } from 'react-router-dom'

const SuccessOrderPage = () => {
    const { id } = useParams()
    console.log(id)
  return (
    <>
        <TopBar/>
        <div className='h-24'></div>
        <Szamla/>
    </>
  )
}

export default SuccessOrderPage