import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-dom'

const SpeacilityMenu = () => {
  return (
    <div id='#speciality'>
        <h1>Find By Speciality</h1>
        <p>schedule your appointment hassle-free</p>
        <div>
            {
                specialityData.map((item, index) => (
  <Link key={index} to={`/doctors/${item.speciality}`}>
    <img src={item.image} alt={item.speciality} />
    <p>{item.speciality}</p>
  </Link>
))

            }




        </div>








    </div>
  )
}

export default SpeacilityMenu