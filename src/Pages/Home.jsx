import React from 'react'
import Header from '../Component/Header'
import SpeacilityMenu from '../Component/SpeacilityMenu'
import Topdoctors from '../Component/Topdoctors'

const Home = () => {
  return (
    <div>
        <Header />
        <SpeacilityMenu />
        <Topdoctors />
    </div>
  )
}

export default Home