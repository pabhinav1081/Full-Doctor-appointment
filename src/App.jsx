import React from 'react'
import './index.css'
import { Route,Routes } from 'react-router'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import About from './Pages/About'
import Myprofile from './Pages/Myprofile'
import Appointment from './Pages/Appointment'
import Login from './Pages/Login'
import Myappointment from './Pages/Myappointment'
const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctor' element={<Doctors />} />
        <Route path='/doctor/:speciality' element={<Doctors />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/about' element={< About />} />
        <Route path='/my-profile' element={ < Myprofile />} />
        <Route path='/my-appointments' element={<Myappointment />} />
        <Route path='/appointment/:docId' element={< Appointment/>} />


      </Routes>

    </div>
  )
}

export default App
