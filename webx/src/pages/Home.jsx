import React from 'react'
import TopBar from '../components/topbar/topbar'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


const HomePage = () => {
  return (
    <>
      <TopBar />
      
    </>
  )
}

export default HomePage