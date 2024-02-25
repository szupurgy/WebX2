import React from 'react'
import TopBar from '../components/topbar/topbar'
import AllProducts from '../components/termekek/termekek'
import LeftBar from '../components/leftBar/LeftBar'

const TermekekOldal = () => {
  return (
    <div className='overflow-hidden'>
      <TopBar />
      <LeftBar></LeftBar>
      <AllProducts />
    </div>
  )
}

export default TermekekOldal