import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function FileInformations() {
    const [files,setFiles]= useState([
        // { id: 1, name: 'Fateme Babaie' },
        // { id: 2, name: 'Sanaz Zareie' },
        // { id: 3, name: 'Maryam Khoshroo' }
    ]);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users').then(response=>setFiles(response.data))
    },[])
    function search(id){
        alert("hi")
        setFiles(item=>{item.id != id && item.filter(id)})
    }
  return (
    <div className='box'>
        <div> 
            <input type='text' className='input-form'></input>
        <button className='btn-submit' onClick={()=>search()}>جستجو</button>    

        </div>
        <table>
            <thead>
                <th>شماره پرونده</th>
                <th>نام و نام خانوادگی نیازمند</th>
            </thead>
            <tbody>
                {files.map(file=>(
                <tr key={file.id}>
                    <td><Link to={`/FileInformation/${file.id}`} >{file.id}-{file.name}</Link></td>
                    <td>{file.name}</td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
