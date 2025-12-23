import React from 'react'
import { specialityData } from '../assets/assets'
import {Link} from 'react-router'

const SpeacilityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 texy-gray-600 mt-10' id='#speciality'>
        <h1 className='text-3xl font-medium'>Find By Speciality</h1>
        <p className='sm:w-1/3 text-center text-sm'>schedule your appointment hassle-free</p>
        <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-scroll'>
         {
  specialityData.map((items, index) => (
    <div key={index}>
      <Link to={ `doctors/${items.speciality}`} className='flex flex-col items-center cursor-pointer flex-shrink hover:translate-y-[-10px] trainsiton-all duration-500'
      onClick={()=>scrollTo(0,0)}>
        <img className='w-16 sm:w-24 mb-2' src={items.image} alt={items.speciality} />
      </Link>
      <p>{items.speciality}</p>
    </div>
  ))
}

          
        




        </div>








    </div>
  )
}

export default SpeacilityMenu