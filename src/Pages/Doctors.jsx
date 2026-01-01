import React, {useContext} from 'react'
import {useParams} from "react-router";

const Doctors = () => {



    const {speciality} = useParams();
    const {doctors} = useContext(Doctors);
    return (

        <div>
           <p>{speciality}</p>
            pthis
            <div>
               
            </div>


        </div>
    )
}
export default Doctors
