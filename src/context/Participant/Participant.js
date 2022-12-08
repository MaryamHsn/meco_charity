import AddParticipant from './AddParticipant'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function Participant() {

    const[newParticipant,setNewParticipant] = useState('')
    const [files,setFiles]= useState([
        // { id: 1, name: 'Fateme Babaie' },
        // { id: 2, name: 'Sanaz Zareie' },
        // { id: 3, name: 'Maryam Khoshroo' }
    ]);
    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/users').then(response=>setFiles(response.data))
    },[])
    return (
      <div className='box'>
        <div className='card'>
        <button className='btn' onClick={()=>setNewParticipant(!newParticipant)}>
            {newParticipant? <span>- افزودن شرکت کننده</span> : <span> + افزودن شرکت کننده</span>}
        </button>
        <div>
            {newParticipant && <AddParticipant />}
        </div>
        </div>

        <table>
            <thead>
                <th>نام و نام خانوادگی </th>
                <th>شماره پرسنلی </th>
                <th>نوع قرارداد </th>
                <th> مدیریت</th>
                <th> مبلغ</th>
                <th> از حقوق سال</th>
                <th> از حقوق ماه</th>
                <th> به مدت</th>
            </thead>
            <tbody>
                {files.map(file=>(
                <tr key={file.id}>
                    <td><Link to={`/ParticipantMember/${file.id}`} >{file.name}</Link></td>
                    <td>{file.id}</td>
                    <td>{file.username}</td>
                    <td>{file.company.name}</td>
                    <td>{file.phone}</td> 
                    <td>{file.phone}</td> 
                    <td>{file.phone}</td> 
                    <td>{file.phone}</td> 
                </tr>
                ))}
            </tbody>
        </table>

     </div>
  )
}
