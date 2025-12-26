import React from 'react'
import { assets } from '../assets/assets'

const Banner = () => {
  return (
    <div className='flex bg-[#5f6FFF] '>
        <div>
            <div>
                <p>Book Appointment</p>
                <p>with 100+ Trusted Doctors</p>

            </div>
            <button>Create account</button>







        </div>
        <img src={assets.appointment_img} alt="" />





        <div>





        </div>
    </div>
  )
}

export default Banner