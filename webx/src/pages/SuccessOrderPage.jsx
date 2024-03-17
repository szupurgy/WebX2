import React from 'react'
import TopBar from '../components/topbar/topbar'
import Szamla from '../components/szamla/Szamla'
import { useParams } from 'react-router-dom'

const SuccessOrderPage = () => {
    const { id } = useParams()
  return (
    <>
        <TopBar/>
        <Szamla id={id}/>
    </>
  )
}

export default SuccessOrderPage