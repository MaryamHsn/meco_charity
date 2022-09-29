import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

export default function FileInformation() {
    const [file,setFile]= useState({});
    const {id} = useParams();
    useEffect(()=>{
     axios(`https://jsonplaceholder.typicode.com/users/${id}`).then(response=>setFile(response.data))
    },[])
  return (
    <div>   
        
    </div>
  )
}
