import React from 'react'
import TopBar from '../components/topbar/topbar'
import AllProducts from '../components/termekek/termekek'
import LeftBar from '../components/leftBar/LeftBar'

const TermekekOldal = () => {
  return (
    <div className='overflow-hidden'>
      <TopBar />
      <div className="flex">
        <LeftBar><AllProducts /></LeftBar>
      </div>

    </div>
  )
}

export default TermekekOldal