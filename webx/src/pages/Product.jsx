import React, { useEffect, useState } from 'react'
import TopBar from '../components/topbar/topbar'
import TInfo from '../components/termekInfo/Info'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const TermekOldal = () => {
  const { id } = useParams()
  const [termek, setTermek] = useState()

  useEffect(() => {
    axios.post("http://localhost:8000/product/getProduct", {
      id: id
    }, )
    .then(({data}) => {
      setTermek(data)
    })
  }, [])
  return (
    <>
    <TopBar />
    <TInfo data={termek}/>
    </>
  )
}

export default TermekOldal