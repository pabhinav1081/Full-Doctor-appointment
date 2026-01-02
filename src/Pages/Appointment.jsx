import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router";
import {AppContext} from "../Context/Context.jsx";

const Appointment = () => {

  const {docId} = useParams();
  const {doctors} = useContext(AppContext)
  const [docinfo,setDocinfo] = useState(null)


  const fetchDoInfo= async () =>{
    const docInfo=doctors.find(doc=>doc._id==docId)
    setDocinfo(docInfo);

  }
  useEffect(()=>{

    fetchDoInfo()
  },[doctors,docId])
  return (
    <div>
      u



    </div>

  )
}

export default Appointment