import React, {  useContext } from 'react'

import { useNavigate } from 'react-router'
import { AppContext } from '../Context/Context';

const Topdoctors = () => {

    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>

        <h1 className=' text-3xl font-medium'>Top Doctors to Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>simply browse through the list</p>

        <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {
                doctors.slice(0,10).map((item,index)=>(
                    <div onClick={()=>navigate(`/appointment/${item._id}`)}  key={index} className='border border-blue-200 rounded-xl overlflow-hidden cursor-pointer hover:translate-y-[-10px] transistion-all duration-300'>
                        <img   className='bg-blur-50 ' src={item.image} alt="" />
                        <div className='p-4'>
                            <div className='flex items-center gap4  text-sm text-center text-green-500'>
                                <p className='w-2 h-2 rounded-full bg-green-500'></p> <p>Avialable</p>
                            </div>
                            <p className='text-gray-900 font-medium'>{item.name}</p>

                            <p className='text-gray-600 '>{item.speciality}</p>

                        </div>




                      
                        </div>

                ))
            }
        </div>


        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='text-gray-900 bg-blue-50 px-12 py-3 rounded-full mt-10 cursor-pointer'>More</button>





    </div>
  )
}

export default Topdoctors