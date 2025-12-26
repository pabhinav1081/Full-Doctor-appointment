import React from 'react'
import Header from '../Component/Header'
import SpeacilityMenu from '../Component/SpeacilityMenu'
import Topdoctors from '../Component/Topdoctors'
import Banner from '../Component/Banner'

const Home = () => {
  return (
    <div>
        <Header />
        <SpeacilityMenu />
        <Topdoctors />
        <Banner />
    </div>
  )
}

export default Home